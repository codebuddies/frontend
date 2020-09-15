import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';
import { ResourceCard } from './ResourceCard';

function Resources({ getResourcesUrl }) {
  const [resources, setResources] = useState([]);

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
  }, [getResourcesUrl]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>
        <Grid item lg={9}>
          <h2>Resources</h2>
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
