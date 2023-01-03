import sequelize from "../libs/sequelize.js";

class CropServices {
  constructor() {}

  async find() {
    const crops = await sequelize.models.Crop.findAll();
    return crops;
  }
  async create(data) {
    const newCrop = await sequelize.models.Crop.create(data)
    return newCrop;
  }
  async delete(id) {
    const crop = await sequelize.models.Crop.findByPk(id)
    await crop.destroy();
    return {
      message: 'EL usuario se ha eliminado correctamente'
    }

  }
  update(id, data) {
    const crop = sequelize.models.Crop.findByPk(id);
    const rta = crop.update(data);
    return rta

  }
}

export default CropServices;
