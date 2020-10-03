import React from 'react';
import { Box, Grid } from '@material-ui/core/';
import AuthForm from '../../components/Auth/AuthForm';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <Box
          component="h1"
          fontWeight="fontWeightBold"
          fontSize={22}
          color="primary.main"
        >
          CodeBuddies
        </Box>
        <Box component="h2" lineHeight={1.5} mb={4} fontWeight={400}>
          We're a global community of people who help each other become better
          at software development through conversations on Slack and
          peer-to-peer organized study groups and virtual hangouts.
        </Box>
        <Box component="h2" fontSize={18} fontWeight={600}>
          Join the conversations - Create an account today.
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <AuthForm />
      </Grid>
    </Grid>
  );
};

export default Home;
