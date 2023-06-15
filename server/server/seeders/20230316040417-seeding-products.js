'use strict';

const slugify = require('../helpers/slugify');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', require('../data/products.json').map(product => {
      delete product.id
      product.slug = slugify(product.name)
      product.createdAt = new Date()
      product.updatedAt = new Date()
      return product
    }))
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
