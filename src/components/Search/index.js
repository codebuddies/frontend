import React from 'react';
import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';

function Search({ label }) {
  return (
    <div>
      <Input type="search" placeholder={label} />
    </div>
  );
}
export default Search;

Search.propTypes = {
  label: PropTypes.string,
};
