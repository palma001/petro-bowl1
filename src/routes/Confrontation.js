module.exports = app => {
  const Confrontation = app.controllers.ConfrontationController

  app.route('/events/:eventId/:phaseId/confrontation')
    .get(Confrontation.getConfrontation)
    .post(Confrontation.createTask)

  app.route('/events/:eventId/:phaseId/confrontation/:confrontationId')
    .get(Confrontation.getTaskOne)
    .put(Confrontation.updateTask)
    .delete(Confrontation.deleteTask)
}