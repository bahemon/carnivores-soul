const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')
const errorHandler = require('../middlewares/errorHandler')
const users = require('./admin/users')
const products = require('./admin/products')
const categories = require('./admin/categories')
const pubProducts = require('./customer/products')
const pubCategories = require('./customer/categories')

router.use(pubProducts)
router.use(pubCategories)

router.use(users)
router.use(authentication)
router.use(products)
router.use(categories)
router.use(errorHandler)

module.exports = router