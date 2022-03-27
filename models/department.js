'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {

    static associate({Branch,Document,User}) {
      this.belongsTo(Branch)
      this.hasMany(Document,{foreignKey:'department_id'})
      //this.hasMany(User,{foreignKey:'department_id'})

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
    branch_id: {
      type:DataTypes.UUID
    }
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};