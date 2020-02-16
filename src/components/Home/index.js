import React from 'react';
import { Grid, Box } from '@material-ui/core/';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box
          component="h1"
          fontWeight="fontWeightBold"
          fontSize={22}
          color="primary.main"
        >
          CodeBuddies
        </Box>
        <Box component="h2" lineHeight={1.5} mb={4}>
          We're a global community of people who help each other become better
          at software development through conversations on Slack and
          peer-to-peer organized study groups and virtual hangouts.
        </Box>
        <Box component="h3" fontSize={18} fontWeight={600}>
          Join the conversations - Sign Up.
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
