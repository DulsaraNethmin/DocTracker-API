const user= require('../models').User;


module.exports={
    async addUser(req,res){
        try{
            var newData=await user.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                telephone:req.body.telephone,
                role:req.body.role,
                branch_id:req.body.branch_id,
            })
            res.status(200).send("new user created")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async deleteUser(req,res){
        try{
            uuid=req.query.uuid
            var newData=await user.destroy({where:{uuid:uuid}})
            res.status(200).send('user deleted')
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send("server error")
        }
    }
}