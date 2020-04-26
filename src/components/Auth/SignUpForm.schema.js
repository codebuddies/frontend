import Joi from '@hapi/joi';
import { createValidationResolver } from '../form';

const schema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .label('First Name'),
  lastName: Joi.string()
    .allow('')
    .trim()
    .label('Last Name'),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .trim()
    .label('Username'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .trim()
    .label('Email'),
  password: Joi.string()
    .required()
    .label('Password'),
});

const defaultValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
};

const validationResolver = createValidationResolver(schema);
export { validationResolver, schema, defaultValues };
