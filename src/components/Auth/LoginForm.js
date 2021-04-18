import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core/';
import { useAuth } from './AuthContext';
import axios from 'axios';

const LoginForm = ({ toggleActiveForm }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const auth = useAuth();
  const referer = '/profile';

  const handleLogin = e => {
    e.preventDefault();
    const data = {
      email: email,
      password,
    };
    axios
      .post('http://localhost:8000/api/v1/auth/login/', data)
      .then(res => {
        auth.setAuthTokens(res.data);
        setIsLoggedIn(true);
      })
      .catch(error => {
        if (error.response) {
          // todo: display field error in input field
          if (error.response.data.email) {
            setErrorMessage(error.response.data.email[0]);
          } else if (error.response.data.password) {
            setErrorMessage(error.response.data.password[0]);
          } else if (error.response.data.non_field_errors) {
            setErrorMessage(error.response.data.non_field_errors[0]);
          } else {
            setErrorMessage('There was an error!');
          }
        } else {
          setErrorMessage('There was an error!');
        }
      });
  };

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
  return (
    <>
      {(auth && auth.authTokens) || isLoggedIn ? (
        <p>Welcome!</p>
      ) : (
        <Box
          component="form"
          display="flex"
          flexWrap="wrap"
          noValidate
          autoComplete="off"
          onSubmit={handleLogin}
          data-testid="loginForm"
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
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          {errorMessage && <Box color="error.main"> {errorMessage}</Box>}

          <Box width="100%" marginTop={2}>
            <Button variant="contained" color="primary" type="submit">
              Log in
            </Button>
          </Box>

          <p>
            Need an account?
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
                Sign up
              </Box>
            ) : (
              <Link to="/signup">Sign up</Link>
            )}
            .
          </p>
        </Box>
      )}
    </>
  );
};

const { func } = PropTypes;

LoginForm.propTypes = {
  toggleActiveForm: func,
};

export default LoginForm;
