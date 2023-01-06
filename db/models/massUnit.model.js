import { Model, DataTypes } from 'sequelize';
import { CROP_TABLE } from './crop.model.js';

export const MASS_UNIT_TABLE = 'Mass_unit_crop';

export const MassUnitSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name_mass_unit_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  key_mass_unit_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

export class MassUnitCrop extends Model {
  static associate(models) {
    // this.hasMany(models.Crop, {
    //   as: 'Crop',
    //   foreignKey: 'mass_unit_id'
    // })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MASS_UNIT_TABLE,
      modelName: 'Mass_unit_crop',
      timestamps: false,
    };
  }
}
