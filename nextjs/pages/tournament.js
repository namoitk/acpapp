import { Box, Paper, createTheme, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
  },
  components: {
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
  // Add more teams as needed
];

// Tournament component
const Tournament = () => {
  // Example selection of 4 teams
  const teams = [
    { id: 1, team: "Boston Celtics", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1024px-Boston_Celtics.svg.png" },
    { id: 2, team: "New York Knicks", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1920px-New_York_Knicks_logo.svg.png" },
    { id: 3, team: "Milwaukee Bucks", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1033px-Milwaukee_Bucks_logo.svg.png" },
    { id: 4, team: "Cleveland Cavaliers", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1280px-Cleveland_Cavaliers_logo.svg.png" },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, color: '#ffffff' }}>Tournament Bracket</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={teams[0].logo} alt={teams[0].team} style={{ width: 50, height: 50, borderRadius: '50%' }} />
          <Typography variant="body1" sx={{ color: '#ffffff' }}>{teams[0].team}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={teams[1].logo} alt={teams[1].team} style={{ width: 50, height: 50, borderRadius: '50%' }} />
          <Typography variant="body1" sx={{ color: '#ffffff' }}>{teams[1].team}</Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: 4 }}>vs</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={teams[2].logo} alt={teams[2].team} style={{ width: 50, height: 50, borderRadius: '50%' }} />
          <Typography variant="body1" sx={{ color: '#ffffff' }}>{teams[2].team}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={teams[3].logo} alt={teams[3].team} style={{ width: 50, height: 50, borderRadius: '50%' }} />
          <Typography variant="body1" sx={{ color: '#ffffff' }}>{teams[3].team}</Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: 2 }}>Finals</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ color: '#ffffff' }}>Winner Team Name</Typography>
      </Box>
    </Box>
  );
};

export default function DarkModePage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Adds global dark mode styles */}
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: "background.default",
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
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
            pageSizeOptions={[5, 10]}
          />
        </Paper>
      </Box>
      <Tournament />
    </ThemeProvider>
  );
}
