const express = require('express')
const ProductController = require('../../Controllers/admin/ProductController')
const router = express.Router()

router.post('/products', ProductController.create)
router.get('/products', ProductController.read)
router.get('/products/:slug', ProductController.readBySlug)
router.put('/products/:id', ProductController.updateById)
router.delete('/products/:id', ProductController.deleteById)

module.exports = router