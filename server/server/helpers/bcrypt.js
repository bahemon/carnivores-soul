const bcrypt = require('bcryptjs')

const hashedPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8))
const comparedPassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

module.exports = {
  hashedPassword,
  comparedPassword
}

