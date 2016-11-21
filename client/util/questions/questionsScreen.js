var QuestionsScreenUtil = {
    nextQuestion: function (markedAnswerNumber) {
        var isCorrectOrNot = this.checkAnswer(this.currentQuestion, markedAnswerNumber)
        this.currentQuestion++
        if (this.currentQuestion <= this.questionsJson.length) {
            this.setNextQuestionProperties()
        }
        else if (this.currentQuestion === this.questionsJson.length + 1) {
            var main = this._reactInternalInstance._currentElement._owner._instance
            main.showSummary(this.correctAndIncorrectQuestions)
        }
    },
    checkAnswer: function (questionNumber, userAnswerNumber) {
        var correctAnswerNumber = this.questionsJson[this.currentQuestion - 1].correct_answer
        var status = correctAnswerNumber == userAnswerNumber ? true : false
        this.correctAndIncorrectQuestions.push({
            status: status,
            correctAnswerNumber: correctAnswerNumber,
            userAnswerNumber: userAnswerNumber
        })
    },
    setNextQuestionProperties: function () {
        this.refs.navbar.changeQuestion(this.currentQuestion)
        this.refs.question.changeQuestion(this.questionsJson[this.currentQuestion - 1].question.body)
        this.refs.answers.changeAnswers([
            this.questionsJson[this.currentQuestion - 1].choices[0].body,
            this.questionsJson[this.currentQuestion - 1].choices[1].body,
            this.questionsJson[this.currentQuestion - 1].choices[2].body,
            this.questionsJson[this.currentQuestion - 1].choices[3].body,
            this.questionsJson[this.currentQuestion - 1].choices[4].body
        ])
    },
    initializeQuestions: function () {
        var thisComponent = this
        $.getJSON('../assets/inputFiles/questions.json', function (questionsJson) {
            thisComponent.questionsJson = questionsJson
            thisComponent.currentQuestion = 1
            thisComponent.correctAndIncorrectQuestions = []
            thisComponent.setNextQuestionProperties()
        })
    }
}

module.exports = QuestionsScreenUtil