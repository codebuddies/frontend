import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core/';
import { useAuth } from './AuthContext';
import axios from 'axios';

const LoginForm = ({ toggleActiveForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();
  const referer = '/profile';

  const handleLogin = e => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post('/auth/obtain_token/', data)
      .then(res => {
        auth.setAuthTokens(res.data);
        setIsLoggedIn(true);
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data);
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
            id="username"
            label="username"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            type="text"
            onChange={e => setUsername(e.target.value)}
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

          <Box color="error.main">{errorMessage && errorMessage}</Box>

          <Box width="100%" marginTop={2}>
            <Button variant="contained" color="primary" type="submit">
              Log in
            </Button>
          </Box>

          <p>
            Need an account?{' '}
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
