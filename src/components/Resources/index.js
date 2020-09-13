import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';
import { ResourceCard } from './ResourceCard';
import * as helper from '../helper';

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

  const search = searchValue => {
    setSearchValue(searchValue);
    setLoading(true);
    setErrorMessage(null);
    axios
      .get(helper.buildQueryString(getResourcesUrl, searchValue))
      .then(function(response) {
        console.log(response.data);
        setResources(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <PersonalMenu />
      </Grid>
      <Grid item lg={9}>
        <h2>Resources</h2>
        <Search label="Search resources" search={search} />
        {searchValue && (
          <p>
            You have searched for "<strong>{searchValue}</strong>" and gotten
            <strong> {resources.count}</strong> results.
          </p>
        )}
        <br />
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Grid container spacing={1}>
            {resources.length === 0 ? (
              <p>No resources found</p>
            ) : (
              resources.results.map(resource => (
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
