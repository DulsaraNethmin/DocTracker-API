'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationUser extends Model {
    static associate({User,Notification}) {
      //this.belongsTo(User)
      this.belongsTo(Notification)
    }
  }
  NotificationUser.init({
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
  });
  return NotificationUser;
};