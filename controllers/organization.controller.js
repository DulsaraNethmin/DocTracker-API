const organization = require('../models').Organization

module.exports={
    async addOrganiation(req,res){
        try{
            var newData= await organization.create({
                name:req.body.name,
                owner:req.body.owner,
            })
            res.status(200).send('created');
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }

    },

    async getAllOrganization(req,res){
        // console.log('request come');
        // try{
        //     var [result,metadata]= await sequelize.query(
        //         `select *
        //         from organization`
        //     )
        //     res.status(200).send(result);
        // }catch(e){
        //     console.log('an error occured '+e)
        //     res.status(500).send('Server error')
        // }

        let orgs = await organization.findAll({});
        res.status(200).send(orgs);
    },   
}