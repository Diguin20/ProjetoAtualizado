const express = require('express')
const router = express.Router()
const TransactionController = require('../controllers/TransactionController')
const checkAuth = require( '../helpers/auth' ).checkAuth

router.get( '/dashboard', checkAuth, TransactionController.getHome)

router.get( '/incomes', checkAuth, TransactionController.getIncomes)
router.get( '/expenses', checkAuth, TransactionController.getExpenses)

router.get( '/create', checkAuth, TransactionController.getCreate)
router.post( '/create', checkAuth, TransactionController.postCreate)

router.get( '/search', checkAuth, TransactionController.getDetails )

router.get( '/edit/:id', checkAuth, TransactionController.getEdit)
router.post( '/edit/:id', checkAuth, TransactionController.postEdit)

router.post( '/delete/:id', checkAuth, TransactionController.postDelete)

router.get( '/historic', checkAuth, TransactionController.getHistoric)


module.exports = router