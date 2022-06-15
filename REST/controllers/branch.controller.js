const branch = require('../models').Branch

module.exports={
    async addBranch(req,res){
        try{
            var newData= await branch.create({
                name:req.body.name,
                number:req.body.number,
                town:req.body.town,
                street:req.body.street,
                organization_id:req.body.organization_id,
            })
            res.status(200).send(newData)
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    },

    async getAllBranches(req, res) {
        console.log("request come");
        try {
          var [result, metadata] = await sequelize.query(
            `select u.uuid ,u.name as ownerName ,u.email,u.username,u.role,,b.number,b.sreet,b.town,b.name as branch,b.uuid as branchId,u.image_url as image_url
                    from users u, branches b 
                    where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}'`
          );
          console.log(result)
          res.status(200).send(result);
        } catch (e) {
          console.log("an error occured " + e);
          res.status(500).send("Server error");
        }
        
      },

    async deleteBranch(req,res){
        try{
            uuid=req.query.uuid
            var newData=await branch.destroy({where:{uuid:uuid}})
            res.status(200).send('branch deleted')
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    }
}