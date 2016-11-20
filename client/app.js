import React from 'react'
import Navbar from 'navbar'
import Question from 'question'
import Answers from 'answers'
import Submit from 'submit'

var App = React.createClass({
    getInitialState: function(){
        return {}
    },
    render: function () {
        return (
            <div>
                <Navbar ref="navbar"> </Navbar>
                <hr id="questionAnswersHr"/>
                <Question ref="question"></Question>
                <Answers ref="answers"></Answers>
                <hr id="questionAnswersHr"/>
                <Submit ref="submit"> </Submit>
            </div>
        )
    },
    nextQuestion: function(){
        this.refs.navbar.changeQuestion(2)
        this.refs.question.changeQuestion('2')
        this.refs.answers.changeAnswers(['6','7','8','9','10'])
    },
    componentDidMount: function(){
        this.refs.navbar.changeQuestion(1)
        this.refs.question.changeQuestion('1')
        this.refs.answers.changeAnswers(['1','2','3','4','5'])
            
    }
})

module.exports = App