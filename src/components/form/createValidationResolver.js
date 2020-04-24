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

export default createValidationResolver;
