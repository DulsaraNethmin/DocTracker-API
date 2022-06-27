'use strict';
const {
  Model, UUID
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({Branch,User_Log,NotificationUser,Request,Delivery,DocumentUser,Mail}) {
      this.belongsTo(Branch)
      this.hasMany(User_Log,{foreignKey:'user_id'})
      this.hasMany(NotificationUser,{foreignKey:'user_id'})
      this.hasMany(Request,{foreignKey:'customer_id'})
      this.hasMany(Request,{foreignKey:'admin_id'})
      this.hasMany(Delivery,{foreignKey:'end_customer_id'})
      this.hasMany(Delivery,{foreignKey:'deliverer_id'})
      this.hasMany(Delivery,{foreignKey:'customer_id'})
      this.hasMany(DocumentUser,{foreignKey:'customer_id'})
      this.hasMany(Mail,{foreignKey:'from'})
      this.hasMany(Mail,{foreignKey:'to'})
    }
    toJSON(){
      return {...this.get(),id:undefined,createdAt:undefined,updatedAt:undefined};
    }
  }
  user.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: [false, "Please enter a password"],
      validate: {
        len: {
          args: [6, 100],
          msg: "The password must contain between 6 and 15 characters.",
        },
      },
    },
    username:{
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isLowercase: {
          args: true,
          msg: "Must be lowercase",
        },
        len: {
          args: [6, 15],
          msg: "The username must contain between 6 and 15 characters.",
        },
      },
    },
    email:{
      type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Valid email-id required",
          },
        },
    },
    telephone:{
      type: DataTypes.STRING,
    },
    role:{
      type: DataTypes.STRING,
    },
    branch_id:{
      type:DataTypes.UUID,
    },
    image_url:{
      type:DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  user.afterCreate((u)=>{
    console.log(u.name+" and "+u.email)
  })
  return user;
};
