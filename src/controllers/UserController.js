module.exports = app => {
  var jwt = require('jsonwebtoken')
  const Users = app.db.models.Users
  const controllers = {
    async createUser (req, res) {
      req.body.password = await Users.encryptPassword(req.body.password)
      let user = await Users.create(req.body)
      delete user.password
      return res.json(user)
    },
    async authorization (req, res) {
      const { user, password } = req.body
      let userVerified = await Users.findOne({
        where: {
          user: user
        }
      })
      if (!userVerified) {
        return res.status(401).send('Users not register')
      }
      const validPassword = await Users.validatePassword(password, userVerified.password)
      if (!validPassword) {
        return res.status(401).json({message: 'password invalid', token: null})
      }
      const token = jwt.sign(
        { data: userVerified.dataValues },
        'my_secret_token',
        { expiresIn: 60 * 60 * 24 }
      )
      return res.json({message: 'session started', token})
    }
  }
  return controllers
}