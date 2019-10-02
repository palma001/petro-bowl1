module.exports = app => {
  const Competitors = app.controllers.CompetitorsController

  app.route('/teams/:teamId/competitors')
    .get(Competitors.getCompetitors)
    .post(Competitors.createTask)

  app.route('/teams/:teamId/competitors/:competitorsId')
    .get(Competitors.getTaskOne)
    .put(Competitors.updateTask)
    .delete(Competitors.deleteTask)
}