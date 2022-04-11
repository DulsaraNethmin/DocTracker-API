const { redirect } = require('express/lib/response');
const { Sequelize, sequelize } = require('../models');

const user= require('../models').User;


module.exports={

    async getAllUsers(req,res){
        try{
            var [result,metadata]= await sequelize.query(
                `select u.uuid ,u.name as name ,u.role as role ,b.name as branch from users u, branches b where u.branch_id=b.uuid and u.username='${req.body.username}'`
            )
            res.status(200).send(result);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },    

    async getAUser(req,res){
        try{
            var newUser= await user.findAll({
                where:{
                username:req.body.username,
                password:req.body.password
            },
            attributes:['uuid','username','name','role']
        });
            res.status(200).send(newUser);
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

    async deleteUser(req,res){
        try{
            uuid=req.query.uuid
            var newData=await user.destroy({where:{uuid:uuid}})
            res.status(200).send('user deleted')
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    }
}