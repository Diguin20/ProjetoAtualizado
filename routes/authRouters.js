const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get( '/', UserController.getLogin)
router.post( '/', UserController.postLogin)

router.get( '/register', UserController.getRegister)
router.post( '/register', UserController.postRegister)

router.get( '/logout', UserController.getLogout )


module.exports = router