import sequelize from './../libs/sequelize.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {}

  async find() {
    const users = await sequelize.models.User.findAll({
      attributes: [
        'id',
        'role',
        'first_name_user',
        'last_name_user',
        'email',
        'image_user',
        'phone_number',
      ],
      include: [
        {
          model: sequelize.models.Crop,
          as: 'crops',
          attributes: [
            'id',
            'title_crop',
            'description_crop',
            'city_crop',
            'departament_crop',
            'image_crop',
            'address_crop',
            'price_crop',
          ],
          include: { model: sequelize.models.Mass_unit_crop, as: 'massUnit' },
        },
      ],
    });
    return users;
  }
  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id, {
      include: [
        {
          model: sequelize.models.Crop,
          as: 'crops',
          attributes: [
            'id',
            'title_crop',
            'description_crop',
            'city_crop',
            'departament_crop',
            'image_crop',
            'address_crop',
            'price_crop',
          ],
          include: { model: sequelize.models.Mass_unit_crop, as: 'massUnit' },
        },
      ],
    });
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async findByEmail(email) {
    const user = await sequelize.models.User.findOne({
      where: { email: email },
    });

    return user;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password_user, 10);
    const newUser = await sequelize.models.User.create({
      ...data,
      password_user: hash,
    });
    delete newUser.dataValues.password_user;
    return newUser;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    console.log(rta)
    return rta
  }
  async delete(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { message: 'EL usuario se ha eliminado correctamente' };
  }
}

export default UserService;
