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
		createTeam(req, res){
			Teams.create(req.body)
				.then(result => res.json(result))
				.catch(error => {res.status(412).json({msg: error.message})
				})
		},
		getOneTeam(req, res){
			Teams.findOne({where: req.params})
				.then(result => {
					if (result){
						res.json(result)

					} else {res.sendStatus(404)}	

				})
				.catch(error => { res.status(412).json({msg: error.message})
				})	
		},
		updateTeam(req, res) {
			Teams.findById(req.params.id)
			.then(result => {
				if(result) {
					Teams.update(req.body, {where: req.params})
					.then(result => res.json(req.body))
					.catch(error => {res.status(412).json({msg: error.message})
					})
				} else{res.sendStatus(404)}
			})
			.catch(error => {res.status(412).json({msg: error.message})})
		},
		deleteTeam(req, res){
			Teams.findById(req.params.id)
			.then(result => {
				if(result){
					Teams.destroy({where: req.params})
				 	.then(result => res.sendStatus(200).json({message: 'Team delete succefull'}))
					.catch(error => {res.sendStatus(412).json({msg: error.message})})
				}else{res.sendStatus(404)}
			})
			.catch(error => {res.sendStatus(412).json({msg: error.message})})

		}

	}
	return controllers
}