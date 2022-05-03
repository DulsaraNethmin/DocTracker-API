const { sequelize } = require('../models');

const mail = require('../models').Mail

module.exports={
    async addMail(req,res){
        try{
            console.log(req.body);
            const {from,to,time,head,body}= req.body;
            var newData=await mail.create({
                from:from,
                to:to,
                time:time,
                seen:false,
                head:head,
                body:body
            });
            var [result,metadata]=await sequelize.query(
                `select m.uuid as mail_id, fu.uuid as from_id,fu.name as from_name,tu.uuid as to_id,tu.name as to_name,m.head,m.body,m.seen,m.time
                from mails m, users fu,users tu
                where m.uuid='${newData["uuid"]}' and m.from=fu.uuid and m.to=tu.uuid`
            );
            res.status(200).send(result)
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async getAMail(String ){
        const user_id= req.query.uuid;
        const mail_id = req.q
        try{
            //m.uuid as mail_id, fu.uuid as from,fu.name as from_name,tu.uuid as to,tu.name as to_name
            var [result,metadata]=await sequelize.query(
                `select m.uuid as mail_id, fu.uuid as from_id,fu.name as from_name,tu.uuid as to_id,tu.name as to_name,m.head,m.body,m.seen,m.time
                from mails m, users fu,users tu
                where m.from='${user_id}' and m.from=fu.uuid and m.to=tu.uuid`
            );
            res.status(200).send(result)
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async deleteMail(req,res){
        try{
            const uuid= req.query.uuid;
            var newData=await mail.destroy({
                where:{
                    uuid:uuid
                }
            })
            res.status(200).send("new mail deleted")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async updateMail(req,res){
        const uuid= req.query.uuid;
        try{
            var newData=await mail.update({seen:true},{
                where:{
                    uuid:uuid
                }
            })
            res.status(200).send("mail was updated")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async getSentMail(req,res){
        const user_id= req.query.uuid;
        try{
            //m.uuid as mail_id, fu.uuid as from,fu.name as from_name,tu.uuid as to,tu.name as to_name
            var [result,metadata]=await sequelize.query(
                `select m.uuid as mail_id, fu.uuid as from_id,fu.name as from_name,tu.uuid as to_id,tu.name as to_name,m.head,m.body,m.seen,m.time
                from mails m, users fu,users tu
                where m.from='${user_id}' and m.from=fu.uuid and m.to=tu.uuid`
            );
            res.status(200).send(result)
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async getReceivedMail(req,res){
        const user_id= req.query.uuid;
        try{
            var [result,metadata]=await sequelize.query(
                `select m.uuid as mail_id, fu.uuid as from_id,fu.name as from_name,tu.uuid as to_id,tu.name as to_name,m.head,m.body,m.seen,m.time
                from mails m, users fu,users tu
                where m.to='${user_id}' and m.from=fu.uuid and m.to=tu.uuid`
            );
            res.status(200).send(result)
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    // async addDocument(req,res){
    //     try{
    //         var newData=await document.create({
    //             doc_name:req.body.doc_name,
    //             type:req.body.type,
    //             date:req.body.date,
    //             branch_id:req.body.branch_id,
    //         })
    //         res.status(200).send("new document added")
    //     }catch(e){
    //         console.log('an error occured '+e)
    //         res.status(500).send('Server error')
    //     }
    // },
}