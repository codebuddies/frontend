// TODO :
// DONE: after typing, store values on change
// DONE: successful submit with bearer token passed in
// fix tags
// fix "paid" checkbox
// decide what happens on successful submit (redirect to created resource, alert like "congrats you submitted resource..")
// validation (follow auth implementation) (as type, post-submit)
// display failed submissions to the user (if not already)
// test for posting to mock up successful response
// ensure these are all desired fields for forms

import React, { useState, useRef, useEffect, useReducer } from 'react';
import CreatableSelect from 'react-select/creatable';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
import { useAuth } from '../Auth/AuthContext';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PersonalMenu from '../PersonalMenu';

const defaultTags = [
  { label: 'design', value: 'design' },
  { label: 'js', value: 'js' },
  { label: 'devops', value: 'devops' },
];
const mediaTypes = [
  { VID: 'Video' },
  { POD: 'Podcast' },
  { TUTOR: 'Tutorial' },
  { COURSE: 'Course' },
  { BOOK: 'Book' },
  { GAME: 'Game' },
  { BLOG: 'Blog' },
  { EVENT: 'Event' },
  { WEB: 'Website' },
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
  url: '',
  year: '',
  level: '',
  title: '',
  review: '',
  media_type: '',
  description: '',
  paid: true,
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const SubmitResource = () => {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const auth = useAuth();
  console.log(auth);

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name === 'paid') {
      console.log(e.target.name);
    } else {
      dispatch({ field: e.target.name, value: e.target.value });
    }
  };

  const {
    url,
    year,
    level,
    title,
    review,
    media_type: mediaType,
    description,
    paid,
  } = state;

  const data = {
    url,
    year,
    level,
    title,
    review,
    media_type: mediaType,
    description,
    paid,
  };
  console.log(data);

  const handleSubmit = data => {
    console.log(data);
    console.log(auth.authTokens.token);
    axios
      .post('/api/v1/resources/', data, {
        headers: { Authorization: `Bearer ${auth.authTokens.token}` },
      })
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // const [values, setValues] = useState({
  //   url: '',
  //   year: '',
  //   level: '',
  //   title: '',
  //   review: '',
  //   mediaType: '',
  //   description: '',
  //   freeResource: true,
  // });

  const [tags, setTags] = useState([]);

  // const onChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  // const handleSwitchChange = name => event => {
  //   setValues({ ...values, [name]: event.target.checked });
  // };

  const handleTagChange = newValue => {
    setTags(newValue);
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
              <Typography color="textPrimary">Add</Typography>
            </Breadcrumbs>
          </Paper>
        </div>

        <TextField
          required
          id="outlined-dense"
          label="URL"
          name="url"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          fullWidth
          defaultValue={url}
          onChange={onChange}
        />

        <TextField
          id="outlined-dense"
          label="Title"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          fullWidth
          defaultValue={title}
          onChange={onChange}
          name="title"
        />

        <TextField
          id="outlined-dense"
          label="Description"
          name={description}
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          fullWidth
          defaultValue={description}
          onChange={onChange}
        />

        <TextField
          id="outlined-dense"
          label="Year Updated"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          defaultValue={year}
          onChange={onChange}
          name="year"
        />
        <FormGroup aria-label="position" row className={classes.freeSwitch}>
          <FormControlLabel
            checked={paid}
            defaultValue="start"
            control={<Switch color="primary" />}
            label="Free"
            labelPlacement="start"
            onChange={onChange}
            name="paid"
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
            defaultValue={mediaType}
            inputProps={{
              name: 'media_type',
              id: 'outlined-media-type-native-simple',
            }}
            className={classes.dense}
            margin="dense"
            labelWidth={labelWidth}
            onChange={onChange}
            name="media_type"
          >
            <option value="" />
            {mediaTypes.map(type => (
              <option key={Object.keys(type)[0]} value={Object.keys(type)[0]}>
                {Object.values(type)[0]}
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
            defaultValue={level}
            inputProps={{
              name: 'level',
              id: 'outlined-level-native-simple',
            }}
            name="level"
            className={classes.dense}
            margin="dense"
            labelWidth={labelWidth}
            onChange={onChange}
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
          defaultValue={review}
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          name="review"
          variant="outlined"
          fullWidth
          multiline
          rowsMax="4"
          onChange={onChange}
        />

        <CreatableSelect
          className={classes.select}
          isMulti
          onChange={handleTagChange}
          placeholder="Tags"
          name="tags"
          options={defaultTags}
          styles={{
            control: styles => ({
              ...styles,
              borderColor: 'hsl(0, 0%, 77%)',
              ':hover': { borderColor: 'rgba(0, 0, 0, 0.87)' },
              ':focus': { border: '2px solid #3f51b5' },
            }),
            placeholder: styles => ({ ...styles, color: '#757575' }),
          }}
          value={tags}
        />

        <FormGroup aria-label="position" className={classes.submit}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleSubmit(data)}
          >
            Submit
          </Button>
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default SubmitResource;
