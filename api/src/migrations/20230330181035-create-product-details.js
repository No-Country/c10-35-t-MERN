'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        field: 'brandId',
        references: {
          model: 'Brands',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'productId',
        references: {
          model: 'Products',
          key: 'id'
        }
      },
      expirationDate: {
        type: Sequelize.DATE
      },
      isAvailable: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Details');
  }
};