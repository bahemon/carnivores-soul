const express = require('express')
const PubCategoriesController = require('../../Controllers/customer/PubCategoriesController')
const router = express.Router()

router.get('/pub/categories', PubCategoriesController.read)

module.exports = router