import React, { useState } from 'react';
// import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';

const Search = ({ label, search }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <form className="search">
      <input
        type="search"
        placeholder={label}
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;

Search.propTypes = {
  label: PropTypes.string,
  search: PropTypes.func,
};
