// Component to submit a resource at `/submit-resource`
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Button,
  Select,
  Switch,
  TextField,
  FormGroup,
  InputLabel,
  Typography,
  Breadcrumbs,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PersonalMenu from '../PersonalMenu';

const defaultTags = [
  { label: 'design', value: 'design' },
  { label: 'js', value: 'js' },
  { label: 'devops', value: 'devops' },
];
const mediaTypes = [
  'PDF',
  'Video',
  'Podcast',
  'Tutorial',
  'Course',
  'Book',
  'Game',
  'Blog',
  'Post',
  'Event',
  'Website',
];
const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  freeSwitch: {
    paddingTop: '15px',
    paddingBottom: '10px',
  },
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  breadcrumb: {
    paddingTop: '1.3rem',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  label: {
    top: '7px',
  },
  submit: {
    flexDirection: 'row-reverse',
    width: 'calc(100% + 12px)',
    paddingTop: 15,
  },
  button: {
    margin: theme.spacing(1),
  },
  select: {
    paddingLeft: '8px',
    paddingTop: '20px',
    width: '100%',
    boxSizing: 'unset !important',
  },
}));

const initialState = {
  created: Date.now(),
  description: '',
  freeResource: true,
  level: '',
  mediaType: '',
  review: '',
  title: '',
  url: '',
  year: '',
};

const SubmitResource = matchProps => {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: initialState,
  });

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [values, setValues] = useState(initialState);
  const [tags, setTags] = useState([]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSwitchChange = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const handleTagChange = newValue => {
    setTags(newValue);
  };

  const onSubmit = () => {
    axios
      .post('http://localhost:3001/resources', values)
      .then(function(response) {
        // handle success
        console.log(matchProps);
        matchProps.history.push('/resources');
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <PersonalMenu />
      </Grid>

      <Grid item lg={9}>
        <div className={clsx(classes.root, classes.breadcrumb)}>
          <Paper elevation={0} className={classes.paper}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link color="inherit" to="/resources">
                Resources
              </Link>
              <Typography color="textPrimary">Add new resource</Typography>
            </Breadcrumbs>
          </Paper>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            id="outlined-dense"
            label="URL"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            value={values.url}
            onChange={handleChange('url')}
            name="url"
            ref={register({ name: 'url', required: true, maxLength: 400 })}
          />
          {/* TODO: error for maxLength */}
          {errors.url && 'URL is required'}

          <TextField
            required
            id="outlined-dense"
            label="Title"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            name="title"
            ref={register}
            value={values.title}
            onChange={handleChange('title')}
          />

          <TextField
            required
            id="outlined-dense"
            label="Description"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            name="description"
            ref={register}
            value={values.description}
            onChange={handleChange('description')}
          />

          {/* TODO: date validation */}
          {/* TODO: date selector */}
          <TextField
            id="outlined-dense"
            label="Year Updated"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            name="year_updated"
            ref={register}
            value={values.year}
            onChange={handleChange('year')}
          />

          <FormGroup aria-label="position" row className={classes.freeSwitch}>
            <FormControlLabel
              checked={values.freeResource}
              value="start"
              control={<Switch color="primary" />}
              label="Free"
              name="price"
              ref={register}
              labelPlacement="start"
              onChange={handleSwitchChange('freeResource')}
            />
          </FormGroup>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={inputLabel}
              htmlFor="outlined-media-type-native-simple"
              className={classes.label}
            >
              Media Type
            </InputLabel>
            <Select
              native
              value={values.mediaType}
              inputProps={{
                name: 'media-type',
                id: 'outlined-media-type-native-simple',
              }}
              name="media_type"
              ref={register}
              className={classes.dense}
              margin="dense"
              labelWidth={labelWidth}
              onChange={handleChange('mediaType')}
            >
              <option value="" />
              {mediaTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={inputLabel}
              htmlFor="outlined-level-native-simple"
              className={classes.label}
            >
              Level
            </InputLabel>
            <Select
              native
              value={values.level}
              inputProps={{
                name: 'level',
                id: 'outlined-level-native-simple',
              }}
              ref={register}
              className={classes.dense}
              margin="dense"
              labelWidth={labelWidth}
              onChange={handleChange('level')}
            >
              <option value="" />
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          </FormControl>

          <TextField
            id="outlined-dense"
            label="Your Review"
            value={values.review}
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            multiline
            rowsMax="4"
            onChange={handleChange('review')}
            name="your_review"
            ref={register}
          />

          <CreatableSelect
            className={classes.select}
            isMulti
            onChange={handleTagChange}
            placeholder="Tags"
            options={defaultTags}
            styles={{
              control: (styles, state) => ({
                ...styles,
                borderColor: 'hsl(0, 0%, 77%)',
                ':hover': { borderColor: 'rgba(0, 0, 0, 0.87)' },
                ':focus': { border: '2px solid #3f51b5' },
              }),
              placeholder: styles => ({ ...styles, color: '#757575' }),
            }}
            value={tags}
            name="tags"
            ref={register}
          />

          <FormGroup aria-label="position" className={classes.submit}>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              Submit
            </Button>
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  );
};

export default SubmitResource;
