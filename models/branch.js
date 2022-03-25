'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {

    static associate({Department,Organization}) {
      this.hasMany(Department,{foreignKey:'branch_id'})
      this.belongsTo(Organization)
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
      type: DataTypes.INTEGER,
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
  });
  return Branch;
};