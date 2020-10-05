import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

function Main({ children }) {
  return (
    <Grid item lg={9}>
      {children}
    </Grid>
  );
}

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
