'use strict';
const models = import('../models/comentary.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const { COMENTARY_TABLE, ComentarySchema } = await models;

    return queryInterface.createTable(COMENTARY_TABLE, ComentarySchema);
  },

  async down(queryInterface, Sequelize) {
  },
};
