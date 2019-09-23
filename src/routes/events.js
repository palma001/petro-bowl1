module.exports = app => {
  const Events = app.controllers.EventsController

  app.route('/events')
    .get(Events.getEvents)
    .post(Events.createTask)

  app.route('/events/:id')
    .get(Events.getTaskOne)
    .put(Events.updateTask)
    .delete(Events.deleteTask)
}