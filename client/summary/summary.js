import React from 'react'
import QuestionSummary from './questionSummary'


var Summary = React.createClass({
    getInitialState: function(){
        return {
            questionsSummary: this.props.questionsSummary || ''  
        }
    },
    render: function () {
        return (
            <div id="summaryScreen">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <label className="generalTextColor">This is a summary of your questions:</label>
                        </div>
                    </div>
                    {this.state.questionsSummary || []}
                </div>
            </div>
        )
    },
    hide: function () {
        $('#summaryScreen').addClass('hide')
    },
    show: function (correctAndIncorrectQuestions) {
        this.renderQuestionSummary(correctAndIncorrectQuestions)
        $('#summaryScreen').removeClass('hide')
    },
    renderQuestionSummary: function(correctAndIncorrectQuestions){
        var questionsSummary = []
        var checkMarkSymbol = '&#10004;', crossMarkSymbol = '&#10006;'
        correctAndIncorrectQuestions.forEach(function(questionSummary, index){
            questionsSummary.push(
                <QuestionSummary
                    key={index}
                    questionNumber={index +1}
                    userAnswer={questionSummary.userAnswerNumber}
                    correctAnswerMessage={questionSummary.status? '' : 'Correct answer: '}
                    correctAnswer={questionSummary.status ? '' : questionSummary.correctAnswerNumber}
                    rightWrongClass={questionSummary.status ? 'checkmark' : 'crossMark'}
                    rightWrongSymbol={questionSummary.status ? checkMarkSymbol : crossMarkSymbol}
                ></QuestionSummary>
            )
        })
        this.setState({
            questionsSummary: questionsSummary
        })
    }
})
module.exports = Summary