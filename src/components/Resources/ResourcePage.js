import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import { Grid, Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function ResourcePage({ matchProps }) {
  const [resource, setResource] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3001/resources/' + matchProps.match.params.id)
      .then(function(response) {
        // handle success
        setResource(response.data);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, [matchProps.match.params.id]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>
        <Grid item lg={9}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" to="/resources">
              Resources
            </Link>
            <Typography color="textPrimary">{resource.title}</Typography>
          </Breadcrumbs>
          <h2>{resource.title}</h2>
          <pre>{JSON.stringify(resource, 0, 2)}</pre>
        </Grid>
      </Grid>
    </>
  );
}

ResourcePage.propTypes = {
  matchProps: PropTypes.object,
};

export default ResourcePage;
