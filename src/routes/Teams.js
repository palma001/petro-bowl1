module.exports = app => {
	const Teams = app.controllers.TeamsController

	app.route('/teams')
		.get(Teams.getTeams)
		.post(Teams.createTask)

	app.route('/teams/:teamId')
		.get(Teams.getTaskOne)
		.put(Teams.updateTask)
		.delete(Teams.deleteTask)
}