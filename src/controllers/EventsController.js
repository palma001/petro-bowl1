module.exports = app => {
  const Events = app.db.models.Events
  const controllers = {
    getEvents (req, res) {
      Events.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    createTask (req, res) {
      Events.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    getTaskOne (req, res) {
      Events.findOne({
        where: req.params
      })
        .then(result => {
          if (result) {
            res.json(result)
          } else {
            res.sendStatus(204)
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    updateTask(req, res) {
      Events.update(req.body, {where: req.params})
        .then(result => res.sendStatus(200).json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    deleteTask (req, res) {
      Events.destroy({where: req.params})
        .then(result => res.sendStatus(200).json({message: 'Task deleted succefull'}))
        .catch(error => {
          res.status(204).json({msg: error.message})
        })
    }
  }
  return controllers
}