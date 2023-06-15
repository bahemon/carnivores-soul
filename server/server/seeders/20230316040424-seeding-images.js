'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', require('../data/images.json').map(image => {
      delete image.id
      image.createdAt = new Date()
      image.updatedAt = new Date()
      return image
    }))
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
