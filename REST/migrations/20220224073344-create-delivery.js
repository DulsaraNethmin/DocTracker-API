'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deliveries', {
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
      date: {
        type: Sequelize.DATE
      },
      deliverer_id: {
        type: Sequelize.UUID
      },
      customer_id: {
        type: Sequelize.UUID
      }, end_customer_id: {
        type: Sequelize.UUID
      },
      doc_id: {
        type: Sequelize.UUID
      },
      job_id: {
        type: Sequelize.UUID
      },
      is_completed: {
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
    await queryInterface.dropTable('Deliveries');
  }
};