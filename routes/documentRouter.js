const documentController=require('../controllers/documentcontroller')

const router=require('express').Router()

router.post('/addDocuments',documentController.addProdcut)


module.exports=router