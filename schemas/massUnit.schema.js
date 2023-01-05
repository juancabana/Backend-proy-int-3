import joi from 'joi';

const id = joi.number().id();
const name_mass_unit_crop = joi.string().alphanum().max(20);
const key_mass_unit_crop = joi.string().alphanum().max(20);

export const createMassUnitSchema = joi.object({
  key_mass_unit_crop: key_mass_unit_crop.required(),
  name_mass_unit_crop: name_mass_unit_crop.required(),
});

export const getAndDeleteMassUnitSchema = joi.object({ id: id.required() });
