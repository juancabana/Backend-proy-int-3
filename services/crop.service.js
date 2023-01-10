import sequelize from '../libs/sequelize.js';
import { Op } from 'sequelize';
import boom from '@hapi/boom';

class CropServices {
  constructor() {}

  async find(query) {
    const options = {
      // will include the users and mass units that are associated
      include: [
        {
          model: sequelize.models.User,
          as: 'owner',
          attributes: [
            'id',
            'first_name_user',
            'last_name_user',
            'role',
            'email_user',
            'image_user',
            'phone_number',
          ],
        },
        {
          model: sequelize.models.Mass_unit_crop,
          as: 'massUnit',
        },
      ],
      // filter
      where: {},
    };

    const { limit, offset } = query;
    const { price, city, departament } = query;
    const { price_min, price_max } = query;

    if (limit && offset) {
      (options.limit = limit), (options.offset = offset);
    }
    // If the following parameters like as 'Query' they are sent to options
    price ? (options.where.price_crop = price) : false;
    city ? (options.where.city_crop = city) : false;
    departament ? (options.where.departament_crop = departament) : false;

    // Validation by price range
    price_min && price_max
      ? (options.where.price_crop = {
          [Op.gte]: price_min,
          [Op.lte]: price_max,
        })
      : false;

    const crops = await sequelize.models.Crop.findAll(options);
    return crops;
  }
  async findOne(id) {
    const crop = await sequelize.models.Crop.findByPk(id,

      {
        // will include the users and mass units that are associated
        include: [{
            model: sequelize.models.User,
            as: 'owner',
            attributes: [ 'id', 'first_name_user', 'last_name_user', 'role', 'email_user', 'image_user', 'phone_number' ],
          },
          {
            model: sequelize.models.Mass_unit_crop,
            as: 'massUnit',
          },
        ],

      }
    );
    if (!crop) {
      throw boom.notFound('Crop not found');
    }
    return crop;
  }
  async create(data) {
    const newCrop = await sequelize.models.Crop.create(data);
    await sequelize.models.Post.create({CropPostId: newCrop.id})
    return newCrop;
  }
  async delete(id) {
    const crop = await sequelize.models.Crop.findByPk(id);
    const post = await sequelize.models.Post.findByPk(id)
    if (!crop) {
      throw boom.notFound('Crop not found');
    }
    await post.destroy();
    await crop.destroy();
    return {
      message: 'EL usuario se ha eliminado correctamente',
    };
  }
  async update(id, data) {
    const crop = await sequelize.models.Crop.findByPk(id);
    if (!crop) {
      throw boom.notFound('Crop not found');
    }
    const rta = await crop.update(data);
    return rta;
  }
}

export default CropServices;
