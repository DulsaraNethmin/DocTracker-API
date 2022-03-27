'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {

    static associate({Department,Job,Request}) {
       this.belongsTo(Department)
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
    department_id:{
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};