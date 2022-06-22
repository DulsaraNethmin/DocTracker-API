const user = require('../controllers/user.controller')
const organization = require('../controllers/organization.controller');
const branch = require('../controllers/branch.controller');
const document = require('../controllers/document.controller');
const mail = require('../controllers/mail.controller');
const aws = require('../controllers/aws.controller');
const auth=require('../validators/auth');

module.exports=(app)=>{
//user routes
    app.post('/user/add',user.addUser)
    app.delete('/user/delete',user.deleteUser)
    app.post('/user/get/one',user.getAUser)
    app.get('/user/get/all',user.getAllUser)
    app.get('/user/get/customer',user.getAllCustomersOfABranch)
    app.put('/user/update/pic',auth,user.updateProfilePic)
    app.post('/user/verify/customer',user.getACustomer)
    app.post('/user/verify/deliverer',user.getADeliverer)
    app.get('/user/get/admin/id',user.getAdminId)


//organization routes
    app.post('/organization/add',organization.addOrganiation)
    app.get('/organization/get/all',organization.getAllOrganization)

//branch routes
    app.post('/branch/add',branch.addBranch)
    app.delete('/branch/delete',branch.deleteBranch)

//document routes
    app.post('/document/add',document.addDocument)
    app.get('/document/get/by/branch',document.getDocumenByBranch)
    app.get('/document/verify',document.verifyDoc)

//mail routes
    app.post('/mail/add',mail.addMail)
    app.delete('/mail/delete',mail.deleteMail)
    app.put('/mail/update',mail.updateMail)
    app.get('/mail/get/sent',mail.getSentMail)
    app.get('/mail/get/received',mail.getReceivedMail)

//aws routes
    app.post('/get/presignedurl',aws.getPresignedUrl)

}