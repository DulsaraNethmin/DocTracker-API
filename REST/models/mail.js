'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mail extends Model {

    static associate({User}) {
      this.belongsTo(User),
      this.belongsTo(User)
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Mail.init({
    uuid: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    from: {
      type:DataTypes.UUID
    },
    to: {
      type:DataTypes.UUID
    },
    time: {
      type:DataTypes.STRING
    },
    head: {
      type:DataTypes.STRING
    },
    body:{
       type:DataTypes.STRING
      },
    seen:{
      type:DataTypes.BOOLEAN
      }
  }, {
    sequelize,
    modelName: 'Mail',
    tableName: 'mails'
  });
  return Mail;
};