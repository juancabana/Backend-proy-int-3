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
  id_crop: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Crop',
      key: 'id_crop',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  id_comentary: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'Comentary',
      key: 'id_comentary',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

export class Post extends Model {
  static associate(models) {
    this.hasOne(models.Crop, {
      as: 'Crop',
      foreignKey: 'id_crop'
    });
    this.hasOne(models.Comentary, {
      as: 'Comentary',
      foreignKey: 'id_comentary'
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
