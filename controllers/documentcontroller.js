const { default: ModelManager } = require('sequelize/types/model-manager')
const db=require('../models')

const Document=db.documents

//add Document
const addProdcut =async (req,res)=>{
let info={
    doc_name:req.body.doc_name,
    type:req.body.type,
    date:req.body.date,
    department_id:req.body.department_id
}
    const document=await Document.create(info)
    res.status(200).send(document)
}


module.exports={addProdcut}