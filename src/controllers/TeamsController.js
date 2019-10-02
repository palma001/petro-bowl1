module.exports = app => {
	const Teams = app.db.models.Teams
	const controllers ={
		getTeams(req, res){
			Teams.findAll({})
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message})
				})
		},
		createTask(req, res){
			Teams.create(req.body)
				.then(result => res.json(result))
				.catch(error => {res.status(412).json({msg: error.message})
				})
		},
		getTaskOne(req, res){
			Teams.findOne({where: res.params})
				.then(result => {
					if (result){
						res.json(result)

					}else{res.sendstatus(204)}	

				})
				.catch(error => { res.status(412).json({msg: res.message})
				})	
		},
		updateTask(req, res) {
			Teams.update(req.body, {where: req.params})
				.then(result => res.json(result))
				.catch(error => {res.status(204).json({msg: error.message})
			})
		},
		deleteTask(req, res){
			Teams.destroy(req.params, {where: req.params})
				.then(result => res.sendStatus(200).json({message: 'Task delete succefull'}))
				.catch(error => {res.status(204).json({msg: error.message})})
		}

	}
	return controllers
}