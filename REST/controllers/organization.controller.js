const organization = require('../models').Organization

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