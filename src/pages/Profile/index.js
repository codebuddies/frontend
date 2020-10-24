import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useAuth } from '../../components/Auth/AuthContext';
import { Sidebar, Main } from '../pageSections';

function Profile() {
  const { authTokens } = useAuth();

  /* TODO: fetch logged-in user data in https://github.com/codebuddies/frontend/issues/100 */

  return (
    <Grid container spacing={1}>
      <Sidebar />
      <Main>
        <h2>Profile</h2>
        <p>Welcome {authTokens.username}!</p>
      </Main>
    </Grid>
  );
}

export default Profile;
