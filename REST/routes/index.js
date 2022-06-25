const user = require('../controllers/user.controller')
const organization = require('../controllers/organization.controller');
const branch = require('../controllers/branch.controller');
const document = require('../controllers/document.controller');
const mail = require('../controllers/mail.controller');
const aws = require('../controllers/aws.controller');
const job = require('../controllers/job.controller');
const auth=require('../validators/auth');

module.exports=(app)=>{
//user routes
    app.post('/user/add',user.addUser)
    app.delete('/user/delete',user.deleteUser)
    app.post('/user/get/one',user.getAUser)
    app.get('/user/get/single',user.getOneUser)
    app.post('/user/get/oneBrOwner',user.getABranchOwner)
    app.post('/user/get/oneOrgOwner',user.getAOrgOwner)
    app.get('/user/get/all',user.getAllUser)
    app.get('/user/get/customer',user.getAllCustomersOfABranch)
    app.put('/user/update/pic',auth,user.updateProfilePic)
    app.post('/user/verify/customer',user.getACustomer)
    app.post('/user/verify/deliverer',user.getADeliverer)

//organization routes
    app.post('/organization/add',organization.addOrganiation)
    app.get('/organization/get/all',organization.getAllOrgUsers)
    app.get('/organization/get/branchowners',organization.getBranchOwners)

//branch routesgetAllBranches
    app.post('/branch/add',branch.addBranch)
    app.delete('/branch/delete',branch.deleteBranch)
    app.get('/branch/get/all',branch.getAllBranches)

//document routes
    app.post('/document/add',document.addDocument)
    app.get('/document/get/by/branch',auth,document.getDocumenByBranch)
    app.get('/document/verify',document.verifyDoc)

//job routes
    app.post('/job/add/deliveries',job.addNewdeliveries)
    app.post('/job/create/new',job.createNewJob)
    app.get('/job/get/all',auth,job.getAllJobs)
    app.get('/job/verify',auth,job.verifyNewdelivery)
    app.get('/job/get/all/my',auth,job.getAllMyJobs)
    app.put('/job/update/pending',auth,job.updateJobStateToPending)

//mail routes
    app.post('/mail/add',mail.addMail)
    app.delete('/mail/delete',mail.deleteMail)
    app.put('/mail/update',mail.updateMail)
    app.get('/mail/get/sent',mail.getSentMail)
    app.get('/mail/get/received',mail.getReceivedMail)

//aws routes
    app.post('/get/presignedurl',aws.getPresignedUrl)

}