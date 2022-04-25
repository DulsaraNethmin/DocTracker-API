'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      from: {
        type: Sequelize.UUID
      },
      to: {
        type: Sequelize.UUID
      },
      time: {
        type: Sequelize.STRING
      },
      head: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Mails');
  }
};