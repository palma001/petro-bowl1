module.exports = app => {
  var jwt = require('jsonwebtoken')
  const middleware = {
    admin: function (req, res, next) {
      let token = req.headers['authorization']
      jwt.verify (token, 'my_secret_token', (err, data) => {
        console.log(data['data']['rol'])
        if (err) {
          res.sendStatus(401).json({
            error: true,
            message: 'Unauthorized'
          })
        } else {
          next()
        } 
      })
    }
  }
  return middleware
}