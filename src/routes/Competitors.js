module.exports = app => {
  const Competitors = app.controllers.CompetitorsController

  app.route('/teams/:teamId/competitors')
    .get(Competitors.getCompetitors)
    .post(Competitors.createCompetitor)

  app.route('/teams/:teamId/competitors/:competitorsId')
    .get(Competitors.getOneCompetitor)
    .put(Competitors.updateCompetitor)
    .delete(Competitors.deleteCompetitor)
}