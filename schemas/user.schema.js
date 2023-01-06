import joi from 'joi';

const id = joi.number().id();
const first_name_user = joi.string().alphanum().min(3).max(15);
const role = joi.string().alphanum().min(3).max(15);
const last_name_user = joi.string().alphanum().min(3).max(15);
const email_user = joi.string().email();
const password_user = joi.string().min(5);
const image_user = joi.string().allow(null).allow('');
const phone_number = joi.number().integer().positive();

export const createUserSchema = joi.object({
  role: role,
  first_name_user: first_name_user.required(),
  last_name_user: last_name_user,
  email_user: email_user.required(),
  password_user: password_user.required(),
  image_user: image_user,
  phone_number: phone_number.required(),
});
export const updateUserSchema = joi.object({
  role: role,
  first_name_user: first_name_user,
  last_name_user: last_name_user,
  email_user: email_user,
  password_user: password_user,
  image_user: image_user,
  phone_number: phone_number,
});

export const getAndDeleteUserSchema = joi.object({ id: id.required() });
