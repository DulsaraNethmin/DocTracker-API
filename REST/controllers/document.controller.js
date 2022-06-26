const { sequelize } = require('../models');

const document = require('../models').Document
const document_user = require('../models').DocumentUser

module.exports={
    async getDocumenByBranch(req,res){
        try{
            var branch= req.query.branch_id;
            var [result,metadata] = await sequelize.query(
                `select d.uuid as doc_id,d.doc_name as doc,d.type as doc_type,du.customer_id,u.name as customer_name,b.uuid as branch_id,b.name as branch
                 from documents d, branches b,users u,documentusers du 
                 where d.branch_id = b.uuid and b.uuid='${branch}' and du.doc_id=d.uuid and du.is_current_user=${true} and du.customer_id = u.uuid`
                 )
            console.log(metadata)
            res.status(200).send(result);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },
    async getDocumenByBranchWeb(req,res){
        try{
            var branch= req.query.branch_id;
            var [result,metadata] = await sequelize.query(
                `select d.uuid as doc_id,d.doc_name as doc,d.type as doc_type,d.date as date,d.branch_id as branch_id
                 from documents d 
                 where d.branch_id ='${branch}'`
                 )
            console.log(metadata)
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
            res.status(200);
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },

    async verifyDoc(req,res){
        try{
            var doc_id=req.query.doc_id;
            //var customer_id=req.query.customer_id;
            var [result,metadata]=await sequelize.query(`
                select du.doc_id,d.doc_name,d.type,b.uuid as branch_id,b.name as branch,du.customer_id as current_user_id,u.name as current_user_name
                from documentusers du, documents d, branches b,users u
                where du.doc_id='${doc_id}' and du.is_current_user=1 and du.doc_id=d.uuid and d.branch_id=b.uuid and du.customer_id=u.uuid
            `)
            console.log(result);
            if(result.length==1)
                res.status(200).send(result)
            else
                res.status(400).send("Doc Not verified.")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    },
    async verifyDocweb(req,res){
        try{
            var doc_id=req.query.doc_id;
            //var customer_id=req.query.customer_id;
            var [result,metadata]=await sequelize.query(`
                select d.doc_name,d.type
                from  documents d
                where d.uuid='${doc_id}' 
            `)
            console.log(result);
            if(result.length==1)
                res.status(200).send(result)
            else
                res.status(400).send("Doc Not verified.")
        }catch(e){
            console.log('an error occured '+e)
            res.status(500).send('Server error')
        }
    }
}