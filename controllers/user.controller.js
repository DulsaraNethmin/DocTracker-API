const User= require('../models').User;


module.exports={
    async addUser(req,res){
        try{
            var newData=await User.create({
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
    }
}