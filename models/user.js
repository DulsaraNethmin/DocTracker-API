'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Department}) {
      this.hasOne(Department,{foreignKey:'department_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  User.init({
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
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users',
  });
  return User;
};