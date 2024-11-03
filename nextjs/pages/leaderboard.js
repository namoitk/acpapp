import { Box, Paper, createTheme, ThemeProvider, CssBaseline, Typography,Button } from "@mui/material";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/router";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#121212",
      paper: "#333",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#1976d2", // Customize primary color for a dark look
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff", // White text color for dark mode
          backgroundColor: "#1976d2", // Dark blue background color
          '&:hover': {
            backgroundColor: "#115293", // Darker blue on hover
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: '1px solid #555',
          color: '#ffffff',
        },
        columnHeaders: {
          backgroundColor: '#1976d2',
          color: '#ffffff',
        },
        row: {
          '&:hover': {
            backgroundColor: '#333',
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
];

const paginationModel = { page: 0, pageSize: 5 };

export default function LeaderboardPage() {
  const podiumTeams = rows.slice(0, 3);
  const tableTeams = rows.slice(3, 12);
  const router = useRouter(); // Initialize router for navigation

  const handleBackToPage1 = () => {
    router.push("/page1"); // Navigate back to Page1
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: "background.default",
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
         <Button
          variant="contained"
          color="primary"
          onClick={handleBackToPage1}
          sx={{
            color: "#ffffff",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
            mb: 2,
          }}
        >
          Back to Page 1
        </Button>

        {/* Podium Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {podiumTeams.map((team, index) => (
            <Box key={team.id} sx={{ mx: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'text.primary' }}>
                {index + 1}
              </Typography>
              <img
                src={team.logo}
                alt={team.team}
                style={{ width: 80, height: 80, borderRadius: '50%' }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary' }}>
                {team.team}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Table Section */}
        <Paper sx={{ height: 500, width: "100%", maxWidth: 1000 }}>
          <DataGrid
            rows={tableTeams}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
