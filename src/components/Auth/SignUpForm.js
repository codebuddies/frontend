import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core/';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { validationResolver, defaultValues } from './SignUpForm.schema';
import { Form, Field } from '../form';
import { config } from '../../helpers/constants';

const SignUpForm = ({ toggleActiveForm }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const referer = '/api/v1/auth/registration/verify-email/';
  const auth = useAuth();

  const onSubmit = ({ username, password1, password2, email }) => {
    const data = {
      username,
      email,
      password1,
      password2,
    };
    axios
      .post(`${config.API_URL}/api/v1/auth/registration/`, data)
      .then(res => {
        auth.setAuthTokens(res.data);
        setIsLoggedIn(true);
      })
      .catch(err => {
        console.error(err);
        setErrorMessage('There was an error!');
      });
  };

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  if (auth && auth.authTokens) {
    return <p>Welcome!</p>;
  }

  return (
    <Box
      component={Form}
      display="flex"
      flexWrap="wrap"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      data-testid="signupForm"
      validationResolver={validationResolver}
      defaultValues={defaultValues}
    >
      <Box component="h1" fontSize={18}>
        Create an account
      </Box>

      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        margin="dense"
        name="username"
        label="Username*"
        id="username"
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        margin="dense"
        name="email"
        label="Email*"
        id="email"
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        margin="dense"
        name="password1"
        label="Password*"
        type="password"
        id="password1"
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        margin="dense"
        name="password2"
        label="Confirm Password*"
        type="password"
        id="password2"
      />

      {errorMessage && <Box color="error.main"> {errorMessage}</Box>}

      <Box width="100%" marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          data-testid="submitButton"
        >
          Sign Up
        </Button>
      </Box>
      <p>
        Already have an account?
        {toggleActiveForm ? (
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
        ) : (
          <Link to="/login"> Log in</Link>
        )}
        .
      </p>
    </Box>
  );
};

const { func } = PropTypes;

SignUpForm.propTypes = {
  toggleActiveForm: func,
};

export default SignUpForm;
