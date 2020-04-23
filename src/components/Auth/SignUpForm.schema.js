import Joi from '@hapi/joi';
import { createValidationResolver } from '../form';

const schema = Joi.object({
  firstName: Joi.string()
    .allow('')
    .trim(),
  lastName: Joi.string()
    .allow('')
    .trim(),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .trim(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .trim(),
  password: Joi.string().required(),
});

const defaultValue = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
};

const validationResolver = createValidationResolver(schema);
export { validationResolver, schema, defaultValue };
