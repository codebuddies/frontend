import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonalMenu from '../PersonalMenu';
import { Grid, Breadcrumbs, Typography, Chip } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function ResourcePage({ matchProps }) {
  const [resource, setResource] = useState({});

  useEffect(() => {
    axios
      .get('/api/v1/resources/' + matchProps.match.params.guid)
      .then(function(response) {
        // handle success
        setResource(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, [matchProps.match.params.id]);

  const classes = useStyles();

  return (
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
        <Typography variant="h2" gutterBottom>
          {resource.title}
        </Typography>
        <div className={classes.subtitle}>
          <Typography variant="subtitle1" gutterBottom>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.url}
            </a>
          </Typography>
          <Typography variant=" this subtitle1" gutterBottom>
            <strong>author:</strong> {resource.author}
          </Typography>
        </div>
        <Typography variant="subtitle1" gutterBottom>
          {resource.media_type}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {resource.description}
        </Typography>
        {resource.tags &&
          resource.tags.map(tag => {
            return <Chip key={tag.name}>{tag.name}</Chip>;
          })}

        <pre>{JSON.stringify(resource, 0, 2)}</pre>
      </Grid>
    </Grid>
  );
}

ResourcePage.propTypes = {
  matchProps: PropTypes.object,
};

export default ResourcePage;
