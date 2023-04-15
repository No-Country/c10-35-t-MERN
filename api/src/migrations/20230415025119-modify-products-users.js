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
    await queryInterface.addColumn('Product_Users', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'categoryId',
      references: {
        model: 'Categories',
        key: 'id',
      },
    });

    await queryInterface.addColumn('Product_Users', 'stock', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn('Product_Users', 'minimum_stock', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn('Product_Users', 'cost', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    });

    await queryInterface.addColumn('Product_Users', 'price', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    });

    await queryInterface.addColumn('Product_Users', 'image', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Product_Users', 'description', {
      type: Sequelize.STRING,
      allowNull: true,
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Product_Users', 'categoryId');
    await queryInterface.removeColumn('Product_Users', 'stock');
    await queryInterface.removeColumn('Product_Users', 'minimum_stock');
    await queryInterface.removeColumn('Product_Users', 'cost');
    await queryInterface.removeColumn('Product_Users', 'price');
    await queryInterface.removeColumn('Product_Users', 'image');
    await queryInterface.removeColumn('Product_Users', 'description');

  }
};
