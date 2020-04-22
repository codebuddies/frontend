import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map(child => {
            return child && child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    control: methods.control,
                    errors: methods.errors,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

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

Form.propTypes = {
  defaultValues: PropTypes.object,
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  validationResolver: PropTypes.func,
};

Field.propTypes = {
  as: PropTypes.any,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
};

const createValidationResolver = schema => {
  return data => {
    const { error, value: values } = schema.validate(data, {
      abortEarly: false,
    });

    return {
      values: error ? {} : values,
      errors: error
        ? error.details.reduce((previous, currentError) => {
            return {
              ...previous,
              [currentError.path[0]]: currentError,
            };
          }, {})
        : {},
    };
  };
};

export default Form;
export { Field, createValidationResolver };
