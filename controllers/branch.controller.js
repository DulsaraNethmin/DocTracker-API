const branch = require('../models').Branch

module.exports={
    async addBranch(req,res){
        try{
            var newdata= await branch.create({
                name:req.body.name,
                number:req.body.number,
                town:req.body.town,
                street:req.body.street,
                organization_id:req.body.organization_id,
            })
            res.status(200).send('new branch created')
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    }
}