'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {

    static associate({NotificationUser}) {
      this.hasMany(NotificationUser,{foreignKey:'notification_id'})
    }
  }
  notification.init({
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
  return notification;
};