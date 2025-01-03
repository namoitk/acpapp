import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const FullPageContainer = styled(Box)({
  height: "100vh",
  backgroundColor: "#202020",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

// Styled rectangle box
const RectangleBox = styled(Box)({
  width: "92.8%",
  height: "60px",
  backgroundColor: "#505050",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
  marginTop: "50px",
  borderRadius: "5px",
});

// Styled box for the container
const ContainerBox = styled(Box)({
  width: "100%",
  height: "600px",
  backgroundColor: "#505050",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "white",
  fontSize: "40px",
  borderRadius: "5px",
  marginBottom: "20px",
  padding: "10px",
});

const initialwestTeams = [
  {
    id: 1,
    team: "Boston Celtics",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1024px-Boston_Celtics.svg.png",
  },
  {
    id: 2,
    team: "New York Knicks",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1920px-New_York_Knicks_logo.svg.png",
  },
  {
    id: 3,
    team: "Milwaukee Bucks",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1033px-Milwaukee_Bucks_logo.svg.png",
  },
  {
    id: 4,
    team: "Cleveland Cavaliers",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1280px-Cleveland_Cavaliers_logo.svg.png",
  },
  {
    id: 5,
    team: "Orlando Magic",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1920px-Orlando_Magic_logo.svg.png",
  },
  {
    id: 6,
    team: "Indiana Pacers",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1280px-Indiana_Pacers.svg.png",
  },
  {
    id: 7,
    team: "Philadelphia 76ers",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1280px-Philadelphia_76ers_logo.svg.png",
  },
  {
    id: 8,
    team: "Miami Heat",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/800px-Miami_Heat_logo.svg.png",
  },
  {
    id: 9,
    team: "Chicago Bulls",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1280px-Chicago_Bulls_logo.svg.png",
  },
  {
    id: 10,
    team: "Atlanta Hawks",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1280px-Atlanta_Hawks_logo.svg.png",
  },
  {
    id: 11,
    team: "Brooklyn Nets",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brooklyn_Nets_primary_icon_logo_2024.svg/1280px-Brooklyn_Nets_primary_icon_logo_2024.svg.png",
  },
  {
    id: 12,
    team: "Toronto Raptors",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1280px-Toronto_Raptors_logo.svg.png",
  },
  {
    id: 13,
    team: "Charlotte Hornets",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1280px-Charlotte_Hornets_%282014%29.svg.png",
  },
  {
    id: 14,
    team: "Washington Wizards",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1280px-Washington_Wizards_logo.svg.png",
  },
  {
    id: 15,
    team: "Detroit Pistons",
    region: "eastern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_the_Detroit_Pistons.svg/1280px-Logo_of_the_Detroit_Pistons.svg.png",
  },
];

const initialeastTeams = [
  {
    id: 16,
    team: "Oklahoma City Thunder",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1280px-Oklahoma_City_Thunder.svg.png",
  },
  {
    id: 17,
    team: "Denver Nuggets",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1280px-Denver_Nuggets.svg.png",
  },
  {
    id: 18,
    team: "Minnesota Timberwolves",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1280px-Minnesota_Timberwolves_logo.svg.png",
  },
  {
    id: 19,
    team: "LA Clippers",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1280px-Los_Angeles_Clippers_%282024%29.svg.png",
  },
  {
    id: 20,
    team: "Dallas Mavericks",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png",
  },
  {
    id: 21,
    team: "Phoenix Suns",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1280px-Phoenix_Suns_logo.svg.png",
  },
  {
    id: 22,
    team: "New Orleans Pelicans",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1920px-New_Orleans_Pelicans_logo.svg.png",
  },
  {
    id: 23,
    team: "Los Angeles Lakers",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1920px-Los_Angeles_Lakers_logo.svg.png",
  },
  {
    id: 24,
    team: "Sacramento Kings",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1024px-SacramentoKings.svg.png",
  },
  {
    id: 25,
    team: "Golden State Warriors",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1024px-Golden_State_Warriors_logo.svg.png",
  },
  {
    id: 26,
    team: "Houston Rockets",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1024px-Houston_Rockets.svg.png",
  },
  {
    id: 27,
    team: "Utah Jazz",
    region: "western",
    logo: "https://th.bing.com/th/id/OIP.R892wYoG-rj7ApzgcpUI9AHaFc?rs=1&pid=ImgDetMain",
  },
  {
    id: 28,
    team: "Memphis Grizzlies",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1024px-Memphis_Grizzlies.svg.png",
  },
  {
    id: 29,
    team: "San Antonio Spurs",
    region: "western",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/2560px-San_Antonio_Spurs.svg.png",
  },
  {
    id: 30,
    team: "Portland Trail Blazers",
    region: "western",
    logo: "https://loodibee.com/wp-content/uploads/portland-trail-blazers-1970-1990-1024x1024.png",
  },
];


const columns = [
  {
    field: "logo",
    headerName: "Logo",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt={params.row.team}
        style={{ width: "50px", height: "50px" }}
      />
    ),
  },
  {
    field: "team",
    headerName: "Team Name",
    width: 150,
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#202020",
      paper: "#303030",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});


export default function Page1() {
  const router = useRouter(); // Initialize the router
  const [userEmail, setUserEmail] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [westTeams, setWestTeams] = useState([]);  // State for Western teams
  const [eastTeams, setEastTeams] = useState([]);  // State for Eastern teams

  useEffect(() => {
    // Check if the token exists
    const token = Cookies.get("session_token");
    if (!token) {
      // If no token, redirect to login
      router.push("/login");
    }
  }, [router]);
  useEffect(() => {
    const email = Cookies.get("user_email"); // assuming you stored user email in cookies during login
    if (email) {
      setUserEmail(email);
    }
  }, []);
  useEffect(() => {
    setWestTeams(initialwestTeams); // Populate with western teams
    setEastTeams(initialeastTeams); // Populate with eastern teams
  }, []);
  
  

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("session_token");
    Cookies.remove("user_email"); // Remove user email cookie
    router.push("/login"); // Redirect to login page
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <FullPageContainer>
      <AppBar position="static" style={{ backgroundColor: "#333" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hi {userEmail || "Guest"}  {/* Show "Guest" if email is not available */}
          </Typography>
          <Button color="inherit" onClick={() => router.push("/leaderboard")}>Leaderboard</Button>
          <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
            Menu
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
        {/* Grid container for RectangleBox */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: "20px" }}>
          <Grid item xs={5}>
            <RectangleBox style={{ marginLeft: "10px" }}>Western</RectangleBox>
          </Grid>
          <Grid item xs={5}>
            <RectangleBox style={{ marginLeft: "60px" }}>Eastern</RectangleBox>
          </Grid>
        </Grid>

        {/* Grid container for the two boxes */}
        <Grid
          container
          spacing={15}
          justifyContent="center"
          alignItems="flex-start">
          {/* Box 1 - Western Teams */}
          <Grid item xs={5}>
            <ContainerBox>
              <DataGrid
                rows={westTeams}
                columns={columns}
                style={{ flexGrow: 4, width: "100%" }}
                hideFooter
                disableColumnMenu
                scrollbarSize={10}
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#1e1e1e", // Dark background for the header
                  },
                  "& .MuiDataGrid-cell": {
                    color: "#FFFFFF", // White text for cell content
                  },
                  "& .MuiDataGrid-row": {
                    backgroundColor: "#303030", // Row background color
                  },
                  "& .MuiDataGrid-row:nth-of-type(odd)": {
                    backgroundColor: "#383838", // Alternate row color
                  },
                }}
              />
            </ContainerBox>
          </Grid>

          {/* Box 2 - Eastern Teams */}
          <Grid item xs={5}>
            <ContainerBox>
              <DataGrid
                rows={eastTeams}
                columns={columns}
                style={{ flexGrow: 4, width: "100%" }}
                hideFooter
                disableColumnMenu
                scrollbarSize={10}
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#1e1e1e", // Dark background for the header
                  },
                  "& .MuiDataGrid-cell": {
                    color: "#FFFFFF", // White text for cell content
                  },
                  "& .MuiDataGrid-row": {
                    backgroundColor: "#303030", // Row background color
                  },
                  "& .MuiDataGrid-row:nth-of-type(odd)": {
                    backgroundColor: "#383838", // Alternate row color
                  },
                }}
              />
            </ContainerBox>
          </Grid>
        </Grid>
      </FullPageContainer>
    </ThemeProvider>
  );
}
