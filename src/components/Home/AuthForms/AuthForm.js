import React, { useState } from 'react';
import { Box, Paper } from '@material-ui/core/';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const AuthForm = () => {
  const [activeSignUpForm, setActiveSignUpform] = useState(true);

  const toggleActiveForm = event => {
    event.preventDefault();
    setActiveSignUpform(!activeSignUpForm);
  };

  return (
    <Box component={Paper} elevetion={3} padding={3}>
      {activeSignUpForm && <SignUpForm toggleActiveForm={toggleActiveForm} />}
      {!activeSignUpForm && <LoginForm toggleActiveForm={toggleActiveForm} />}
    </Box>
  );
};

export default AuthForm;
