import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useAuth } from '../Auth/AuthContext';
import PersonalMenu from '../PersonalMenu';

function Profile() {
  const { authTokens } = useAuth();
  useEffect(() => {
    /* TODO: fetch logged-in user data */
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <PersonalMenu />
      </Grid>
      <Grid item lg={9}>
        <h2>Profile</h2>
        <p>Welcome {authTokens.username}!</p>
      </Grid>
    </Grid>
  );
}

export default Profile;
