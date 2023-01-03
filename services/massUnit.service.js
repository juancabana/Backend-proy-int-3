import sequelize from "../libs/sequelize.js";

class ServiceMassUnit {
  constructor() {}

  async find() {
    const units = await sequelize.models.Mass_unit_crop.findAll();
    return units;
  }
  async create(data) {
    const newMassUnit = await sequelize.models.Mass_unit_crop.create(data);
    return newMassUnit;
  }
  async delete(id) {
    const massUnit = await sequelize.models.Mass_unit_crop.findByPk(id);
    await massUnit.destroy(id);
    return {message: 'Se ha eliminado la unidad de masa'}
   }

}

export default ServiceMassUnit;
