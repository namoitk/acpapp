import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Snackbar, Alert, Paper } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import Cookies from "js-cookie";  // Using js-cookie to handle authentication token
import Link from 'next/link';  // Import Link from next.js for navigation
// Import logos

const basketballLogo = "https://upload.wikimedia.org/wikipedia/en/6/6c/World_Basketball_Association_logo.png";
const nbaLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/320px-National_Basketball_Association_logo.svg.png";

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                'username': loginEmail,  // OAuth2PasswordRequestForm uses 'username' field
                'password': loginPassword,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Login failed");
        }

        const data = await response.json();
        Cookies.set('session_token', data.access_token, { expires: 1, path: '/' });
        Cookies.set('user_email', loginEmail, { expires: 1, path: '/' });  // Store user email in cookies
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        
        // Navigate to page1 after successful login
        setTimeout(() => {
            router.push("/page1");
        }, 1000);
    } catch (error) {
        setSnackbarMessage(error.message);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
        setLoginEmail("");
        setLoginPassword("");
    } finally {
        setLoading(false);
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
        background: "linear-gradient(135deg, #3f51b5 30%, #f50057 90%)",
        position: "relative",
      }}
    >
      {/* Logo at the top center */}
      <img
        src={basketballLogo}
        alt="Basketball Logo"
        style={{
          position: "absolute",
          top: "150px",
          left: "53%",
          transform: "translateX(-50%)",
          width: "100px",
          zIndex: 1,
        }}
      />

      <Grid item xs={12} sm={4}>
        <Paper
          elevation={6}
          style={{
            padding: "20px",
            backgroundColor: "#121212",
            borderRadius: "16px",
            width: '100%',
            position: 'relative',
            zIndex: 0,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)", // Added box shadow
          }}
        >
          <Typography variant="h5" gutterBottom style={{ color: "#fff", textAlign: 'center' }}>
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
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff', backgroundColor: '#333', borderRadius: '8px' } }} // Rounded corners
              sx={{ borderRadius: '8px' }} // MUI sx prop for customization
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff', backgroundColor: '#333', borderRadius: '8px' } }} // Rounded corners
              sx={{ borderRadius: '8px' }} // MUI sx prop for customization
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px", borderRadius: '8px' }} // Rounded button
              type="submit"
              disabled={loading}
              sx={{
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#1976d2', // Lighter blue on hover
                },
              }}
            >
              {loading ? "Logging in..." : "Login"}
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
            style={{ backgroundColor: '#2196F3', padding: '6px 12px', borderRadius: '8px' }} // Rounded button
          >
            Register
          </Button>
        </Grid>
      </Grid>

      {/* NBA Logo at the bottom right */}
      <img
        src={nbaLogo}
        alt="NBA Logo"
        style={{
          position: "absolute",
          bottom: "60px",
          right: "40px",
          width: "80px",
          zIndex: 1,
        }}
      />

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
