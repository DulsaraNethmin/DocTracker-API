const { redirect } = require("express/lib/response");
const { Sequelize, sequelize } = require("../models");
const user = require("../models").User;
const organization = require("../models").Organization;
const jwt = require("jsonwebtoken");
//require('dotenv').config();

module.exports = {
  async getAllUser(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}' and u.role='Customer'`
      );
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getAUser(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
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

  async getACustomer(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and u.role='Customer'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getADeliverer(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Deliverer'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getABranchOwner(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
              from users u, branches b 
              where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Branch Owner'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getAOrgOwner(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
            from users u, branches b 
            where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Organization Owner'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async addUser(req, res) {
    try {
      var newData = await user.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        telephone: req.body.telephone,
        role: req.body.role,
        branch_id: req.body.branch_id,
      });
      var org_id=req.body.org_id;
      console.log(newData.dataValues.uuid);
     // var result=await organization.update({owner:newData.dataValues.uuid},{where:{uuid:org_id}});
     var result = await sequelize.query(
      `update organizations set owner='${newData.dataValues.uuid}' where uuid='${org_id}'`
     );
      res.status(200).send(newData.dataValues);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getAllCustomersOfABranch(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}' and u.role='Customer'`
      );
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async deleteUser(req, res) {
    try {
      uuid = req.query.uuid;
      var newData = await user.destroy({ where: { uuid: uuid } });
      res.status(200).send("user deleted");
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },

  async updateProfilePic(req, res) {
    try {
      uuid = req.query.uuid;
      url = req.body.url;
      var newData = await user.update(
        { image_url: url },
        {
          where: {
            uuid: uuid,
          },
        }
      );

      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where  u.branch_id=b.uuid and u.uuid='${uuid}'`
      );
      console.log(result);
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },
};
