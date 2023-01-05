'use strict';
const models = import('../models/user.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const { USER_TABLE, UserSchema } = await models;

    return queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
  },
};
