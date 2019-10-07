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
    createEvent (req, res) {
      Events.create(req.body)
      .then(result => res.json(req.body))
      .catch(error => {
        res.status(412).json({msg: error.message})})
    },
    getOneEvent (req, res) {
      Events.findOne({
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
    updateEvent(req, res) {
      Events.findById(req.params.id)
       .then(result => {
          if (result) {
            
            Events.update(req.body, {where: req.params})
              .then(result => res.json(req.body))
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
    },
    deleteEvent (req, res) {
      Events.findById(req.params.id)
      .then(result =>  {
        if (result) { 
          Events.destroy({where: req.params})
          .then(result => res.sendStatus(200).json({message: 'Event deleted succefull'}))
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