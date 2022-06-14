const { sequelize } = require('../models');

const delivery = require('../models').Delivery;
const job = require('../models').Job;

module.exports={
    async addNewdeliveries(req,res){
        var deliveries=req.body.deliveries;
        console.log(deliveries);
        res.send("data get")
    }
}