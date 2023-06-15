const { Category } = require('../../models')

class CategoryController {
  static async create(req, res, next) {
    try {
      const { name } = req.body

      await Category.create({
        name
      })

      res.status(201).json({
        message: `${name} added to category list`
      })

    } catch (err) {
      next(err)
    }
  }

  static async read(req, res, next) {
    try {
      const categories = await Category.findAll()

      res.status(200).json(categories)
    } catch (err) {
      next(err)
    }
  }

  static async readById(req, res, next) {
    try {
      const { id } = req.params
      const category = await Category.findByPk(id)

      if (!category) {
        throw { code: 404, message: 'Category not found' }
      }

      res.status(200).json(category)
    } catch (err) {
      next(err)
    }
  }

  static async updateById(req, res, next) {
    try {
      const { id } = req.params
      const { name } = req.body

      const categoryToUpdate = await Category.findByPk(id)

      if (!categoryToUpdate) {
        throw { code: 404, message: 'Category not found' }
      }

      await categoryToUpdate.update({
        name
      })

      res.status(200).json({
        message: `Category with id ${id} has been updated`
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteById(req, res, next) {
    try {
      const { id } = req.params
      const categoryToDelete = await Category.findByPk(id)

      if (!categoryToDelete) {
        throw { code: 404, message: 'Category not found' }
      }

      await categoryToDelete.destroy()

      res.status(200).json({
        message: `Category with id ${id} has been deleted`
      })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = CategoryController