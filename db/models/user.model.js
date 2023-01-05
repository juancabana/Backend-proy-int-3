import { Model, DataTypes } from 'sequelize';
import { CROP_TABLE } from './crop.model.js';

export const USER_TABLE = 'User';

export const UserSchema = {
  id_user: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'user'

  },
  first_name_user: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  last_name_user: {
    defaultValue: null,
    type: DataTypes.STRING,
  },
  email_user: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password_user: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image_user: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  phone_number: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

export class User extends Model {
  static associate(models) {
    this.hasMany(models.Crop, {
      as: CROP_TABLE,
      foreignKey: 'id_user',
    });
    this.belongsTo(models.Mass_unit_crop, {
      as: 'Mass_unit_crop',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}
