import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';

class CropServices {
  constructor() {}

  async find() {
    const crops = await sequelize.models.Crop.findAll({
      include: [
        {
          model: sequelize.models.User,
          as: 'owner',
        },
        {
         model: sequelize.models.Mass_unit_crop,
         as: 'massUnit',
        }
      ],
    });
    return crops;
  }
  async create(data) {
    const newCrop = await sequelize.models.Crop.create(data);
    return newCrop;
  }
  async delete(id) {
    const crop = await sequelize.models.Crop.findByPk(id);
    if (!crop) {
      throw boom.notFound('Crop not found');
    }
    await crop.destroy();
    return {
      message: 'EL usuario se ha eliminado correctamente',
    };
  }
  async update(id, data) {
    const crop = await sequelize.models.Crop.findByPk(id);
    if (!crop) {
      throw boom.notFound('Crop not found');
    }
    const rta = await crop.update(data);
    return rta;
  }
}

export default CropServices;
