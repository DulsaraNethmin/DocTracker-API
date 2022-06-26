const { redirect } = require('express/lib/response');
const { Sequelize, sequelize } = require('../models');
const user= require('../models').User;
const jwt=require('jsonwebtoken');
//require('dotenv').config();

<<<<<<< HEAD
// const nodemailer = require("nodemailer");

// const handleErrors = (e) => {
//   console.log(e.message, e.code);
//   let errors = { username: "", password: "" };

//   //validation errors
//   if (e.message.includes("Validation error")) {
//     Object.values(e.errors).forEach((error) => {
//       //console.log(error.path);
//       errors[error.path] = error.message;
//     });
//   }
//   return errors;
// };
module.exports = {
  async getAllUser(req, res) {
    console.log("request come");
    console.log(req.query.branch_id);
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
=======

module.exports={
    async getAllUser(req,res){
        console.log('request come');
        try{
            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
>>>>>>> parent of f8e724f (Merge branch 'dev' of https://github.com/DulsaraNethmin/DocTracker-API into Chamodhya4)
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}'`
            )
            res.status(200).send(result);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },   

    async getAUser(req,res){
        console.log('request come');
        try{
            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}'`
            )
            //logic
            if(result.length==1){            
                var jwt_payload={
                uuid:result[0].uuid,
                name:result[0].name
            }
            var token=jwt.sign(
                result[0],process.env.JWT_SECRET,{expiresIn:"1H"}
            );
            console.log(token);
            Object.assign(result[0],{token:token});
            res.status(200).send(result);
        }else{
            res.status(401).send("Unsuccessfull login");
        }
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    
    async getACustomer(req,res){
        console.log('request come');
        try{
            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and u.role='Customer'`
            )
            //logic
            if(result.length==1){            
                var jwt_payload={
                uuid:result[0].uuid,
                name:result[0].name
            }
            var token=jwt.sign(
                result[0],process.env.JWT_SECRET,{expiresIn:"1H"}
            );
            console.log(token);
            Object.assign(result[0],{token:token});
            res.status(200).send(result);
        }else{
            res.status(401).send("Unsuccessfull login");
        }
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },


    async getADeliverer(req,res){
        console.log('request come');
        try{
            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Deliverer'`
            )
            //logic
            if(result.length==1){            
                var jwt_payload={
                uuid:result[0].uuid,
                name:result[0].name
            }
            var token=jwt.sign(
                result[0],process.env.JWT_SECRET,{expiresIn:"1H"}
            );
            console.log(token);
            Object.assign(result[0],{token:token});
            res.status(200).send(result);
        }else{
            res.status(401).send("Unsuccessfull login");
        }
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async addUser(req,res){
        try{
            var newData=await user.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                telephone:req.body.telephone,
                role:req.body.role,
                branch_id:req.body.branch_id,
            })
            res.status(200).send("new user created")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async getAllCustomersOfABranch(req,res){
        console.log('request come');
        try{
            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}' and u.role='Customer'`
            )
            res.status(200).send(result);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    }, 

    async deleteUser(req,res){
        try{
            uuid=req.query.uuid
            var newData=await user.destroy({where:{uuid:uuid}})
            res.status(200).send('user deleted')
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    },

    async updateProfilePic(req,res){
        try{
            uuid=req.query.uuid
            url=req.body.url
            var newData=await user.update({image_url:url},{
                where:{
                    uuid:uuid
                }
            })

            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where  u.branch_id=b.uuid and u.uuid='${uuid}'`
<<<<<<< HEAD
      );
      console.log(result);
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },
};
=======
            )
            console.log(result);
            res.status(200).send(result)
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    },

    async getAdminId(req,res){
        console.log('request come');
        try{
            //var org=req.query.org_id;
            var branch=req.query.branch;
            var organization=req.query.organization;
            var [result,metadata]= await sequelize.query(
                `select u.uuid from users u, branches b,organizations o
                where u.branch_id=b.uuid and b.organization_id=o.uuid and o.name='${organization}' and b.name='${branch}' and u.role ="Branch Owner"`
            )
            console.log(result);
            if(result.length==1)
            {
                res.status(200).send(result);
            }
            else
            {
                res.status(401).send(result);
            }
            
            
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    }, 

}
>>>>>>> parent of f8e724f (Merge branch 'dev' of https://github.com/DulsaraNethmin/DocTracker-API into Chamodhya4)
