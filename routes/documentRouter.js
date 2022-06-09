const documentController=require('../controllers/documentcontroller')

const router=require('express').Router()

router.post('/addDocuments',documentController.addDocument)
router.get('/getallDocuments',documentController.getallDocument);


module.exports=router
