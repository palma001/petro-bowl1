module.exports = app => {
	const Teams = app.controllers.TeamsController

	app.route('/teams')
		.get(Teams.getTeams)
		.post(Teams.createTeam)

	app.route('/teams/:id')
		.get(Teams.getOneTeam)
		.put(Teams.updateTeam)
		.delete(Teams.deleteTeam)
}