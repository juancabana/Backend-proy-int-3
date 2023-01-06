import { Model, DataTypes, Sequelize } from 'sequelize';

export const POST_TABLE = 'Post';

export const PostSchema = {
  id_post: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  description_post: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  create_date_post: {
    allowNull: false,
    type: DataTypes.DATE(),
    defaultValue: Sequelize.NOW,

  },
  CropPostId: {
    unique: true,
    allowNull: false,
    // primaryKey: true,
    type: DataTypes.INTEGER,
  },
  // cropId: {
  //   field: 'crop_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   unique: true,
  //   references: {
  //     model: 'Crop',
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  // },
};

export class Post extends Model {
  static associate(models) {
    this.belongsTo(models.Crop, {
      as: 'post_crop', foreignKey: 'CropPostId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: POST_TABLE,
      modelName: 'Post',
      timestamps: false,
    };
  }
}
