import { Model, DataTypes, Sequelize } from 'sequelize';

export const USER_TABLE = 'User';

export const UserSchema = {
  id_user: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  static associate () {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

export default {USER_TABLE, UserSchema, User}
