import { UserSchema, User} from './user.model.js';
import { CropSchema, Crop } from './crop.model.js';
import { MassUnitSchema, MassUnitCrop } from './massUnit.model.js';

export function setupModels (sequelize)  {
  User.init(UserSchema, User.config(sequelize));
  Crop.init(CropSchema, Crop.config(sequelize));
  MassUnitCrop.init(MassUnitSchema, MassUnitCrop.config(sequelize));
}

