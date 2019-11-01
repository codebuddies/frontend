import React from "react";
import PersonalMenu from "../PersonalMenu";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    alignSelf: "center"
  }
}));

const Coworking = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>
        <Grid container item spacing={1} lg={9}>
          <h2>Coworking Spaces</h2>
          <Grid container item direction="column" spacing={3} lg={12}>
            <Grid item lg={4}>
              {/* 24/7 Non-speaking */}
              <Card>
                <CardMedia image="" />
                <CardHeader title="24/7 Non-Speaking Coworking Space" />
                <CardContent>
                  A round-the-clock coworking space for those desiring quiet
                  concentration.
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    styles={classes.button}
                  >
                    Join
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={4}>
              {/* 24/7 Speaking */}
              <Card>
                <CardMedia image="" />
                <CardHeader title="24/7 Speaking Coworking Space" />
                <CardContent>
                  A round-the-clock coworking space for those looking for
                  company to interact with.
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    styles={classes.button}
                  >
                    Join
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={8}>
              {/* Discussion Component */}
              <Card>
                <CardHeader title="Discussion" />
                <CardContent>
                  {/* Chatbox */}
                  <b>**Chatbox component** </b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Coworking;
