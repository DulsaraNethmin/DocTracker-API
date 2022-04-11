const user = require('../controllers/user.controller')
const organization = require('../controllers/organization.controller');
const branch = require('../controllers/branch.controller');
const document = require('../controllers/document.controller');

module.exports=(app)=>{
//user routes
    app.post('/user/add',user.addUser)
    app.delete('/user/delete',user.deleteUser)
    app.post('/user/get/one',user.getAUser)


//organization routes
    app.post('/organization/add',organization.addOrganiation)

//branch routes
    app.post('/branch/add',branch.addBranch)
    app.delete('/branch/delete',branch.deleteBranch)

//document routes
    app.post('/document/add',document.addDocument)

}