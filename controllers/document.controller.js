const { sequelize } = require('../models');

const document = require('../models').Document

module.exports={
    async getDocumenByBranch(req,res){
        try{
            var branch= req.query.branch_id;
            var [result,metadata] = await sequelize.query(
                `select d.uuid as doc_id,d.doc_name as doc,d.type as doc_type,du.customer_id,u.name as customer_name,b.uuid as branch_id,b.name as branch
                 from documents d, branches b,users u,documentusers du 
                 where d.branch_id = b.uuid and b.uuid='${branch}' and du.doc_id=d.uuid and du.is_current_user=${true} and du.customer_id = u.uuid`
                 )
            console.log(result)
            res.status(200).send(result);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },


    async addDocument(req,res){
        try{
            var newData=await document.create({
                doc_name:req.body.doc_name,
                type:req.body.type,
                date:req.body.date,
                branch_id:req.body.branch_id,
            })
            res.status(200).send("new document added")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },
}