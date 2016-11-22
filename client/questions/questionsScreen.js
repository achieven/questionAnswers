import React from 'react'
import Navbar from './navbar'
import Question from './question'
import Answers from './answers'
import Submit from './submit'
import QuestionsScreenUtil from '../util/questions/questionsScreen'


var QuestionsScreen = React.createClass({
    getInitialState: function () {
        return {}
    },
    render: function () {
        return (
            <div id="questionsScreen">
                <Navbar ref="navbar"> </Navbar>
                <hr id="questionAnswersHr"/>
                <Question ref="question"></Question>
                <Answers ref="answers"></Answers>
                <hr id="questionAnswersHr"/>
                <Submit ref="submit"> </Submit>
            </div>
        )
    },
    nextQuestion: function (markedAnswerNumber) {
        QuestionsScreenUtil.nextQuestion.call(this, markedAnswerNumber)
    },
    checkAnswer: function(questionNumber, userAnswerNumber){
        QuestionsScreenUtil.checkAnswer.call(this, questionNumber, userAnswerNumber)
    },
    setNextQuestionProperties: function () {
        QuestionsScreenUtil.setNextQuestionProperties.call(this)
    },

    initializeQuestions: function(){
        QuestionsScreenUtil.initializeQuestions.call(this)
    },
    componentDidMount: function () {
        this.initializeQuestions()
    },
    hide: function(){
        $('#questionsScreen').addClass('hide')
    }, 
    show: function(){
        $('#questionsScreen').removeClass('hide')
    }
})

module.exports = QuestionsScreen
