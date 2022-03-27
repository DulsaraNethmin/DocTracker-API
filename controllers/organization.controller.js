const Organization = require('../models').Organization

module.exports={
    async addOrganiation(req,res){
        try{
            var newData= await Organization.create({
                name:req.body.name
            })
            res.status(200).send('created');
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }

    }
}