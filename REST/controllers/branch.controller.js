const branch = require("../models").Branch;
const { Sequelize, sequelize } = require("../models");

module.exports = {
  async addBranch(req, res) {
    try {
      var newData = await branch.create({
        name: req.body.name,
        number: req.body.number,
        street: req.body.street,
        town: req.body.town,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        organization_id: req.body.organization_id,
      });
      res.status(200).send(newData);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },

  async getAllBranches(req, res) {
    var org_id=req.query.org_id;
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid as owner_uuid ,u.name as ownerName ,u.email,u.username,u.role,b.number,b.street,b.town,b.name as branch,b.uuid as branchId,b.latitude as latitude,b.longitude as longitude
                    from  users u,branches b 
                    where b.organization_id='${org_id}' and u.role='Branch Owner' and u.branch_id=b.uuid `
      );
        res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(400).send("Server error");
    }
  },

  async deleteBranch(req, res) {
    try {
      uuid = req.query.uuid;
      var newData = await branch.destroy({ where: { uuid: uuid } });
      res.status(200).send("branch deleted");
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },
};
