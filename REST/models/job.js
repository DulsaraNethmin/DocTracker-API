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
      // open = 0  pending = 1 finished = 2
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Job',
    tableName: 'jobs'
  });
  return job;
};