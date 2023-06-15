const { comparedPassword } = require('../../helpers/bcrypt')
const { generateToken } = require('../../helpers/jwt')
const { User } = require('../../models')

class UserController {
  static async register(req, res, next) {
    try {
      const {
        username,
        email,
        password,
        phoneNumber,
        Address
      } = req.body

      if (!email) {
        throw { code: 400, message: 'Email is required' }
      }

      if (!password) {
        throw { code: 400, message: 'Password is required' }
      }

      const newUser = await User.create({
        username,
        email,
        password,
        role: 'Admin',
        phoneNumber,
        Address
      })

      res.status(201).json({
        id: newUser.id,
        email: newUser.email
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const {
        email,
        password,
      } = req.body

      if (!email) {
        throw { code: 400, message: 'Email is required' }
      }

      if (!password) {
        throw { code: 400, message: 'Password is required' }
      }

      const findedUser = await User.findOne({
        where: { email }
      })

      if (!findedUser) {
        throw { code: 401, message: 'Invalid email or password' }
      }

      const isValidLogin = comparedPassword(password, findedUser.password)

      if (!isValidLogin) {
        throw { code: 401, message: 'Invalid email or password' }
      }

      const access_token = generateToken({
        id: findedUser.id
      })

      res.status(200).json({
        access_token
      })

    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController