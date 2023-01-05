import { Model, DataTypes } from 'sequelize';

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
    defaultValue: DataTypes.STRING,
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
  id_user: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id_user',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  id_mass_unit_crop: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Mass_unit_crop',
      key: 'id_mass_unit_crop',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

export class Crop extends Model {
  static associate(models) {
    this.hasOne(models.User, {
      as: 'User',
    });
    this.hasOne(models.Mass_unit_crop, {
      as: 'Mass_unit_crop',
    });
    this.belongsTo(models.Post)
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CROP_TABLE,
      modelName: 'Crop',
      timestamps: false,
    };
  }
}
