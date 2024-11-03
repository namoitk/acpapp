from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
from datetime import datetime, timedelta
from database import *  # Ensure your database functions are imported
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import jwt
import logging

SECRET_KEY = "your_secret_key"  # Replace with a strong secret key
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/users/login")
logger = logging.getLogger(__name__)
router = APIRouter()

# Pydantic model for user creation
class UserCreate(BaseModel):
   username: str
   password: str  # Changed from password_hash to password
   email: str

# Function to create an access token
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta if expires_delta else timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Endpoint to create a new user
@router.post("/users/create")
async def create_user(user: UserCreate):
    existing_user = await get_user(user.username)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    # Insert new user
    result = await insert_user(user.username, user.password, user.email)
    if result is None:
        raise HTTPException(status_code=400, detail="Error creating user")
    
    # Store the login information
    await insert_login(email=user.email, password_hash=result['password_hash'])
    
    return {"detail": "User created successfully"}

# Endpoint for user login
@router.post("/users/login")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    logger.info("Login attempt with email: %s", form_data.username)
    try:
        # Authenticate user
        db_user = await authenticate_user(email=form_data.username, password=form_data.password)
        if db_user is None:
            raise HTTPException(status_code=401, detail="Incorrect email or password")

        # Generate the access token
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"user_id": db_user["user_id"]}, expires_delta=access_token_expires
        )

        # Store the token in the database
        await store_token(user_id=db_user["user_id"], token=access_token)

        return {"access_token": access_token, "token_type": "bearer"}

    except HTTPException as e:
        raise e
    except Exception as e:
        print(f"Error in login_for_access_token: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
