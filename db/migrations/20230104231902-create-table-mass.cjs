'use strict';
const models = import('../models/massUnit.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const { MASS_UNIT_TABLE, MassUnitSchema} = await models;

    return queryInterface.createTable(MASS_UNIT_TABLE, MassUnitSchema);
  },

  async down(queryInterface, Sequelize) {
  },
};
