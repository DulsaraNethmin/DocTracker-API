'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OfflineChat extends Model {
    static associate({User}) {
      this.belongsTo(User)
      this.belongsTo(User)  
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  OfflineChat.init({
    uuid: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    from:{
    type:DataTypes.UUID,
  },
    to:{ 
    type:DataTypes.UUID,
  },
    message:{ 
    type:DataTypes.STRING,
  },
    isFetched:{ 
    type:DataTypes.BOOLEAN
  },
  }, {
    sequelize,
    modelName: 'OfflineChat',
  });
  return OfflineChat;
};