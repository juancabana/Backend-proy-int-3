import sequelize from './../libs/sequelize.js';

class ProfileService {
  constructor() {}

  async findCropsByUser(userId) {
    const crops = await sequelize.models.Crop.findAll({
      where: {
        '$owner.id$': userId,
      },
      include: [
        { model: sequelize.models.User, as: 'owner' },
        { model: sequelize.models.Mass_unit_crop, as: 'massUnit' },
      ],
    });
    return crops
  }
}

export default ProfileService;
