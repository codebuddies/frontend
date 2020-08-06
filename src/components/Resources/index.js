import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import Search from '../Search';
import { Grid, Typography } from '@material-ui/core';
import { ResourceCard } from './ResourceCard';
import { buildQueryString } from '../../helpers';

function Resources({ getResourcesUrl }) {
  const [resources, setResources] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(getResourcesUrl)
      .then(function(response) {
        // handle success
        setResources(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, [getResourcesUrl]);

  // TODO: Refactor search function into its own file
  const search = searchValue => {
    setSearchValue(searchValue);
    setLoading(true);
    setErrorMessage(null);
    axios
      .get(buildQueryString(getResourcesUrl, searchValue))
      .then(function(response) {
        setResources(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const { count = 0, results } = resources;

  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <PersonalMenu />
      </Grid>
      <Grid item lg={9}>
        <h2>Resources</h2>
        <Search label="Search resources" search={search} />
        {searchValue && (
          <Typography>
            You have searched for "<strong>{searchValue}</strong>" and gotten
            <strong> {count}</strong> results.
          </Typography>
        )}
        <br />
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Grid container spacing={1}>
            {resources.length === 0 ? (
              <Typography>No resources found</Typography>
            ) : (
              results.map(resource => (
                <Grid item lg={3} key={resource.guid}>
                  <ResourceCard {...resource} />
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

Resources.propTypes = {
  getResourcesUrl: PropTypes.string,
};

export default Resources;
