'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate({Job,User}) {
      this.belongsTo(Job)
      this.belongsTo(User)
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Payment.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    date:{
      type: DataTypes.DATE,
    },
    amount:{
      type: DataTypes.DOUBLE,
    },
    is_paid:{
      type: DataTypes.BOOLEAN,
    },
    job_id:{
      type: DataTypes.UUID,
    },
    customer_id:{
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};