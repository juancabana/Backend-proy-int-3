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
    type: DataTypes.INTEGER,
  },
};

export class Post extends Model {
  // Relaciones
  // Post has one relacionated
  // ForeignKey here
  static associate(models) {
    this.belongsTo(models.Crop, {
      as: 'post_crop',
      foreignKey: 'CropPostId',
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
