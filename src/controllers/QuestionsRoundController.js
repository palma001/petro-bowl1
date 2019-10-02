module.exports = app => {
	const QuestionsRound = app.db.models.QuestionsRound
	const controllers ={ 
		getQuestionsRound(req, res){
			QuestionsRound.findAll({})
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message})
				})
		},
		getTaskOne (req, res) {
			QuestionsRound.findOne({
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
		createTask(req, res) {
			QuestionsRound.create(req.body)
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message})
				})

		},
		updateTask(req, res) {
			QuestionsRound.update(req.body, {where: req.params})
				.then(result => res.sendStatus(200).json(result))
				.catch(error => {res.status(204).json({msg: errer.message})
			})

		},
		deleteTask (req, res) {
			QuestionsRound.destroy({where: req.params})
				.then(result => res.sendStatus(200).json({message: 'Task deleted succefull'}))
				.catch(error => { 
					res.status(204).json({msg: error.message})
				})
		}
	}
	return controllers
}