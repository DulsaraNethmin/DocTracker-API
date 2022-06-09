const db=require('../models')

const Document=db.documents

//add Document
const addDocument =async (req,res)=>{
let info={
    doc_name:req.body.doc_name,
    type:req.body.type,
    date:req.body.date,
    department_id:req.body.department_id
}
    const document=await Document.create(info)
    res.status(200).send(document)
}
//to get all documents 
const getallDocument=async(req,res)=>{
    let documents=await Document.findAll({})
    res.status(200).send(documents)
}

module.exports={addDocument,getallDocument}