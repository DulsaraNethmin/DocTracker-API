const user = require('../controllers/user.controller')
const organization = require('../controllers/organization.controller');

module.exports=(app)=>{
//user routes
    //app.post('/user/add',user.addUser)


//organization rotes
    app.post('/organization/add',organization.addOrganiation)


}