import random

def insertion_sort(arr):
    i = 1
    while i < len(arr):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
        i += 1
    return arr

team_ratings = {
    "Boston Celtics": 95,
    "New York Knicks": 85,
    "Milwaukee Bucks": 90,
    "Cleveland Cavaliers": 88,
    "Orlando Magic": 80,
    "Indiana Pacers": 82,
    "Philadelphia 76ers": 89,
    "Miami Heat": 86,
    "Chicago Bulls": 84,
    "Atlanta Hawks": 83,
    "Brooklyn Nets": 87,
    "Toronto Raptors": 81,
    "Charlotte Hornets": 78,
    "Washington Wizards": 77,
    "Detroit Pistons": 79,
    "Oklahoma City Thunder": 84,
    "Denver Nuggets": 88,
    "Minnesota Timberwolves": 80,
    "LA Clippers": 86,
    "Dallas Mavericks": 85,
    "Phoenix Suns": 82,
    "New Orleans Pelicans": 79,
    "Los Angeles Lakers": 90,
    "Sacramento Kings": 78,
    "Golden State Warriors": 92,
    "Houston Rockets": 83,
    "Utah Jazz": 81,
    "Memphis Grizzlies": 80,
    "San Antonio Spurs": 84,
    "Portland Trail Blazers": 82
}

def simulate_set(team1, team2):
    score1 = random.randint(20, 30) + team_ratings[team1] // 10
    score2 = random.randint(20, 30) + team_ratings[team2] // 10
    
    if score1 > score2:
        return 1, 0 
    elif score2 > score1:
        return 0, 1  
    else:
        overtime_score1 = random.randint(5, 10) + team_ratings[team1] // 20
        overtime_score2 = random.randint(5, 10) + team_ratings[team2] // 20
        if overtime_score1 > overtime_score2:
            return 1, 0  
        else:
            return 0, 1

def simulate_match(team1, team2):
    sets_team1 = 0
    sets_team2 = 0

    while sets_team1 < 4 and sets_team2 < 4:
        set_result = simulate_set(team1, team2)
        sets_team1 += set_result[0]
        sets_team2 += set_result[1]

    if sets_team1 > sets_team2:
        return [team1, team2, sets_team1, sets_team2]
    else:
        return [team2, team1, sets_team2, sets_team1]

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

eastern_selection = random.sample(eastern_team, 4)
western_selection = random.sample(western_team, 4)

selected_teams = eastern_selection + western_selection

sorted_teams = insertion_sort(selected_teams)

match_results = []

print("\nQuarterfinals:")
i = 0
while i < 4:
    match = simulate_match(sorted_teams[2 * i], sorted_teams[2 * i + 1])
    match_results.append(match)
    i += 1

print("\nSemifinals:")
semifinal1 = simulate_match(match_results[0][0], match_results[1][0])
semifinal2 = simulate_match(match_results[2][0], match_results[3][0])

match_results.append(semifinal1)
match_results.append(semifinal2)

print("\nFinals:")
final = simulate_match(semifinal1[0], semifinal2[0]) 
third_place = simulate_match(semifinal1[1], semifinal2[1])

match_results.append(final)
match_results.append(third_place)

champion = final[0]
second = final[1]
third = third_place[0]
fourth = third_place[1]

print("\nMatch Results:")
i = 0
while i < len(match_results):
    match = match_results[i]
    print(f"Match {i + 1}: {match[0]} vs {match[1]} | Sets: {match[2]} - {match[3]}")
    i += 1

print("\nFinal Standings:")
print(f"Champion: {champion}")
print(f"Second Place: {second}")
print(f"Third Place: {third}")
print(f"Fourth Place: {fourth}")

print("\nStarting a new tournament for the bottom four teams...\n")

bottom_four_teams = [match_results[4][1], match_results[5][1], match_results[0][1], match_results[1][1]]

bottom_four_results = []

print("Bottom Four Tournament:")
i = 0
while i < 2:
    match1_bottom = simulate_match(bottom_four_teams[2 * i], bottom_four_teams[2 * i + 1])
    bottom_four_results.append(match1_bottom)
    i += 1

final_bottom = simulate_match(bottom_four_results[0][0], bottom_four_results[1][0])
third_place_bottom = simulate_match(bottom_four_results[0][1], bottom_four_results[1][1])

bottom_four_results.append(final_bottom)
bottom_four_results.append(third_place_bottom)

champion_bottom = final_bottom[0]
second_bottom = final_bottom[1]
third_bottom = third_place_bottom[0]
fourth_bottom = third_place_bottom[1]

print("\nBottom Four Tournament Results:")
i = 0
while i < len(bottom_four_results):
    match = bottom_four_results[i]
    print(f"Match {i + 1}: {match[0]} vs {match[1]} | Sets: {match[2]} - {match[3]}")
    i += 1

print("\nBottom Four Final Standings:")
print(f"Champion: {champion_bottom}")
print(f"Second Place: {second_bottom}")
print(f"Third Place: {third_bottom}")
print(f"Fourth Place: {fourth_bottom}")
