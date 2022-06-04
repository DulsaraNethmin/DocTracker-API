'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {

    static associate({User,Document,Payment}) {
      this.belongsTo(User)
      this.belongsTo(User)
      this.belongsTo(User)
      this.belongsTo(Document)
      this.hasOne(Payment,{foreignKey:'job_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Job.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    date:{
      type: DataTypes.DATE,
    },
    admin_id:{
      type: DataTypes.UUID,
    },
    deliverer_id:{
      type: DataTypes.UUID,
    },
    customer_id:{
      type: DataTypes.UUID,
    },
    doc_id:{
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Job',
    tableName:'jobs',
  });
  return Job;
};