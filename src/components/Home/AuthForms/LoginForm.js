import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@material-ui/core/';

const LoginForm = ({ toggleActiveForm }) => {
  return (
    <Box
      component="form"
      display="flex"
      flexWrap="wrap"
      noValidate
      autoComplete="off"
    >
      <Box component="h1" fontSize={18}>
        Log in
      </Box>
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
          Log in
        </Button>
      </Box>

      <p>
        Need an account?{' '}
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
          Sign up
        </Box>
        .
      </p>
    </Box>
  );
};

const { func } = PropTypes;

LoginForm.propTypes = {
  toggleActiveForm: func.isRequired,
};

export default LoginForm;
