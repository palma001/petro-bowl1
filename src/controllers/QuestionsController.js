module.exports = app => {
  const Questions = app.db.models.Questions
  const controllers = {
    getQuestions (req, res) {
      Questions.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    createTask (req, res) {
      Questions.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    getTaskOne (req, res) {
      Questions.findOne({
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
      Questions.update(req.body, {where: req.params})
        .then(result => res.sendStatus(200).json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    deleteTask (req, res) {
      Questions.destroy({where: req.params})
        .then(result => res.sendStatus(200).json({message: 'Task deleted succefull'}))
        .catch(error => {
          res.status(204).json({msg: error.message})
        })
    }
  }
  return controllers
}