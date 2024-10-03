import { Box, Paper, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

// Dark mode theme with global background color
const darkTheme = createTheme({
  palette: {
    mode: 'dark',  // Enables dark mode
    background: {
      default: "#121212",  // Dark background for the entire page
      paper: "#333",       // Paper color for containers
    },
    text: {
      primary: "#ffffff",  // Text color for primary text
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: '1px solid #555',  // Table border color
          color: '#ffffff',          // Table text color
        },
        columnHeaders: {
          backgroundColor: '#1976d2',  // Header background color
          color: '#ffffff',            // Header text color
        },
        row: {
          '&:hover': {
            backgroundColor: '#333',  // Row hover background color
          },
        },
      },
    },
  },
});

const columns = [
  {
    field: "logo",
    headerName: "Logo",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt={params.row.team}
        style={{ width: 50, height: 50, borderRadius: '50%' }} 
      />
    ),
  },
  { field: "id", headerName: "ID", width: 70 },
  { field: "team", headerName: "Teams", width: 200 },
  { field: "region", headerName: "Regions", width: 130 },
];

const rows = [
  { id: 1, team: "Boston Celtics", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1024px-Boston_Celtics.svg.png" },
  { id: 2, team: "New York Knicks", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1920px-New_York_Knicks_logo.svg.png" },
  { id: 3, team: "Milwaukee Bucks", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1033px-Milwaukee_Bucks_logo.svg.png" },
  { id: 4, team: "Cleveland Cavaliers", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1280px-Cleveland_Cavaliers_logo.svg.png" },
  { id: 5, team: "Orlando Magic", region: "eastern", logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1920px-Orlando_Magic_logo.svg.png" },
  { id: 6, team: "Indiana Pacers", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1280px-Indiana_Pacers.svg.png" },
  { id: 7, team: "Philadelphia 76ers", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1280px-Philadelphia_76ers_logo.svg.png" },
  { id: 8, team: "Miami Heat", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/800px-Miami_Heat_logo.svg.png" },
  { id: 9, team: "Chicago Bulls", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1280px-Chicago_Bulls_logo.svg.png" },
  { id: 10, team: "Atlanta Hawks", region: "eastern",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1280px-Atlanta_Hawks_logo.svg.png" },
  { id: 11, team: "Brooklyn Nets", region: "eastern" ,logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brooklyn_Nets_primary_icon_logo_2024.svg/1280px-Brooklyn_Nets_primary_icon_logo_2024.svg.png"},
  { id: 12, team: "Toronto Raptors", region: "eastern", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1280px-Toronto_Raptors_logo.svg.png" },
  { id: 13, team: "Charlotte Hornets", region: "eastern" ,logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1280px-Charlotte_Hornets_%282014%29.svg.png"},
  { id: 14, team: "Washington Wizards", region: "eastern" ,logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1280px-Washington_Wizards_logo.svg.png"},
  { id: 15, team: "Detroit Pistons", region: "eastern",logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_the_Detroit_Pistons.svg/1280px-Logo_of_the_Detroit_Pistons.svg.png" },
  { id: 16, team: "Oklahoma City Thunder", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1280px-Oklahoma_City_Thunder.svg.png" },
  { id: 17, team: "Denver Nuggets", region: "western",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1280px-Denver_Nuggets.svg.png" },
  { id: 18, team: "Minnesota Timberwolves", region: "western",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1280px-Minnesota_Timberwolves_logo.svg.png" },
  { id: 19, team: "LA Clippers", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1280px-Los_Angeles_Clippers_%282024%29.svg.png" },
  { id: 20, team: "Dallas Mavericks", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png" },
  { id: 21, team: "Phoenix Suns", region: "western" ,logo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1280px-Phoenix_Suns_logo.svg.png"},
  { id: 22, team: "New Orleans Pelicans", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1920px-New_Orleans_Pelicans_logo.svg.png" },
  { id: 23, team: "Los Angeles Lakers", region: "western",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1920px-Los_Angeles_Lakers_logo.svg.png" },
  { id: 24, team: "Sacramento Kings", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1024px-SacramentoKings.svg.png" },
  { id: 25, team: "Golden State Warriors", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1024px-Golden_State_Warriors_logo.svg.png" },
  { id: 26, team: "Houston Rockets", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1024px-Houston_Rockets.svg.png" },
  { id: 27, team: "Utah Jazz", region: "western" ,logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Utah_Jazz_logo_2022.svg/1920px-Utah_Jazz_logo_2022.svg.png"},
  { id: 28, team: "Memphis Grizzlies", region: "western" ,logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1024px-Memphis_Grizzlies.svg.png"},
  { id: 29, team: "San Antonio Spurs", region: "western",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/2560px-San_Antonio_Spurs.svg.png" },
  { id: 30, team: "Portland Trail Blazers", region: "western",logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1280px-Portland_Trail_Blazers_logo.svg.png" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DarkModePage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Adds global dark mode styles */}
      <Box
        sx={{
          height: '100vh', // Ensures it covers the full viewport
          width: '100vw', // Full width of the viewport
          backgroundColor: "background.default", // Uses the theme background
          padding: 2,
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper sx={{ height: 500, width: "100%", maxWidth: 1000 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}