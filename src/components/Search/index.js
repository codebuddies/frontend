import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    border: '1px solid #a0a0a0',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = ({ label, search }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <form onSubmit={callSearchFunction} className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={label}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="search"
      />
      <Button
        variant="contained"
        color="primary"
        aria-label="Search"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  label: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};
