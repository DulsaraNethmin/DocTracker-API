'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {

    static associate({User}) {
      this.hasOne(user,{foreignKey:'admin_id'})
      this.hasMany(User,{foreignKey:'customer_id'})
      
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Request.init({
    uuid:{
      type: DataTypes.UUID,
    },
    admin_id:{
      type: DataTypes.UUID,
    },
    customer_id:{
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Request',
    tableName:'requests',
  });
  return Request;
};