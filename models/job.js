'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {

    static associate({User,Document}) {
      this.hasOne(User,{foreignKey:'admin_id'})
      this.hasOne(User,{foreignKey:'emp_id'})
      this.hasOne(Document,{foreignKey:'doc_id'})
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
    emp_id:{
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