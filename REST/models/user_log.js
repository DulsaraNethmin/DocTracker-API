'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_log extends Model {

    static associate({User}) {
      this.belongsTo(User)
    }
  }
  user_log.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    user_id:{
      type: DataTypes.UUID,
    },
    login_at:{
      type: DataTypes.DATE,
    },
    logout_at:{
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User_Log',
    tableName: 'user_logs'
  });
  return user_log;
};