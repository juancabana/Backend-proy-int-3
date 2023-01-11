import joi from 'joi';

const id = joi.number().id();
const email = joi.string().email();
const password = joi.string().min(5);
const token = joi.string().min(3).max(200);

export const authenticateSchema = joi.object({
  email: email.required(),
  password: password.required(),
});

export const recoverySchema = joi.object({
  email: email.required(),
});

export const changePasswordSchema = joi.object({
  token: token.required(),
  newPassword: password.required(),
});
