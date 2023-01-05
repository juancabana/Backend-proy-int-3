import joi from 'joi';

const id = joi.number().id();
const description = joi.string();

const createPostSchema = joi.object({
  description_post: description.required(),
  id_crop: id.required(),
});

const updatePostDescription = joi.object({
  id: id,
  description_post: description.required(),
});

const getAndDeletePost = joi.object({ id: id });
