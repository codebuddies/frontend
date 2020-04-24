import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const Field = props => {
  const { as, control, name, errors, ...rest } = props;

  return (
    <Controller
      as={as}
      error={Boolean(errors && errors[name])}
      control={control}
      name={name}
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
