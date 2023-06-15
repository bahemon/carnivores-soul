'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', require('../data/categories.json').map(category => {
      delete category.id
      category.createdAt = new Date()
      category.updatedAt = new Date()
      return category
    }))
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
