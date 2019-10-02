const express = require('express')
const cors = require('cors')
var swaggerUi = require('swagger-ui-express')
var swaggerDoc = require('./swagger')
module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3000)
  app.set('json spaces', 4)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  // middlewares
  app.use(express.json())
  app.use(cors())
  app.use((req, res, next) => {
    // delete req.body.id;
    next()
  })

}