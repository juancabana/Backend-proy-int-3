import { UserSchema, User } from './user.model.js';
import { CropSchema, Crop } from './crop.model.js';
import { MassUnitSchema, MassUnitCrop } from './massUnit.model.js';
import { PostSchema, Post } from './post.model.js';
import { ComentarySchema, Comentary } from './comentary.model.js';

export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));

  MassUnitCrop.init(MassUnitSchema, MassUnitCrop.config(sequelize));
  Comentary.init(ComentarySchema, Comentary.config(sequelize));

  Crop.init(CropSchema, Crop.config(sequelize));
  Post.init(PostSchema, Post.config(sequelize));


  User.associate(sequelize.models);

  MassUnitCrop.associate(sequelize.models);
  Comentary.associate(sequelize.models);

  Crop.associate(sequelize.models);
  Post.associate(sequelize.models);
}
