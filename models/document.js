'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {

    static associate({Branch,Job,Request}) {
       this.belongsTo(Branch)
       this.hasMany(Job,{foreignKey:'document_id'})
       this.hasMany(Request,{foreignKey:'document_id'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  Document.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    doc_name: {
      type:DataTypes.STRING,
    },
    type:{
      type: DataTypes.STRING,
    },
    date:{
      type: DataTypes.DATE,
    },
    branch_id:{
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};