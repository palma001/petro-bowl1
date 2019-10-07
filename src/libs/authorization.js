module.exports = app => {
  var jwt = require('jsonwebtoken')
  const middleware = {
    auth: function (req, res, next) {
      let token = req.headers['authorization']
      jwt.verify (token, 'Authorization', (err, data) => {
        if (err) {
          res.sendStatus(401).json({
            error: true,
            message: 'Unauthorized'
          })
        }
        if (!data['data']) {
          res.sendStatus(401).json({
            error: true,
            message: 'Unauthorized'
          })
        }
        next()
      })
    }
  }
  return middleware
}