import { Model, DataTypes } from 'sequelize';

export const MASS_UNIT_TABLE = 'Mass_unit_crop';

export const MassUnitSchema = {
  id_mass_unit_crop: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name_mass_unit_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

export class MassUnitCrop extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MASS_UNIT_TABLE,
      modelName: 'Mass_unit_crop',
      timestamps: false,
    };
  }
}
