const express = require('express')
const PubProductsController = require('../../Controllers/customer/PubProductsController')
const router = express.Router()

router.get('/pub/products', PubProductsController.read)
router.get('/pub/products/:slug', PubProductsController.readBySlug)

module.exports = router