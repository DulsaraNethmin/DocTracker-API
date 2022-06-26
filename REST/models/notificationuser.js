'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notificationUser extends Model {
    static associate({User,Notification}) {
      this.belongsTo(User)
      this.belongsTo(Notification)
    }
  }
  notificationUser.init({
    notification_id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    user_id:{
      type: DataTypes.UUID
    },
    is_seen:{
      type:DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'NotificationUser',
    tableName: 'notificationusers'
  });
  return notificationUser;
};