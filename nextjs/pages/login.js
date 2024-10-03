import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

// Import logos (make sure to use direct links to image files)
const basketballLogo = "https://upload.wikimedia.org/wikipedia/en/3/3c/National_Basketball_Association_logo.svg"; // Replace with actual path
const nbaLogo = "https://upload.wikimedia.org/wikipedia/en/3/3c/National_Basketball_Association_logo.svg"; // Replace with actual path

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password_hash: loginPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      
      // Navigate to page1 after successful login
      window.location.href = "/page1"; // Change to your desired page

    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212121", // Changed to match the register page background color
        position: "relative",
      }}
    >
      {/* Logo at the top center */}
      <img
        src={basketballLogo}
        alt="Basketball Logo"
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100px", // Adjust the size as needed
        }}
      />

      <Grid item xs={12} sm={4}> {/* Reduced width from 6 to 4 */}
        <Paper
          elevation={4}
          style={{
            padding: "20px",
            backgroundColor: "#000", // Black login box
            borderRadius: "8px",
            width: '100%', // Ensure full width of the grid item
          }}
        >
          <Typography variant="h5" gutterBottom style={{ color: "#fff" }}>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              InputLabelProps={{ style: { color: '#fff' } }} // White label
              InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Grey input field
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              InputLabelProps={{ style: { color: '#fff' } }} // White label
              InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Grey input field
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>

        {/* Register text with button underneath */}
        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '16px', color: '#fff' }}>
          <Typography variant="body2" style={{ marginRight: '8px' }}>
            Not a member?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/register"
            style={{ backgroundColor: '#2196F3', padding: '6px 12px' }} // Adjusted padding for button
          >
            Register
          </Button>
        </Grid>
      </Grid>

      {/* NBA Logo at the bottom left */}
      <img
        src={nbaLogo}
        alt="NBA Logo"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          width: "80px", // Adjust the size as needed
        }}
      />

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
