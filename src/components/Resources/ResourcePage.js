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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/v1/resources/' + matchProps.match.params.guid)
      .then(function(response) {
        // handle success
        setResource(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, [matchProps.match.params.guid]);

  const classes = useStyles();

  const {
    title,
    url,
    author,
    tags,
    media_type: mediaType,
    description,
    user,
    date_published: datePublished,
    modified,
    paid,
  } = resource;

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
          <Typography color="textPrimary">{title}</Typography>
        </Breadcrumbs>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Typography variant="h2" gutterBottom>
              {title}
            </Typography>
            <div className={classes.subtitle}>
              <Typography variant="subtitle1" gutterBottom>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </Typography>
              <Typography variant=" this subtitle1" gutterBottom>
                <strong>Author:</strong> {author}
              </Typography>
            </div>
            {tags &&
              tags.map(tag => {
                return <Chip key={tag.slug} label={tag.name} />;
              })}

            <div>
              <br></br>
              <Typography variant="subtitle1" gutterBottom>
                Paid: {paid ? 'yes' : 'no'}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Media Type: {mediaType}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Added by <strong>{user.username}</strong> on {datePublished}
              </Typography>
            </div>
            <Typography variant="subtitle2" gutterBottom>
              Modified by <strong>"someone"</strong> {modified}
            </Typography>
            <br></br>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
}

ResourcePage.propTypes = {
  matchProps: PropTypes.object,
};

export default ResourcePage;
