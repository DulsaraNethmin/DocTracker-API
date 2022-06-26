'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {

    static associate({User,Document,Payment}) {
      this.belongsTo(User)
      this.belongsTo(User)
      this.belongsTo(User)
      this.belongsTo(Document)
      this.hasOne(Payment,{foreignKey:'delivery_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Delivery.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    end_customer_id:{
      type: DataTypes.UUID,
    },
    doc_id:{
      type: DataTypes.UUID
    },
    job_id:{
      type: DataTypes.UUID,
    },
    is_completed:{
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Delivery',
    tableName:'deliveries',
  });
  return Delivery;
};