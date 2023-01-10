import joi from 'joi';

const id = joi.number().id();
const description = joi.string();

export const createPostSchema = joi.object({
  description_post: description.required(),
  id_crop: id.required(),
});

export const updatePostDescription = joi.object({
  id: id,
  description_post: description.required(),
});

export const getAndDeletePost = joi.object({ id: id });
