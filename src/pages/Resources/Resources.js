import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import Search from '../../components/Search';
import PersonalMenu from '../pageSections/Sidebar/PersonalMenu';
import { Grid, Typography } from '@material-ui/core';
import { ResourceCard } from './ResourceCard';
import { getResources } from '../../utils/queries';

function Resources() {
  const [searchValue, setSearchValue] = useState('');
  const { isLoading, data, error } = useQuery(
    [`?search=${searchValue}`],
    getResources
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const search = searchValue => {
    if (searchValue.length === 0) {
      setSearchValue();
    }
    setSearchValue(searchValue);
  };

  const { results, count } = data;

  const renderResults = () => {
    return (
      <Grid container spacing={1}>
        {results.length === 0 ? (
          <Grid item lg={9}>
            <Typography>No resources found</Typography>
          </Grid>
        ) : (
          results.map(resource => (
            <Grid item lg={3} key={resource.guid}>
              <ResourceCard {...resource} />
            </Grid>
          ))
        )}
      </Grid>
    );
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
          <Typography>
            You have searched for "<strong>{searchValue}</strong>" and gotten
            <strong> {count}</strong> results.
          </Typography>
        )}
        <br />
        {error && <div className="errorMessage">{error}</div>}
        {results && renderResults()}
      </Grid>
    </Grid>
  );
}

Resources.propTypes = {
  getResourcesUrl: PropTypes.string,
};

export default Resources;
