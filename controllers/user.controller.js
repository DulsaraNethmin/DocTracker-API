const {User} = require('../models').User
module.exports={
    async addUser(req,res){
        const {name,email,password,height,religion,gender,sexuality,age,location,active}= req.body
        try{
            const gender_uuid= await Gender.findOne({where:{gender:gender}})
            const religion_uuid=await Religion.findOne({where:{religion:religion}})
            const sexuality_uuid=await Sexuality.findOne({where:{sexuality:sexuality}})
            const data = await User.create({
                name:name,
                email:email,
                password:password,
                height:height,
                religion_uuid:religion_uuid,
                gender_uuid:gender_uuid,
                sexuality_uuid:sexuality_uuid,
                age:age,
                location:location,
                active:active,
            })
            console.log('new user added')
            res.status(200).send(data)
        }catch(e){
            console.log(e);
            res.status(500).send("error occured");
        }
    }
}