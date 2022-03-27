'use strict';
const {
  Model, UUID
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({Branch,User_Log,NotificationUser,Request,Job}) {
      this.belongsTo(Branch)
      this.hasMany(User_Log,{foreignKey:'user_id'})
      this.hasMany(NotificationUser,{foreignKey:'user_id'})
      this.hasMany(Request,{foreignKey:'customer_id'})
      this.hasMany(Request,{foreignKey:'admin_id'})
      this.hasMany(Job,{foreignKey:'admin_id'})
      this.hasMany(Job,{foreignKey:'deliverer_id'})
      this.hasMany(Job,{foreignKey:'customer_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
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
    branch_id:{
      type:DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return user;
};