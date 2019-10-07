module.exports = app => {
  const Events = app.controllers.EventsController

  app.route('/events')
    .get(Events.getEvents)
    .post(Events.createEvent)

  app.route('/events/:id')
    .get(Events.getOneEvent)
    .put(Events.updateEvent)
    .delete(Events.deleteEvent)
}