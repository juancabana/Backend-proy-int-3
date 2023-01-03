import { Model, DataTypes, Sequelize } from 'sequelize';

export const CROP_TABLE = 'Crop';

export const CropSchema = {
  id_crop: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  departament_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image_crop: {
    defaultValue: 'image',
    type: DataTypes.STRING,
  },
  address_crop: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price_crop: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

export class Crop extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CROP_TABLE,
      modelName: 'Crop',
      timestamps: false
    };
  }
}
