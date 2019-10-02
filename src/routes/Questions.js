module.exports = app => {
  const Questions = app.controllers.QuestionsController

  app.route('/questions')
    .get(Questions.getQuestions)
    .post(Questions.createTask)

  app.route('/questions/:questionId')
    .get(Questions.getTaskOne)
    .put(Questions.updateTask)
    .delete(Questions.deleteTask)
}