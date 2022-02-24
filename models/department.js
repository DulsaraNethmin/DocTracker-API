'use strict';
const {
  Model
} = require('sequelize');
const { TICK_CHAR } = require('sequelize/types/utils');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {

    static associate({Branch,User}) {
      this.hasOne(Branch,{foreignKey:'branch_id'})
      this.hasMany(User,{foreignKey:'department_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Department.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
    },
    branch_id:{
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'Department',
    tableName:'departments'
  });
  return Department;
};