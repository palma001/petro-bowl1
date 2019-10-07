module.exports = app => {
  const Competitors = app.db.models.Competitors
  const controllers = {
    getCompetitors (req, res) {
      Competitors.findById(req.params.teamId)
        .then(result =>  {
          if (result) {
            res.json(result)
          } else {
            res.sendStatus(404).json({message: 'not record'})
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    createCompetitor (req, res) {
      Competitors.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    getOneCompetitor (req, res) {
      Competitors.findOne({
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
    updateCompetitor(req, res) {
      Competitors.update(req.body, {where: req.params})
        .then(result => res.sendStatus(200).json(result))
        .catch(error => {
          res.status(412).json({msg: error.message})
        })
    },
    deleteCompetitor (req, res) {
      Competitors.destroy({where: req.params})
        .then(result => res.sendStatus(200).json({message: 'Competitor deleted succefull'}))
        .catch(error => {
          res.status(204).json({msg: error.message})
        })
    }
  }
  return controllers
}