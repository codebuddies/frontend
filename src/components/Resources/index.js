import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';
import { ResourceCard } from './ResourceCard';
import { AuthContext } from '../Auth/AuthContext';

function Resources() {
  const [resources, setResources] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios
      .get('/api/v1/resources', {
        headers: {
          Authorization: `Bearer ${authContext.authTokens.token}`,
        },
      })
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

export default Resources;
