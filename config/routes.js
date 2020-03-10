const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/UsersController')
const detailsController = require('../app/controllers/DetailsController')

const { authenticateUser } = require('../app/middlewares/authentication')


router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)



router.get('/details', authenticateUser, detailsController.list)
router.get('/details/:id',authenticateUser,  detailsController.show)
router.post('/details', authenticateUser,  detailsController.create)
router.put('/details/:id',authenticateUser, detailsController.update)
router.delete('/details/:id', authenticateUser, detailsController.destroy)



module.exports = router