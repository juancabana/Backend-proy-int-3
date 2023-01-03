import sequelize from './../libs/sequelize.js';

class UserService {
  constructor() {}

  async find() {
    const users = await sequelize.models.User.findAll();
    return users;
  }
  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      return 'User not found';
    } else {
      return user;
    }
  }
  async create(data) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }
  async delete(id) {
    const user = await sequelize.models.User.findByPk(id);
    await user.destroy();
    return {message: 'EL usuario se ha eliminado correctamente'}

  }

}

export default UserService;
