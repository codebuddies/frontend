import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import Search from '../Search';
import { Grid, Button } from '@material-ui/core';
import { ResourceCard } from './ResourceCard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function Resources() {
  const classes = useStyles();
  const [resources, setResources] = useState([]);
  const getResourcesUrl = '/api/v1/resources';

  useEffect(() => {
    axios
      .get(getResourcesUrl)
      .then(function(response) {
        // handle success
        setResources(response.data.results);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>
        <Grid item lg={9}>
          <h2 className={classes.heading}>
            Resources{' '}
            <Link to="/submit-resource">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <AddCircleOutlineIcon /> &nbsp; Add new resource
              </Button>
            </Link>
          </h2>
          <Search label="Search resources" />

          <br />
          <Grid container spacing={1}>
            {resources.map(resource => {
              return (
                <Grid item lg={3} key={resource.guid}>
                  <ResourceCard {...resource} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

Resources.propTypes = {
  getResourcesUrl: PropTypes.string,
};

export default Resources;
