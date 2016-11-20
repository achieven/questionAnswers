import React from 'react'
import Navbar from './navbar'
import Question from './question'
import Answers from './answers'
import Submit from './submit'


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
    nextQuestion: function () {
        this.currentQuestion++
        if(this.currentQuestion <= this.questionsJson.length){
            this.setNextQuestionProperties()
        }
        else if(this.currentQuestion === this.questionsJson.length+1){
            var main = this._reactInternalInstance._currentElement._owner._instance
            main.showSummary()
        }
        
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
    componentDidMount: function () {
        var thisComponent = this
        $.getJSON('../assets/inputFiles/questions.json', function (questionsJson) {
            thisComponent.questionsJson = questionsJson
            thisComponent.currentQuestion = 1
            thisComponent.setNextQuestionProperties()
        })
    },
    hide: function(){
        $('#questionsScreen').addClass('hide')
    }, 
    show: function(){
        $('#questionsScreen').removeClass('hide')
    }
})

module.exports = QuestionsScreen