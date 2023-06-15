const { Product, Image, Category, User } = require('../../models')

class PubProductsController {
  static async read(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [Image, Category, {
          model: User,
          attributes: ['username']
        }]
      })

      res.status(200).json(products)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async readBySlug(req, res, next) {
    try {
      const { slug } = req.params
      const product = await Product.findOne({
        where: { slug },
        include: [Image, Category, {
          model: User,
          attributes: ['username']
        }]
      })

      if (!product) {
        throw { code: 404, message: 'Product not found' }
      }

      res.status(200).json(product)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = PubProductsController