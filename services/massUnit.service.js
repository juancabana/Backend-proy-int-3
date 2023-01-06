import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';

class ServiceMassUnit {
  constructor() {}

  async find() {
    const units = await sequelize.models.Mass_unit_crop.findAll({
      include: [
        {
          model: sequelize.models.Crop,
          as: 'massUnit',
          attributes: [
            'id',
            'title_crop',
            'description_crop',
            'city_crop',
            'departament_crop',
            'image_crop',
            'address_crop',
            'price_crop',
          ],
        },
      ],
    });
    return units;
  }
  async findOne(id) {
    const unit = await sequelize.models.Mass_unit_crop.findByPk(id, {
      include: [
        {
          model: sequelize.models.Crop,
          as: 'massUnit',
          attributes: [
            'id',
            'title_crop',
            'description_crop',
            'city_crop',
            'departament_crop',
            'image_crop',
            'address_crop',
            'price_crop',
          ],
        },
      ],
    });
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
