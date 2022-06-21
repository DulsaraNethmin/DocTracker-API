'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    static associate({Delivery,User}) {
      this.belongsTo(Delivery)
      this.belongsTo(User)
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  payment.init({
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
    delivery_id:{
      type: DataTypes.UUID,
    },
    customer_id:{
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Payment',
    tableName:'payments'
  });
  return payment;
};