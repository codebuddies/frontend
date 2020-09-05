import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import PersonalMenu from '../PersonalMenu';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';
import { ResourceCard } from './ResourceCard';
import { getResources } from '../../utils/queries';

function Resources() {
  const { isLoading, data } = useQuery('resources', getResources);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
            {data.results.map(resource => {
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
