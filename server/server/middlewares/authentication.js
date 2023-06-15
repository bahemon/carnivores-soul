const { decodedToken } = require("../helpers/jwt")
const { User } = require('../models')

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers

    if (!access_token) {
      throw { code: 401, message: 'Invalid token' }
    }

    const payload = decodedToken(access_token)
    const loggedInUser = await User.findByPk(payload.id)

    if (!loggedInUser) {
      throw { code: 401, message: 'Invalid Token' }
    }

    req.user = {
      id: loggedInUser.id,
      email: loggedInUser.email,
      role: loggedInUser.role
    }

    next()
  } catch (err) {
    console.log(err)
    next(err)
  }
}

module.exports = authentication



