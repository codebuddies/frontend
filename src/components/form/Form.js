import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const Form = props => {
  const {
    defaultValues,
    children,
    onSubmit,
    validationResolver,
    ...rest
  } = props;

  const methods = useForm({ defaultValues, validationResolver });
  const { handleSubmit } = methods;

  const getChildElement = child => {
    if (!child || !child.props.name) return child;
    const { control, errors } = methods;
    const key = child.props.name;
    const options = { ...{ ...child.props, control, errors, key } };
    return React.createElement(child.type, options);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children) ? children.map(getChildElement) : children}
    </form>
  );
};

Form.propTypes = {
  defaultValues: PropTypes.object,
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  validationResolver: PropTypes.func,
};

export default Form;
