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

Form.propTypes = {
  defaultValues: PropTypes.object,
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  validationResolver: PropTypes.func,
};

export default Form;
