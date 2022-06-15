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
            `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
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