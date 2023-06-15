'use strict';
const {
  Model
} = require('sequelize');
const slugify = require('../helpers/slugify');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Image, {
        foreignKey: 'productId'
      })
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      })
      Product.belongsTo(models.User, {
        foreignKey: 'authorId'
      })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Product name cannot be empty'
        },
        notNull: {
          msg: 'Product name cannot be empty'
        }
      }
    },
    slug: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Product description name cannot be empty'
        },
        notNull: {
          msg: 'Product description name cannot be empty'
        }
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Product price cannot be empty'
        },
        notNull: {
          msg: 'Product price cannot be empty'
        },
        min: {
          args: [100000],
          msg: 'Product price is must above Rp. 100.000,00'
        }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Product image cannot be empty'
        },
        notNull: {
          msg: 'Product image cannot be empty'
        }
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.beforeCreate((Product, options) => {
    Product.slug = slugify(Product.name)
  })

  return Product;
};