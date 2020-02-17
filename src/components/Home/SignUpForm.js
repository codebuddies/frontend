import React from 'react';
import { Box, Button, TextField } from '@material-ui/core/';

const SignUpForm = () => {
  return (
    <Box
      component="form"
      display="flex"
      flexWrap="wrap"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="first-name"
        label="First Name"
        fullWidth
        variant="outlined"
        margin="dense"
      />
      <TextField
        id="last-name"
        label="Last Name"
        fullWidth
        variant="outlined"
        margin="dense"
      />
      <TextField
        id="username"
        label="Username"
        fullWidth
        required
        variant="outlined"
        margin="dense"
      />
      <TextField
        id="email"
        label="Email"
        fullWidth
        required
        variant="outlined"
        margin="dense"
        type="email"
      />
      <TextField
        id="password"
        label="Password"
        fullWidth
        required
        variant="outlined"
        margin="dense"
        type="password"
      />

      <Button variant="contained" color="primary">
        Sign Up
      </Button>

      <p>Already have an account? Log in.</p>
    </Box>
  );
};

export default SignUpForm;
