import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const Field = ({ as, control, name, errors, ...rest }) => {
  const hasError = Boolean(errors && errors[name]);
  const errorMessage = hasError && errors[name].message;
  return (
    <Controller
      as={as}
      error={hasError}
      control={control}
      name={name}
      helperText={errorMessage}
      {...rest}
    />
  );
};

Field.propTypes = {
  as: PropTypes.any,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
};

export default Field;
