import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper, Snackbar, Alert } from '@mui/material';
import Link from 'next/link'; // Import Link from next/link

export default function AuthPage() {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false); // Track registration success

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
        setSnackbarMessage('Passwords do not match');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return;
    }

    try {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: registerName,
                email: registerEmail,
                password: registerPassword,  // Use 'password' instead of 'password_hash'
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Registration failed');
        }

        setSnackbarMessage('Registration successful!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setRegistrationSuccessful(true);
    } catch (error) {
        setSnackbarMessage(error.message);
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
    }
};



  return (
    <Grid container spacing={2} style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #3f51b5 30%, #f50057 90%)' }}>
      {/* Register Section */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={6} style={{ padding: '20px', backgroundColor: '#121212', color: '#fff', borderRadius: '16px', width: '100%', boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)" }}>
          <Typography variant="h5" gutterBottom align="center">
            Register
          </Typography>
          <form onSubmit={handleRegisterSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              InputProps={{
                style: { backgroundColor: '#333', color: '#fff' }, // Dark background for input
              }}
              InputLabelProps={{
                style: { color: '#fff' }, // White label for input
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              InputProps={{
                style: { backgroundColor: '#333', color: '#fff' }, // Dark background for input
              }}
              InputLabelProps={{
                style: { color: '#fff' }, // White label for input
              }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              InputProps={{
                style: { backgroundColor: '#333', color: '#fff' }, // Dark background for input
              }}
              InputLabelProps={{
                style: { color: '#fff' }, // White label for input
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={registerConfirmPassword}
              onChange={(e) => setRegisterConfirmPassword(e.target.value)}
              InputProps={{
                style: { backgroundColor: '#333', color: '#fff' }, // Dark background for input
              }}
              InputLabelProps={{
                style: { color: '#fff' }, // White label for input
              }}
            />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px', borderRadius: '8px' }} type="submit">
              Register
            </Button>
          </form>

          {/* Show this Link after successful registration */}
          {registrationSuccessful && (
            <Typography variant="body2" align="center" style={{ marginTop: '16px', color: '#fff' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#2196F3', textDecoration: 'none' }}>
                Login here
              </Link>
            </Typography>
          )}
        </Paper>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
