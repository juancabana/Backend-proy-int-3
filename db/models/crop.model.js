import { Model, DataTypes } from 'sequelize';

export const CROP_TABLE = 'Crop';

export const CropSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  UserId: {
    // unique: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  unitMassId: {
    // unique: true,
    allowNull: false,
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
};
export class Crop extends Model {
  // Relaciones
  static associate(models) {
    // Crop has one Post relacionated
    // ForeignKey in Post
    this.hasOne(models.Post, {
      as: 'crop_post',
      foreignKey: 'CropPostId',
    });
    // Crop has belogs to one User
    // ForeignKey here
    this.belongsTo(models.User, {
      as: 'owner',
      foreignKey: 'UserId',
    });
    // Crop has one mass unit
    // ForeignKey here
    this.belongsTo(models.Mass_unit_crop, {
      as: 'massUnit',
      foreignKey: 'unitMassId',
    });
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
