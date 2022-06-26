const organization = require('../models').Organization
const { Sequelize, sequelize } = require("../models");

module.exports={
    async addOrganiation(req,res){
        try{
            var newData= await organization.create({
                name:req.body.name,
                owner:req.body.owner,
            })
            res.status(200).send(newData);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }

    },

    async getAllOrgUsers(req, res) {
        console.log("request come");
        console.log(req.query.organization_id);
        try {
          var [result, metadata] = await sequelize.query(
            `select b.name as b_name,b.number as b_number,b.town as b_town,b.street as b_street,u.name,u.username,u.password
                    from users u, branches b 
                    where u.branch_id=b.uuid and b.organization_id='${req.query.organization_id}'`
          );
          res.status(200).send(result);
        } catch (e) {
          console.log("an error occured " + e);
          res.status(500).send("Server error");
        }
        console.log(result)
      },

      async getOrganization(req, res) {
        console.log("request come");
        console.log(req.query.organization_id);
        try {
          var [result, metadata] = await sequelize.query(
            `select o.name as o_name,u.name,u.username,u.password, u.email, u.telephone
                    from users u, organizations o
                    where o.uuid='${req.query.organization_id}' and o.owner=u.uuid and u.role='Organization Owner' `
          );
          res.status(200).send(result);
        } catch (e) {
          console.log("an error occured " + e);
          res.status(500).send("Server error");
        }
        console.log(result)
      },

      async getBranchOwners(req, res) {
        console.log("request come");
        console.log(req.query.organization_id);
        try {
          var [result, metadata] = await sequelize.query(
            `select b.name as b_name,b.number as b_number,b.town as b_town,b.street as b_street,u.name,u.username,u.password, u.email, u.telephone, b.latitude, b.longitude
                    from users u, branches b 
                    where u.branch_id=b.uuid and b.organization_id='${req.query.organization_id}' and u.role='Branch Owner'`
          );
          res.status(200).send(result);
        } catch (e) {
          console.log("an error occured " + e);
          res.status(500).send("Server error");
        }
        console.log(result)
      },

      async getSingleBranchOwner(req, res) {
        console.log("request come");
        console.log(req.query.branch_id);
        try {
          var [result, metadata] = await sequelize.query(
            `select b.name as b_name,b.number as b_number,b.town as b_town,b.street as b_street,u.name,u.username,u.password, u.email, u.telephone,b.latitude, b.longitude
                          from users u, branches b 
                          where u.branch_id=b.uuid and b.uuid='${req.query.branch_id}' and u.role='Branch Owner'`
          );
          res.status(200).send(result);
        } catch (e) {
          console.log("an error occured " + e);
          res.status(500).send("Server error");
        }
        console.log(result);
      },

      async updateOrganization(req, res) {
        console.log("request come");
        try {
          //console.log(req.body.organization_id);
          console.log(req.body.user_id);
          // var result1 = await sequelize.query(
          //   `update organizations set name='${req.body.name}'
          //    where uuid='${req.body.organization_id}'`
          // );
          var result2 = await sequelize.query(
            `update users set name='${req.body.owner_name}',username='${req.body.username}',email='${req.body.email}',password='${req.body.password}',telephone='${req.body.telephone}'
             where uuid='${req.query.user_id}'`
          );
          res.status(200).send(result2);
        } catch (e) {
          console.log("an error occured " + e);
          res.status(500).send("Server error");
        }
      },

    // async updateOrganization(String owner_id){
    //     try{
    //         var newData= await organization.update(
    //             {owner:})
    //         res.status(200).send('created');
    //     }catch(e){
    //         console.log('an error occured '+e)
    //         res.status(500).send("server error")
    //     }
    // } 
}