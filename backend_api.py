import random

# Insertion Sort method
def inser_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Function to simulate a match
def simulate_match(team1, team2):
    # Randomly decide the winner
    winner = random.choice([team1, team2])
    return winner

# Initial teams
eastern_team = [
    "Boston Celtics", "New York Knicks", "Milwaukee Bucks", "Cleveland Cavaliers", 
    "Orlando Magic", "Indiana Pacers", "Philadelphia 76ers", "Miami Heat", 
    "Chicago Bulls", "Atlanta Hawks", "Brooklyn Nets", "Toronto Raptors", 
    "Charlotte Hornets", "Washington Wizards", "Detroit Pistons"
]

western_team = [
    "Oklahoma City Thunder", "Denver Nuggets", "Minnesota Timberwolves", 
    "LA Clippers", "Dallas Mavericks", "Phoenix Suns", "New Orleans Pelicans", 
    "Los Angeles Lakers", "Sacramento Kings", "Golden State Warriors", 
    "Houston Rockets", "Utah Jazz", "Memphis Grizzlies", "San Antonio Spurs", 
    "Portland Trail Blazers"
]

# Randomly select 6 teams from each conference
eastern_selection = random.sample(eastern_team, 6)
western_selection = random.sample(western_team, 6)

# Sort the teams alphabetically
sorted_eastern = inser_sort(eastern_selection)
sorted_western = inser_sort(western_selection)

# Create matchups
matches = {}
for i in range(6):
    matches[f"match{i + 1}"] = (sorted_eastern[i], sorted_western[i])

# Display matchups
print("\nFirst Round Matchups:")
for i in range(1, 7):
    print(f"Match {i}: {matches[f'match{i}'][0]} VS {matches[f'match{i}'][1]}")

# First round results
winners = []
losers = []
for i in range(1, 7):
    team1, team2 = matches[f'match{i}']
    winner = simulate_match(team1, team2)
    loser = team1 if winner == team2 else team2
    winners.append(winner)
    losers.append(loser)

print("\nFirst Round Winners:", winners)
print("First Round Losers:", losers)

# Second round (Winners and Losers matches)
winner_matches = {}
loser_matches = {}
for i in range(0, len(winners), 2):
    winner_matches[f'winner_match{i // 2 + 1}'] = (winners[i], winners[i + 1])
    loser_matches[f'loser_match{i // 2 + 1}'] = (losers[i], losers[i + 1])

# Display second round matchups
print("\nSecond Round Winner Matchups:")
for i in range(1, 4):
    print(f"Winner Match {i}: {winner_matches[f'winner_match{i}'][0]} VS {winner_matches[f'winner_match{i}'][1]}")
print("\nSecond Round Loser Matchups:")
for i in range(1, 4):
    print(f"Loser Match {i}: {loser_matches[f'loser_match{i}'][0]} VS {loser_matches[f'loser_match{i}'][1]}")

# Second round results
second_round_winners = []
second_round_losers = []
for i in range(1, 4):
    team1, team2 = winner_matches[f'winner_match{i}']
    winner = simulate_match(team1, team2)
    second_round_winners.append(winner)
    second_round_losers.append(team1 if winner == team2 else team2)

    team1, team2 = loser_matches[f'loser_match{i}']
    winner = simulate_match(team1, team2)
    second_round_winners.append(winner)
    second_round_losers.append(team1 if winner == team2 else team2)

# Display results
print("\nSecond Round Winners:", second_round_winners)
print("Second Round Losers:", second_round_losers)

# Final match for top winner
final_winner_match = (second_round_winners[0], second_round_winners[1])
final_winner = simulate_match(*final_winner_match)
final_loser = final_winner_match[0] if final_winner == final_winner_match[1] else final_winner_match[1]

# Sort teams from 1 to 12 based on match results
final_rankings = second_round_winners + second_round_losers
sorted_rankings = inser_sort(final_rankings)

# Display final sorted rankings
print("\nFinal Team Rankings (1-12):")
for i, team in enumerate(sorted_rankings, 1):
    print(f"{i}. {team}")

