const { sequelize } = require('../models');

const document = require('../models').Document

module.exports={
    async getDocumenByBranch(req,res){
        try{
            var branch= req.query.branch;
            var [result,metadata] = await sequelize.query(`select d.uuid as Doc_id,d.doc_name as Doc, b.name as Branch from documents d, branches b where d.branch_id = b.uuid and b.name='${branch}'`)
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