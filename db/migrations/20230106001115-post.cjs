'use strict';
const models = import('../models/post.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const { POST_TABLE, PostSchema } = await models;


    return queryInterface.createTable(POST_TABLE, PostSchema);
  },

  async down(queryInterface, Sequelize) {
  },
};
