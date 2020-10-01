import Joi from '@hapi/joi';
import { createValidationResolver } from '../form';

const schema = Joi.object({
  username: Joi.string()
    .required()
    .trim()
    .label('Username'),
  email: Joi.string()
    .required()
    .trim()
    .label('Email'),
  password: Joi.string()
    .required()
    .label('Password'),
  passwordConfirmation: Joi.string()
    .required()
    .label('Password Confirmation')
    .valid(Joi.ref('password')),
});

const defaultValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationResolver = createValidationResolver(schema);
export { validationResolver, schema, defaultValues };
