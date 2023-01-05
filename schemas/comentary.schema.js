import joi from 'joi';

const id = joi.number().id();
const content = joi.string();

export const createComentarySchema = joi.object({
  content_comentary: content.required(),
});

export const getAndDeleteSchema = joi.object({
  id: id.required(),
});
