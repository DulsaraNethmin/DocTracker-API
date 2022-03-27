const document = require('../models').Document

module.exports={
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