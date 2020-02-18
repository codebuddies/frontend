import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@material-ui/core/';

const SignUpForm = ({ toggleActiveForm }) => {
  return (
    <Box
      component="form"
      display="flex"
      flexWrap="wrap"
      noValidate
      autoComplete="off"
    >
      <Box component="h1" fontSize={18}>
        Create an account
      </Box>
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

      <Box width="100%" marginTop={2}>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>

      <p>
        Already have an account?
        <Box
          component="button"
          color="primary.main"
          padding={0}
          marginLeft={1}
          border={0}
          bgcolor="transparent"
          fontSize={16}
          onClick={toggleActiveForm}
        >
          Log in
        </Box>
        .
      </p>
    </Box>
  );
};

const { func } = PropTypes;

SignUpForm.propTypes = {
  toggleActiveForm: func.isRequired,
};

export default SignUpForm;
