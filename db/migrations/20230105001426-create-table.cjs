'use strict';
const models = import('../models/crop.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const { CROP_TABLE, CropSchema } = await models;

    return queryInterface.createTable(CROP_TABLE, CropSchema);
  },

  async down(queryInterface, Sequelize) {
  },
};
