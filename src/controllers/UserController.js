module.exports = app => {
  var jwt = require('jsonwebtoken')
  const Users = app.db.models.Users
  const controllers = {

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
        { 
          data: userVerified.dataValues.id
        },
        'Authorization',
        {
          expiresIn: 60 * 60 * 24
        },
        {
          algorithm: 'HS256'
        } 
      )
      return res.json({token, data: userVerified.dataValues.id})
    },
    getUsers (req, res) {
      Users.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    async createUser (req, res) {
      req.body.password =  await Users.encryptPassword(req.body.password)
      Users.create(req.body)
      .then(result => {res.json(req.body)})
      .catch(error => {
      res.status(412).json({msg: error.message})})
    },
    getOneUser (req, res) {
      Users.findOne({
        where: req.params
      })
        .then(result => {
          if (result) {
            res.json(result)
          } else {
            res.sendStatus(404)
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },

    async updateUser(req, res) {
      const user = await Users.findById(req.params.id)
      if (user) {
        res.json(req.body)
        req.body.password = await Users.encryptPassword(req.body.password)
        const users = await Users.update(req.body, {where: req.params})
        delete req.body.password
      } else {
        res.sendStatus(404)
      }
      
    },
    deleteUser (req, res) {
      Users.findById(req.params.id)
      .then(result =>  {
          if (result) { 
            Users.destroy({where: req.params})
            .then(result => res.sendStatus(200).json({message: 'Users deleted succefull'}))
            .catch(error => {
              res.status(412).json({msg: error.message})
            })           
          } else {
            res.sendStatus(404)
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    }
  }
  return controllers
}