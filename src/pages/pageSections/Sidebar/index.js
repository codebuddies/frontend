import React from 'react';
import PersonalMenu from './PersonalMenu';
import { Grid } from '@material-ui/core';

function Sidebar() {
  return (
    <Grid item lg={3}>
      <PersonalMenu />
    </Grid>
  );
}

export default Sidebar;
