import joi from 'joi';

const id = joi.number().id();
const title = joi.string().alphanum().min(3).max(15);
const description = joi.string();
const city = joi.string().alphanum().min(3);
const departament = joi.string().alphanum().min(3);
const image = joi.string().allow(null).allow('');
const address = joi.string();
const price = joi.number();


const price_min = joi.number();
const price_max = joi.number();

const limit = joi.number().integer();
const offset = joi.number().integer();

export const queryListCropSchema = joi.object({
  limit,
  offset,
  price,
  city,
  departament,

  price_min,
  price_max
  // : price_max.when('price_min', {
  //   is: joi.number(),
  //   then: joi.required()
  // })
});

export const CreateCropSchema = joi.object({
  UserId: id.required(),
  unitMassId: id.required(),
  title_crop: title.required(),
  description_crop: description.required(),
  city_crop: city.required(),
  departament_crop: departament.required(),
  image_crop: image.required(),
  address_crop: address.required(),
  price_crop: price.required(),
});
export const UpdateCropSchema = joi.object({
  id: id.required(),
  UserId: id.required(),
  unitMassId: id.required(),
  title_crop: title.required(),
  description_crop: description.required(),
  city_crop: city.required(),
  departament_crop: departament.required(),
  image_crop: image.required(),
  address_crop: address.required(),
  price_crop: price.required(),
});

export const getAndDeleteSchema = joi.required({
  id: id.required(),
});
