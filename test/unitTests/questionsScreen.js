const expect = require('chai').expect

const QuestionScreenUtil = require('../../client/util/questions/questionsScreen')

describe('checkAnswer', function(){
    it('should add question with status false if user was mistaked', function(){
        var questionNumber = 2,userAnswerNumber = 3, correctAnswer = 1
        this.questionsJson = [
            {
                correct_answer: correctAnswer
            }
        ]
        this.correctAndIncorrectQuestions = []
        this.currentQuestion = 1
        var checkAnswer = QuestionScreenUtil.checkAnswer.bind(this)
        checkAnswer(questionNumber, userAnswerNumber)
        expect(this.correctAndIncorrectQuestions.length).to.be.equal(1)
        expect(this.correctAndIncorrectQuestions[0]).to.eql({
            status: false,
            correctAnswerNumber: correctAnswer,
            userAnswerNumber: userAnswerNumber
        })
    })
    it('should add question with status true if user was right', function(){
        var questionNumber = 2,userAnswerNumber = 1, correctAnswer = 1
        this.questionsJson = [
            {
                correct_answer: correctAnswer
            }
        ]
        this.correctAndIncorrectQuestions = []
        this.currentQuestion = 1
        var checkAnswer = QuestionScreenUtil.checkAnswer.bind(this)
        checkAnswer(questionNumber, userAnswerNumber)
        expect(this.correctAndIncorrectQuestions.length).to.be.equal(1)
        expect(this.correctAndIncorrectQuestions[0]).to.eql({
            status: true,
            correctAnswerNumber: correctAnswer,
            userAnswerNumber: userAnswerNumber
        })
    })
})
