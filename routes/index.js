const user = require('../controllers/user.controller')
const organization = require('../controllers/organization.controller');
const branch = require('../controllers/branch.controller');

module.exports=(app)=>{
//user routes
    app.post('/user/add',user.addUser)


//organization routes
    app.post('/organization/add',organization.addOrganiation)

//branch routes
    app.post('/branch/add',branch.addBranch)
    app.delete('/branch/delete',branch.deleteBranch)

}