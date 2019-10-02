module.exports = app => {
	const QuestionsRound = app.controllers.QuestionsRoundController

	app.route('/confrontation/:confrontationId/question-round/')
		.get(QuestionsRound.getQuestionsRound)
		.post(QuestionsRound.createTask)

	app.route('/confrontation/:confrontationId/question-round/:questionRoundId')
		.get(QuestionsRound.getTaskOne)
		.put(QuestionsRound.updateTask)
    	.delete(QuestionsRound.deleteTask)

}