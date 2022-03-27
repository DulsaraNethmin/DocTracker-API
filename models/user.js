'use strict';
const {
  Model, UUID
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({Department,User_Log,NotificationUser,Request,Job}) {
      this.belongsTo(Department)
      this.hasMany(User_Log,{foreignKey:'user_id'})
      this.hasMany(NotificationUser,{foreignKey:'user_id'})
      this.hasMany(Request,{foreignKey:'customer_id'})
      this.hasMany(Request,{foreignKey:'admin_id'})
      this.hasMany(Job,{foreignKey:'admin_id'})
      this.hasMany(Job,{foreignKey:'deliverer_id'})
      this.hasMany(Job,{foreignKey:'customer_id'})
    }
  }
  user.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
    },
    password:{
      type: DataTypes.STRING,
    },
    email:{
      type: DataTypes.STRING,
    },
    telephone:{
      type: DataTypes.STRING,
    },
    gender:{
      type: DataTypes.STRING,
    },
    role:{
      type: DataTypes.STRING,
    },
    department_id:{
      type:DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};