const jwt = require('jsonwebtoken')

const generateToken = (payload) => jwt.sign(payload, process.env.SECRET)
const decodedToken = (access_token) => jwt.verify(access_token, process.env.SECRET)

module.exports = {
  generateToken,
  decodedToken
}