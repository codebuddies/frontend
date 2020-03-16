import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core/';
import axios from 'axios';
import { useAuth } from './AuthContext';

const SignUpForm = ({ toggleActiveForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const referer = '/profile';
  const auth = useAuth();

  const handleSignup = e => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    axios
      .post('http://localhost:8000/auth/users/', data)
      .then(res => {
        auth.setAuthTokens(res.data);
        setIsLoggedIn(true);
        setErrorMessage('');
      })
      .catch(err => {
        setErrorMessage(Object.values(err.response.data).join(''));
      });
  };
  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
  return (
    <Fragment>
      {(auth && auth.authTokens) || isLoggedIn ? (
        <Fragment>
          <p>Welcome!</p>
        </Fragment>
      ) : (
        <Fragment>
          <Box
            component="form"
            display="flex"
            flexWrap="wrap"
            noValidate
            autoComplete="off"
            onSubmit={handleSignup}
            data-testid="signupForm"
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
              onChange={e => setFirstName(e.target.value)}
            />
            <TextField
              id="last-name"
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="dense"
              onChange={e => setLastName(e.target.value)}
            />
            <TextField
              id="username"
              label="Username"
              fullWidth
              required
              variant="outlined"
              margin="dense"
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              fullWidth
              required
              variant="outlined"
              margin="dense"
              type="email"
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

            <Box color="error.main">{errorMessage && errorMessage}</Box>

            <Box width="100%" marginTop={2}>
              <Button variant="contained" color="primary" type="submit">
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
        </Fragment>
      )}
    </Fragment>
  );
};

const { func } = PropTypes;

SignUpForm.propTypes = {
  toggleActiveForm: func,
};

export default SignUpForm;
