import joi from 'joi';

const id = joi.number().id();
const title = joi.string().alphanum().min(3).max(15);
const description = joi.string();
const city = joi.string().alphanum().min(3);
const departament = joi.string().alphanum().min(3);
const image = joi.string().allow(null).allow('');
const address = joi.string();
const price = joi.number();

export const CreateCropSchema = joi.object({
  title_crop: title.required(),
  description_crop: description.required(),
  city_crop: city.required(),
  departament_crop: departament.required(),
  image_crop: image.required(),
  address_crop: address.required(),
  price_crop: price.required(),
  UserCropId: id.required(),
  id_mass_unit_crop: id.required(),
});
export const UpdateCropSchema = joi.object({
  id_crop: id.required(),
  title_crop: title.required(),
  description_crop: description.required(),
  city_crop: city.required(),
  departament_crop: departament.required(),
  image_crop: image.required(),
  address_crop: address.required(),
  price_crop: price.required(),
  UserCropId: id.required(),
  id_mass_unit_crop: id.required(),
});

export const getAndDelete = joi.required({
  id: id.required(),
});
