'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Products', 'supplierId');
    await queryInterface.removeColumn('Products', 'description');
    await queryInterface.removeColumn('Products', 'image');
    await queryInterface.removeColumn('Products', 'price');
    await queryInterface.removeColumn('Products', 'cost');
    await queryInterface.removeColumn('Products', 'minimum_stock');
    await queryInterface.removeColumn('Products', 'stock');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
