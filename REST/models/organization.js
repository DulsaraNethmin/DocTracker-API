'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate({Branch}) {
      this.hasMany(Branch,{foreignKey:'organization_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Organization.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
    },
    owner:{
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'Organization',
    tableName: 'organizations',
  });
  // Organization.afterCreate(async(org)=>{
  //   console.log('hook trigger...!')
  // });
  return Organization;

};