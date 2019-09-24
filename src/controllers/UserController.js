module.exports = app => {
  var jwt = require('jsonwebtoken')
  const Users = app.db.models.Users
  const controllers = {
    createUser (req, res) {
      Users.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    authorization (req, res) {
      const { user, password } = req.body
      Users.findOne({
        where: {
          user: user,
          password: password
        }
      })
        .then(result => {
          let exp = Math.floor(Date.now() / 1000) + (60 * 60)
          if (result) {
            const token = jwt.sign(
              {
                data: result.dataValues,
                exp: exp
              },
              'my_secret_token'
            )
            let response = {
              token: token,
              exp: exp
            }
            res.json(response)
          } else {
            res.status(401).json({ error: true, message: 'credentials invalid'})
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    }
  }
  return controllers
}