//const organization = require('.../controller/organization.controller.js');
const organizationController = require('../controllers/organization.controller')
const router = require('express').Router()

router.post('/addOrg', organizationController.addOrganiation)

router.get('/getAllOrg', organizationController.getAllOrganization)

module.exports = router;