const { Category } = require('../../models')

class PubCategoriesController {
  static async read(req, res, next) {
    try {
      const categories = await Category.findAll()

      res.status(200).json(categories)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = PubCategoriesController