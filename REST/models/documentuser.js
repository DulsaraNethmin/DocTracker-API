'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentUser extends Model {
    static associate({Document,User}) {
      this.belongsTo(Document)
      this.belongsTo(User)
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  DocumentUser.init({
    doc_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    customer_id:{
      type: DataTypes.UUID,
    },
    date:{
      type: DataTypes.DATE,
    },
    is_current_user:{
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'DocumentUser',
    tableName: 'documentusers'
  });
  return DocumentUser;
};