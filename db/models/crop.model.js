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
  // user_id: {
  //   field: 'user_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'User',
  //     key: 'id',
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  // },
  // mass_unit_id: {
  //   field: 'mass_unit_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'Mass_unit_crop',
  //     key: 'id',
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  // },
};
export class Crop extends Model {
  static associate(models) {
    // this.belongsTo(models.Mass_unit_crop, {
    //   as: 'Mass_unit_crop',
    // });
    // this.belongsTo(models.User, {
    //   as: 'User',
    // });
    this.hasOne(models.Post, {
      as: 'crop_post',
      foreignKey: 'CropPostId',
    });
    // this.belongsTo(models.User, {
    //   as: 'crop_user', foreignKey: 'UserCropId'
    // })
    this.belongsTo(models.User, {
      as: 'owner',
      foreignKey: 'UserId',
    });
    this.belongsTo(models.Mass_unit_crop, {
      as: 'massUnit',
      foreignKey: 'unitMassId'
    })
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
