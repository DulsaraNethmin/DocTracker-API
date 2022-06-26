'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {

    static associate({NotificationUser}) {
      this.hasMany(NotificationUser,{foreignKey:'notification_id'})
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
  }, {
    sequelize,
    modelName: 'Notification',
    tableName:'notifications'
  });
  return Notification;
};