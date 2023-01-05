import joi from 'joi';

const id = joi.number().id();
const title = joi.string().alphanum().min(3).max(15);
const description = joi.string();
const city = joi.string().alphanum().min(3);
const email_user = joi.string().email();
const password_user = joi.string().min(5);
const image_user = joi.string().allow(null).allow('');
const phone_number = joi.number().integer().positive();
