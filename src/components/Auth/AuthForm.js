import React, { useState } from 'react';
import { Box, Paper } from '@material-ui/core/';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const AuthForm = () => {
  const [activeSignUpForm, setActiveSignUpform] = useState(true);

  const toggleActiveForm = event => {
    event.preventDefault();
    setActiveSignUpform(!activeSignUpForm);
  };

  return (
    <Box component={Paper} elevation={3} padding={3}>
      {activeSignUpForm ? (
        <SignUpForm toggleActiveForm={toggleActiveForm} />
      ) : (
        <LoginForm toggleActiveForm={toggleActiveForm} />
      )}
    </Box>
  );
};

export default AuthForm;
