import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';

class ServiceMassUnit {
  constructor() {}

  async find() {
    const units = await sequelize.models.Mass_unit_crop.findAll();
    return units;
  }
  async findOne(id) {
    const unit = await sequelize.models.Mass_unit_crop.findByPk(id);
    if (!unit) {
      throw boom.notFound('Mass unit not found');
    }
    return unit;
  }
  async create(data) {
    const newMassUnit = await sequelize.models.Mass_unit_crop.create(data);
    return newMassUnit;
  }
  async delete(id) {
    const massUnit = await sequelize.models.Mass_unit_crop.findByPk(id);
    if (!massUnit) {
      throw boom.notFound('Mass unit not found');
    }
    await massUnit.destroy(id);
    return { message: 'Se ha eliminado la unidad de masa' };
  }
}

export default ServiceMassUnit;
