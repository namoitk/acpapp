from databases import Database
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


POSTGRES_USER = "temp"
POSTGRES_PASSWORD = "temp"
POSTGRES_DB = "advcompro"
POSTGRES_HOST = "db"


DATABASE_URL = f'postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}'


database = Database(DATABASE_URL)


async def connect_db():
   await database.connect()
   print("Database connected")


async def disconnect_db():
   await database.disconnect()
   print("Database disconnected")


# Function to insert a new user into the users table
async def insert_user(username: str, password: str, email: str):
    hashed_password = pwd_context.hash(password)  # Hash the password here
    query = """
    INSERT INTO users (username, password_hash, email)
    VALUES (:username, :password_hash, :email)
    RETURNING user_id, username, password_hash, email, created_at
    """
    values = {"username": username, "password_hash": hashed_password, "email": email}
    return await database.fetch_one(query=query, values=values)

async def insert_login(email: str, password_hash: str):
    try:
        query = """
        INSERT INTO users_login (email, password_hash)
        VALUES (:email, :password_hash)
        RETURNING login_log, email, password_hash, login_time
        """
        result = await database.fetch_one(query=query, values={"email": email, "password_hash": password_hash})
        if result:
            print(f"Login information for {email} successfully inserted.")
        return result
    except Exception as e:
        print(f"Error inserting login information for {email}: {str(e)}")


# Function to select a user by user_id from the users table
async def get_user(username: str):
   query = "SELECT * FROM users WHERE username = :username"
   return await database.fetch_one(query=query, values={"username": username})


# Function to select a user by email from the users table
async def get_user_by_email(email: str,password_hash:str):
   query = "SELECT * FROM users WHERE email = :email and password_hash = :password_hash"
   return await database.fetch_one(query=query, values={"email": email,"password_hash": password_hash})

async def get_user_by_email_login(email: str):
   query = "SELECT * FROM users_login WHERE email = :email"
   return await database.fetch_one(query=query, values={"email": email})

# Function to update a user in the users table
async def update_user(user_id: int, username: str, password_hash: str, email: str):
   query = """
   UPDATE users
   SET username = :username, password_hash = :password_hash, email = :email
   WHERE user_id = :user_id
   RETURNING user_id, username, password_hash, email, created_at
   """
   values = {"user_id": user_id, "username": username, "password_hash": password_hash, "email": email}
   return await database.fetch_one(query=query, values=values)


# Function to delete a user from the users table
async def delete_user(user_id: int):
   query = "DELETE FROM users WHERE user_id = :user_id RETURNING *"
   return await database.fetch_one(query=query, values={"user_id": user_id})

async def store_token(user_id: int, token: str):
    try:
        query = """
        INSERT INTO tokens (token, user_id, timestamp) 
        VALUES (:token, :user_id, NOW())
        """
        await database.execute(query=query, values={"token": token, "user_id": user_id})
        print(f"Token for user_id {user_id} successfully stored.")
    except Exception as e:
        print(f"Error storing token for user_id {user_id}: {str(e)}")

async def get_user_by_token(token: str):
    query = """
    SELECT users.* 
    FROM users 
    JOIN tokens ON users.user_id = tokens.user_id 
    WHERE tokens.token = :token
    """
    user = await database.fetch_one(query=query, values={"token": token})
    return user
async def authenticate_user(email: str, password: str):
    query = "SELECT * FROM users WHERE email = :email"
    user = await database.fetch_one(query=query, values={"email": email})

    if user and verify_password(password, user["password_hash"]):
       return user  # Return the user if password matches
    return None


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
