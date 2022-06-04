'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Log extends Model {

    static associate({User}) {
      this.belongsTo(User)
    }
  }
  User_Log.init({
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
  });
  return User_Log;
};