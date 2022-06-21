'use strict';

//const { UUID } = require("sequelize/types");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('branches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      town: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      organization_id:{
        type:Sequelize.UUID,
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
    await queryInterface.dropTable('branches');
  }
};