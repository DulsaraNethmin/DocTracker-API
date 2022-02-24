'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {

    static associate(models) {
      
    }
  }
  Notification.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    body: {
      type:DataTypes.STRING,
    },
    head: {
      type:DataTypes.STRING,
    },
    is_seen: {
      type:DataTypes.BOOLEAN,
    },
    sender_id: {
      type:DataTypes.UUID,
    },
    receiver_id: {
      type:DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Notification',
    tableName:'notifications'
  });
  return Notification;
};