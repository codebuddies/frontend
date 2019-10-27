import React, { useState, useRef, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable'
import clsx from 'clsx';
import { 
  Grid,
  Link,
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import PersonalMenu from "../PersonalMenu";

const defaultTags = [
  {label: 'design', value: 'design'},
  {label: 'js', value: 'js'},
  {label: 'devops', value: 'devops'},
];
const mediaTypes = [
  'PDF', 'Video', 'Podcast', 'Tutorial', 'Course', 'Book', 'Game', 'Blog', 'Post',
  'Event', 'Website',
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
    paddingTop: "15px",
    paddingBottom: "10px",
  },
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  breadcrumb: {
    paddingTop: "1.3rem",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  label: {
    top: "7px",
  },
  submit: {
    flexDirection: "row-reverse",
    width: "calc(100% + 12px)",
    paddingTop: 15,
  },
  button: {
    margin: theme.spacing(1),
  },
  select: {
    paddingLeft: "8px",
    paddingTop: "20px",
    width: "100%",
    boxSizing: "unset !important",
  },
}));

const SubmitResource = () => {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [values, setValues] = useState({
    url: '',
    year: '',
    level: '',
    title: '',
    review: '',
    mediaType: '',
    description: '',
    freeResource: true,
  });
  const [tags, setTags] = useState([]);


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSwitchChange = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const handleTagChange = (newValue, actionMeta) => {
    setTags(newValue);
  };

  const handleSubmit = () => alert('Ready to handle tour submit request 🚀')

  return (
    <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>

        <Grid item lg={9}>
          <div className={clsx(classes.root, classes.breadcrumb)}>
            <Paper elevation={0} className={classes.paper}>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" to="/resources">
                  Resources
                </Link>
                <Typography color="textPrimary">Submit</Typography>
              </Breadcrumbs>
            </Paper>
          </div>
          
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
          />

          <TextField
            id="outlined-dense"
            label="Title"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            value={values.title}
            onChange={handleChange('title')}
          />

          <TextField
            id="outlined-dense"
            label="Description"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            value={values.description}
            onChange={handleChange('description')}
          />

          <TextField
            id="outlined-dense"
            label="Year Updated"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            value={values.year}
            onChange={handleChange('year')}
          />
          <FormGroup aria-label="position" row className={classes.freeSwitch}>
            <FormControlLabel
              checked={values.freeResource}
              value="start"
              control={<Switch color="primary" />}
              label="Free"
              labelPlacement="start"
              onChange={handleSwitchChange('freeResource')}
            />
          </FormGroup>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-media-type-native-simple" className={classes.label}>
              Media Type
            </InputLabel>
            <Select
              native
              value={values.mediaType}
              inputProps={{
                name: 'media-type',
                id: 'outlined-media-type-native-simple',
              }}
              className={classes.dense}
              margin="dense"
              labelWidth={labelWidth}
              onChange={handleChange('mediaType')}
            >
              <option value="" />
              { mediaTypes.map(
                type => <option key={type} value={type}>{type}</option>
              )}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-level-native-simple" className={classes.label}>
              Level
            </InputLabel>
            <Select
              native
              value={values.level}
              inputProps={{
                name: 'level',
                id: 'outlined-level-native-simple',
              }}
              className={classes.dense}
              margin="dense"
              labelWidth={labelWidth}
              onChange={handleChange('level')}
            >
              <option value="" />
              <option value='beginner'>Beginner</option>
              <option value='intermediate'>Intermediate</option>
              <option value='advanced'>Advanced</option>
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
          />

          <CreatableSelect className={classes.select}
            isMulti
            onChange={handleTagChange}
            placeholder="Tags"
            options={defaultTags}
            styles={{
              control: (styles, state) => ({ 
                ...styles,
                borderColor: 'hsl(0, 0%, 77%)',
                ':hover': { borderColor: 'rgba(0, 0, 0, 0.87)' },
                ':focus': { border: '2px solid #3f51b5'}
              }),
              placeholder: styles => ({ ...styles, color: '#757575', }),
            }}
          />

          <FormGroup aria-label="position" className={classes.submit}>
            <Button variant="contained" className={classes.button} onClick={handleSubmit}>
              Submit
            </Button>
          </FormGroup>
        </Grid>
    </Grid>
  );
};

export default SubmitResource;
