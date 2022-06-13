'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    static associate({Branch}) {

    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  job.init({
    uuid: {
      type:DataTypes.UUID,
      defaultValue:UUIDV4
    },
    branch_id: {
      type:DataTypes.UUID
    },
    deliverer_id: {
      type:DataTypes.UUID
    },
    customer_id: {
      type:DataTypes.UUID
    },
    is_completed: {
      type:DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};