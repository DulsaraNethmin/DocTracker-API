'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {

    static associate({Department,Organization,User,Document}) {
      //this.hasMany(Department,{foreignKey:'branch_id'})
      this.belongsTo(Organization)
      this.hasMany(User,{foreignKey:'branch_id'})
      this.hasMany(Document,{foreignKey:'branch_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Branch.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
    },
    number:{
      type: DataTypes.STRING,
    },
    town:{
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    organization_id:{
      type:DataTypes.UUID,
    }
  }, {
    sequelize,
    modelName: 'Branch',
    tableName: 'branches'
  });
  return Branch;
};