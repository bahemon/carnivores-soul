const { Product, Image, Category, User, sequelize } = require('../../models')

class ProductController {
  static async create(req, res, next) {
    const t = await sequelize.transaction()
    try {
      let { name, description, price, mainImg, categoryId, images } = req.body

      console.log(
        { name, description, price, mainImg, categoryId, images }
      )

      const product = await Product.create({
        name,
        description,
        price,
        mainImg,
        categoryId,
        authorId: req.user.id
      }, { transaction: t })

      if (!images) {
        throw { code: 400, message: 'Additional image is required' }
      }

      images = images.map(image => {
        console.log(images, "<><><><><><><><><><><><><><>>")

        image.productId = product.id
        return image
      })

      await Image.bulkCreate(images, { transaction: t, validate: true })

      await t.commit()

      res.status(201).json({
        message: `${name} added to product list`
      })
    } catch (err) {
      t.rollback()
      next(err)
    }
  }

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

  static async updateById(req, res, next) {
    try {
      const { name, description, price, mainImg, categoryId } = req.body
      const { id } = req.params

      const productToUpdate = await Product.findByPk(id)

      if (!productToUpdate) {
        throw { code: 404, message: 'Product not found' }
      }

      await productToUpdate.update({
        name,
        description,
        price,
        mainImg,
        categoryId,
        authorId: req.user.id
      })

      res.status(200).json({
        message: `Product with id ${id} has been updated`
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteById(req, res, next) {
    try {
      const { id } = req.params
      const productToDelete = await Product.findByPk(id)

      if (!productToDelete) {
        throw { code: 404, message: 'Product not found' }
      }

      await productToDelete.destroy()

      res.status(200).json({
        message: `Product with id ${id} has been deleted`
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController