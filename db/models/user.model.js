import { Model, DataTypes } from 'sequelize';
import { CROP_TABLE } from './crop.model.js';

export const USER_TABLE = 'User';

export const UserSchema = {
  id: {
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
    // this.hasMany(models.Crop, {
    //   as: 'Crop',
    //   foreignKey: 'user_id'
    // })
    // this.hasOne(models.Crop)
    // this.hasOne(models.Crop, {
    //   as: 'user_crop', foreignKey: 'UserCropId'
    // })
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
