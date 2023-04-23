'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'userId',
        references: {
          model: 'Users',
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
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      cost: {
        type: Sequelize.DECIMAL
      },
      minimum_stock: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'categoryId',
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      isAvailable: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Product_Users');
  }
};