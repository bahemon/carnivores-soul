const express = require('express')
const CategoryController = require('../../Controllers/admin/CategoryController')
const router = express.Router()

router.post('/categories', CategoryController.create)
router.get('/categories', CategoryController.read)
router.get('/categories/:id', CategoryController.readById)
router.put('/categories/:id', CategoryController.updateById)
router.delete('/categories/:id', CategoryController.deleteById)

module.exports = router