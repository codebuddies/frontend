import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getResource } from '../../utils/queries';
import PersonalMenu from '../PersonalMenu';
import { Grid, Breadcrumbs, Typography, Chip, Box } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function ResourcePage({ matchProps }) {
  const resourceId = matchProps.match.params.guid;
  // TODO: Handle Error cases
  const { isLoading, data } = useQuery(['resource', resourceId], getResource);
  const classes = useStyles();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const {
    title,
    url,
    author,
    tags,
    media_type,
    description,
    user,
    date_published,
    modified,
    paid,
  } = data;

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

        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>

        <div className={classes.subtitle}>
          <Typography variant="subtitle1" gutterBottom>
            <Link target="_blank" rel="noopener noreferrer" to={url}>
              {url}
            </Link>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Author:</strong> {author}
          </Typography>
        </div>

        {tags &&
          tags.map(tag => {
            return <Chip key={tag.slug} label={tag.name} />;
          })}

        <div>
          <Box pt={3}>
            <Typography variant="subtitle1" gutterBottom>
              Paid: {paid ? 'yes' : 'no'}
            </Typography>
          </Box>
          <Typography variant="subtitle1" gutterBottom>
            Media Type: {media_type}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Added by <strong>{user.username}</strong> on {date_published}
          </Typography>
        </div>

        <Typography variant="subtitle2" gutterBottom>
          Modified by <strong>"someone"</strong> {modified}
        </Typography>

        <br></br>

        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}

ResourcePage.propTypes = {
  matchProps: PropTypes.object,
};

export default ResourcePage;
