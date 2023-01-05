import { Model, DataTypes } from 'sequelize';
import {POST_TABLE} from './post.model.js';

export const COMENTARY_TABLE = 'Comentary';

export const ComentarySchema = {
  id_comentary: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  content_comentary: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

export class Comentary extends Model {
  static associate(models) {
    this.hasOne(models.Post, {
      as: POST_TABLE,
      foreignKey: 'id_comentary'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMENTARY_TABLE,
      modelName: 'Comentary',
      timestamps: false,
    };
  }
}
