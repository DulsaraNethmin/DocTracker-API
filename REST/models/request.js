'use strict';
const {
  Model, UUID
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {

    static associate({User,Document}) {
      this.belongsTo(User)
      this.belongsTo(User)
      this.belongsTo(Document)
      
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
    document_id:{
      type:DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'Request',
    tableName:'requests',
  });
  return Request;
};