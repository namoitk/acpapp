import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Styled components for items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#303030',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '140px',
  width: '230px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Cursive, sans-serif',
}));

const FullPageContainer = styled(Box)({
  minHeight: '150vh',
  minWidth: '100vh',
  backgroundColor: '#202020',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto',
});

const RectangleBox = styled(Box)(({ theme }) => ({
  width: '81%',
  height: '60px',
  backgroundColor: '#505050',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '40px',
  marginTop: '50px',
  color: theme.palette.text.primary,
  fontSize: '40px',
  fontFamily: 'Fantasy, sans-serif',
}));

const WinnerBox = styled(Box)({
  width: '50%',
  padding: '30px',
  backgroundColor: 'grey',
  color: '#000',
  textAlign: 'center',
  fontSize: '20px',
  marginTop: '45px',
  borderRadius: '10px',
  fontFamily: 'Cursive, sans-serif',
  marginLeft: '45px',
});

const TeamLogo = styled('img')({
  width: '45px',
  height: '45px',
  marginRight: '10px',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8c00',
    },
    secondary: {
      main: '#505050',
    },
    background: {
      default: '#202020',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
});

const teamRatings = {
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
};

const easternTeams = [
    { id: 16, team: "Oklahoma City Thunder", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1280px-Oklahoma_City_Thunder.svg.png" },
    { id: 17, team: "Denver Nuggets", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1280px-Denver_Nuggets.svg.png" },
    { id: 18, team: "Minnesota Timberwolves", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1280px-Minnesota_Timberwolves_logo.svg.png" },
    { id: 19, team: "LA Clippers", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1280px-Los_Angeles_Clippers_%282024%29.svg.png" },
    { id: 20, team: "Dallas Mavericks", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png" },
    { id: 21, team: "Phoenix Suns", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1280px-Phoenix_Suns_logo.svg.png" },
    { id: 22, team: "New Orleans Pelicans", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1920px-New_Orleans_Pelicans_logo.svg.png" },
    { id: 23, team: "Los Angeles Lakers", region: "western", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1920px-Los_Angeles_Lakers_logo.svg.png" },
    { id: 24, team: "Sacramento Kings", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1024px-SacramentoKings.svg.png" },
    { id: 25, team: "Golden State Warriors", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1024px-Golden_State_Warriors_logo.svg.png" },
    { id: 26, team: "Houston Rockets", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1024px-Houston_Rockets.svg.png" },
    { id: 27, team: "Utah Jazz", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Utah_Jazz_logo_2022.svg/1920px-Utah_Jazz_logo_2022.svg.png" },
    { id: 28, team: "Memphis Grizzlies", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1024px-Memphis_Grizzlies.svg.png" },
    { id: 29, team: "San Antonio Spurs", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/2560px-San_Antonio_Spurs.svg.png" },
    { id: 30, team: "Portland Trail Blazers", region: "western", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Portland_Trail_Blazers.svg/1280px-Portland_Trail_Blazers.svg.png" },
];

const westernTeams = [
    { id: 1, team: "Boston Celtics", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1024px-Boston_Celtics.svg.png" },
    { id: 2, team: "New York Knicks", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1920px-New_York_Knicks_logo.svg.png" },
    { id: 3, team: "Milwaukee Bucks", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1033px-Milwaukee_Bucks_logo.svg.png" },
    { id: 4, team: "Cleveland Cavaliers", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1280px-Cleveland_Cavaliers_logo.svg.png" },
    { id: 5, team: "Orlando Magic", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1920px-Orlando_Magic_logo.svg.png" },
    { id: 6, team: "Indiana Pacers", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1280px-Indiana_Pacers.svg.png" },
    { id: 7, team: "Philadelphia 76ers", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1280px-Philadelphia_76ers_logo.svg.png" },
    { id: 8, team: "Miami Heat", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/800px-Miami_Heat_logo.svg.png" },
    { id: 9, team: "Chicago Bulls", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1280px-Chicago_Bulls_logo.svg.png" },
    { id: 10, team: "Atlanta Hawks", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1280px-Atlanta_Hawks_logo.svg.png" },
    { id: 11, team: "Brooklyn Nets", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brooklyn_Nets_primary_icon_logo_2024.svg/1280px-Brooklyn_Nets_primary_icon_logo_2024.svg.png" },
    { id: 12, team: "Toronto Raptors", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1280px-Toronto_Raptors_logo.svg.png" },
    { id: 13, team: "Charlotte Hornets", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1280px-Charlotte_Hornets_%282014%29.svg.png" },
    { id: 14, team: "Washington Wizards", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1280px-Washington_Wizards_logo.svg.png" },
    { id: 15, team: "Detroit Pistons", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_the_Detroit_Pistons.svg/1280px-Logo_of_the_Detroit_Pistons.svg.png" },
];

function simulateSet(team1, team2) {
  const score1 = Math.floor(Math.random() * 11) + 20 + Math.floor(teamRatings[team1] / 10);
  const score2 = Math.floor(Math.random() * 11) + 20 + Math.floor(teamRatings[team2] / 10);

  if (score1 > score2) {
    return [1, 0];
  } else if (score2 > score1) {
    return [0, 1];
  } else {
    const overtimeScore1 = Math.floor(Math.random() * 6) + 5 + Math.floor(teamRatings[team1] / 20);
    const overtimeScore2 = Math.floor(Math.random() * 6) + 5 + Math.floor(teamRatings[team2] / 20);
    return overtimeScore1 > overtimeScore2 ? [1, 0] : [0, 1];
  }
}

function simulateMatch(team1, team2) {
  let setsTeam1 = 0;
  let setsTeam2 = 0;

  while (setsTeam1 < 4 && setsTeam2 < 4) {
    const [set1, set2] = simulateSet(team1, team2);
    setsTeam1 += set1;
    setsTeam2 += set2;
  }

  return setsTeam1 > setsTeam2 ? [team1, team2, setsTeam1, setsTeam2] : [team2, team1, setsTeam2, setsTeam1];
}

const TournamentBracket = () => {
  const [easternRoundOneResults, setEasternRoundOneResults] = React.useState([]);
  const [westernRoundOneResults, setWesternRoundOneResults] = React.useState([]);
  const [easternFinalsResults, setEasternFinalsResults] = React.useState([]);
  const [westernFinalsResults, setWesternFinalsResults] = React.useState([]);
  const [finalResults, setFinalResults] = React.useState(null);
  const [thirdPlaceMatchResults, setThirdPlaceMatchResults] = React.useState(null);
  const [teamRankings, setTeamRankings] = React.useState([]);

  const generateTournament = () => {
    const selectedEasternTeams = easternTeams.sort(() => 0.5 - Math.random()).slice(0, 4);
    const selectedWesternTeams = westernTeams.sort(() => 0.5 - Math.random()).slice(0, 4);

    // Eastern Round 1
    const easternRoundOne = selectedEasternTeams.map((team, index, arr) => {
      if (index % 2 === 0) {
        return simulateMatch(arr[index].team, arr[index + 1].team);
      }
      return null;
    }).filter(Boolean);

    // Western Round 1
    const westernRoundOne = selectedWesternTeams.map((team, index, arr) => {
      if (index % 2 === 0) {
        return simulateMatch(arr[index].team, arr[index + 1].team);
      }
      return null;
    }).filter(Boolean);

    // Eastern Finals
    const easternFinals = simulateMatch(easternRoundOne[0][0], easternRoundOne[1][0]);

    // Western Finals
    const westernFinals = simulateMatch(westernRoundOne[0][0], westernRoundOne[1][0]);

    // Finals
    const finals = simulateMatch(easternFinals[0], westernFinals[0]);

    // Third Place Match
    const thirdPlaceMatch = simulateMatch(easternFinals[1], westernFinals[1]);

    const finalResults = {
      champion: finals[0],
      runnerUp: finals[1],
      finalsSets: `${finals[2]} - ${finals[3]}`
    };

    const thirdPlaceResults = {
      thirdPlace: thirdPlaceMatch[0],
      fourthPlace: thirdPlaceMatch[1],
      thirdPlaceSets: `${thirdPlaceMatch[2]} - ${thirdPlaceMatch[3]}`
    };

    const ranking = [
      { team: finals[0], rank: 1 },
      { team: finals[1], rank: 2 },
      { team: thirdPlaceMatch[0], rank: 3 },
      { team: thirdPlaceMatch[1], rank: 4 }
    ];

    setEasternRoundOneResults(easternRoundOne);
    setWesternRoundOneResults(westernRoundOne);
    setEasternFinalsResults(easternFinals);
    setWesternFinalsResults(westernFinals);
    setFinalResults(finalResults);
    setThirdPlaceMatchResults(thirdPlaceResults);
    setTeamRankings(ranking);
  };

  React.useEffect(() => {
    generateTournament();
  }, []);

  const getTeamLogo = (teamName) => {
    const team = easternTeams.find(t => t.team === teamName) || westernTeams.find(t => t.team === teamName);
    return team ? team.logo : '';
  };

  return (
    <ThemeProvider theme={theme}>
      <FullPageContainer>
        <RectangleBox>
          NBA Tournament Bracket
        </RectangleBox>

        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '40px' }}>
          {/* Eastern Round 1 */}
          <Grid container item xs={2} spacing={6} direction="column" alignItems="center">
            <Grid item style={{ color: '#fff', marginBottom: '20px' }}>EASTERN ROUND 1</Grid>
            {easternRoundOneResults.map((match, index) => (
              <Grid item key={index}>
                <Item>
                  <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <TeamLogo src={getTeamLogo(match[1])} alt={match[1]} /> {match[1]}
                  </Typography>
                  <Divider style={{ backgroundColor: '#fff', width: '240px', margin: '5px 0' }} />
                  <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <TeamLogo src={getTeamLogo(match[0])} alt={match[0]} /> {match[0]}
                  </Typography>
                  <Typography variant="caption" style={{ color: 'white' }}></Typography>{match[2]}-{match[3]}|WINNER: {match[0]}
                </Item>
              </Grid>
            ))}
          </Grid>

          {/* Eastern Finals */}
          <Grid container item xs={2} spacing={20} direction="column" alignItems="center">
            <Grid item style={{ color: '#fff', marginBottom: '20px' }}>EASTERN FINALS</Grid>
            <Grid item>
              <Item>
                <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                  <TeamLogo src={getTeamLogo(easternFinalsResults[1])} alt={easternFinalsResults[1]} /> {easternFinalsResults[1]}
                </Typography>
                <Divider style={{ backgroundColor: '#fff', width: '240px', margin: '5px 0' }} />
                <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                  <TeamLogo src={getTeamLogo(easternFinalsResults[0])} alt={easternFinalsResults[0]} /> {easternFinalsResults[0]}
                </Typography>
                <Typography variant="caption" style={{ color: 'white', marginTop: '5px' }}> </Typography>{easternFinalsResults[2]}-{easternFinalsResults[3]}|WINNER: {easternFinalsResults[0]}
              </Item>
            </Grid>
          </Grid>

          {/* Finals */}
          {finalResults && (
            <Grid container item xs={3} spacing={6} direction="column" alignItems="center">
              <Grid item style={{ color: '#fff', marginBottom: '20px' }}>FINALS</Grid>
              <Grid item>
                <Item>
                  <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <TeamLogo src={getTeamLogo(finalResults.runnerUp)} alt={finalResults.runnerUp} /> {finalResults.runnerUp}
                  </Typography>
                  <Divider style={{ backgroundColor: '#fff', width: '240px', margin: '5px 0' }} />
                  <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <TeamLogo src={getTeamLogo(finalResults.champion)} alt={finalResults.champion} /> {finalResults.champion}
                  </Typography>
                  <Typography variant="caption" style={{ color:theme.palette.text.secondary,display:'center',fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '16px', marginTop: '5px' }}>{finalResults.finalsSets}</Typography>
                </Item>
              </Grid>
              <WinnerBox>
                <TeamLogo src={getTeamLogo(finalResults.champion)} alt={finalResults.champion} /> {finalResults.champion}
              </WinnerBox>
            </Grid>
          )}

          {/* Western Finals */}
          <Grid container item xs={2} spacing={20} direction="column" alignItems="center">
            <Grid item style={{ color: '#fff', marginBottom: '20px' }}>WESTERN FINALS</Grid>
            <Grid item>
              <Item>
                <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                  <TeamLogo src={getTeamLogo(westernFinalsResults[1])} alt={westernFinalsResults[1]} /> {westernFinalsResults[1]}
                </Typography>
                <Divider style={{ backgroundColor: '#fff', width: '240px', margin: '5px 0' }} />
                <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                  <TeamLogo src={getTeamLogo(westernFinalsResults[0])} alt={westernFinalsResults[0]} /> {westernFinalsResults[0]}
                </Typography>
                <Typography variant="caption" style={{ color: '#ff8c00', marginTop: '5px' }}></Typography>{westernFinalsResults[2]}-{westernFinalsResults[3]}|WINNER: {westernFinalsResults[0]}
              </Item>
            </Grid>
          </Grid>

          {/* Western Round 1 */}
          <Grid container item xs={2} spacing={6} direction="column" alignItems="center">
            <Grid item style={{ color: '#fff', marginBottom: '20px' }}>WESTERN ROUND 1</Grid>
            {westernRoundOneResults.map((match, index) => (
              <Grid item key={index}>
                <Item>
                  <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <TeamLogo src={getTeamLogo(match[1])} alt={match[1]} /> {match[1]}
                  </Typography>
                  <Divider style={{ backgroundColor: '#fff', width: '240px', margin: '5px 0' }} />
                  <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <TeamLogo src={getTeamLogo(match[0])} alt={match[0]} /> {match[0]}
                  </Typography>
                  <Typography variant="caption" style={{ color: '#ff8c00', marginTop: '5px' }}></Typography>{match[2]}-{match[3]}|WINNER: {match[0]}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={generateTournament} style={{ marginTop: '20px' }}>
          Generate Tournament
        </Button>
        
        {thirdPlaceMatchResults && (
          <Grid container spacing={6} justifyContent="center" style={{ marginTop: '50px' }}>
            {/* Third Place Match */}
            <Grid item xs={5} >
              <Grid container direction="column" alignItems="center">
                <Grid item style={{ color: '#fff', marginBottom: '20px', fontFamily: 'Monospace' }}>THIRD PLACE MATCH</Grid>
                <Grid item>
                  <Item>
                    <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                      <TeamLogo src={getTeamLogo(thirdPlaceMatchResults.fourthPlace)} alt={thirdPlaceMatchResults.fourthPlace} /> {thirdPlaceMatchResults.fourthPlace}
                    </Typography>
                    <Divider style={{ backgroundColor: '#fff', width: '240px', margin: '5px 0' }} />
                    <Typography variant="body2" style={{ fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                      <TeamLogo src={getTeamLogo(thirdPlaceMatchResults.thirdPlace)} alt={thirdPlaceMatchResults.thirdPlace} /> {thirdPlaceMatchResults.thirdPlace}
                    </Typography>
                    <Typography variant="caption" style={{ fontFamily:'Monospace',color: theme.palette.text.secondary, marginTop: '10px' ,}}>{thirdPlaceMatchResults.thirdPlaceSets} |WINNER: {thirdPlaceMatchResults.thirdPlace}</Typography>
                  </Item>
                </Grid>
              </Grid>
            </Grid>

            {/* Team Rankings */}
            <Grid item xs={4} >
              <TableContainer component={Paper} style={{ backgroundColor: theme.palette.secondary.main, color:'#ff8c00'}}>
                <Table size="small" aria-label="team rankings">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontFamily: 'Monospace', padding: '6px', fontWeight: 'bold', fontSize: '14px', color: theme.palette.text.primary }}>Rank</TableCell>
                      <TableCell style={{ fontFamily: 'Monospace', padding: '6px', fontWeight: 'bold', fontSize: '14px', color: theme.palette.text.primary }}>Team</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teamRankings.map((ranking, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ fontFamily: 'Monospace', padding: '6px', fontSize: '12px', color: theme.palette.text.secondary }}>{ranking.rank}</TableCell>
                        <TableCell style={{ fontFamily: 'Monospace', padding: '6px', display: 'flex', alignItems: 'center', fontSize: '12px', color: theme.palette.text.secondary }}>
                          <TeamLogo
                            src={getTeamLogo(ranking.team)}
                            alt={ranking.team}
                            style={{ width: '25px', height: '25px', marginRight: '8px' }} // Smaller logo
                          />
                          {ranking.team}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )}
      </FullPageContainer>
    </ThemeProvider>
  );
}

export default TournamentBracket;