import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { registerUser } from '../../utils/queries';
import { Link, Redirect } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core/';
import { useAuth } from './AuthContext';
import { validationResolver, defaultValues } from './Register.schema';
import { Form, Field } from '../form';

const Register = ({ toggleActiveForm }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const referer = '/profile';
  const auth = useAuth();

  const onSubmit = ({ username, email, password, passwordConfirmation }) => {
    console.log('#GC SUBMIT', {
      username,
      email,
      password,
      passwordConfirmation,
    });
    //registerUser(data);
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
        name="password"
        label="Password*"
        type="text"
        id="password1"
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        margin="dense"
        name="passwordConfirmation"
        label="Password Confirmation*"
        type="text"
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

Register.propTypes = {
  toggleActiveForm: func,
};

export default Register;
