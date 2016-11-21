import React from 'react'
import AnswerWithButton from './answerWithButton'

var Answers = React.createClass({
    getInitialState: function () {
        return {
            answer1Text: this.props.answer1Text || '',
            answer2Text: this.props.answer2Text || '',
            answer3Text: this.props.answer3Text || '',
            answer4Text: this.props.answer4Text || '',
            answer5Text: this.props.answer5Text || '',
            answer1ClassName: this.props.answer1Text || 'form-control answerText answerTextUnmarked',
            answer2ClassName: this.props.answer2Text || 'form-control answerText answerTextUnmarked',
            answer3ClassName: this.props.answer3Text || 'form-control answerText answerTextUnmarked',
            answer4ClassName: this.props.answer4Text || 'form-control answerText answerTextUnmarked',
            answer5ClassName: this.props.answer5Text || 'form-control answerText answerTextUnmarked'
        }
    },
    render: function () {
        return (
            <div className="container">
                <AnswerWithButton answerClassName={this.state.answer1ClassName} answerText={this.state.answer1Text} id={1}></AnswerWithButton>
                <AnswerWithButton answerClassName={this.state.answer2ClassName} answerText={this.state.answer2Text} id={2}></AnswerWithButton>
                <AnswerWithButton answerClassName={this.state.answer3ClassName} answerText={this.state.answer3Text} id={3}></AnswerWithButton>
                <AnswerWithButton answerClassName={this.state.answer4ClassName} answerText={this.state.answer4Text} id={4}></AnswerWithButton>
                <AnswerWithButton answerClassName={this.state.answer5ClassName} answerText={this.state.answer5Text} id={5}></AnswerWithButton>
            </div>
        )
    },
    changeAnswers: function (answersArray) {
        $(this.markedAnswerRadioButtonElement).prop('checked', false)
        $(this.markedAnswerTextElement).removeClass('answerTextMarked').addClass('answerTextUnmarked')
        this.setState({
            answer1Text: answersArray[0],
            answer2Text: answersArray[1],
            answer3Text: answersArray[2],
            answer4Text: answersArray[3],
            answer5Text: answersArray[4]
        })
    },
    componentDidMount: function () {
        var thisComponent = this
        $('[name="answer"]').on('click', function (e) {
            var answerTextId = e.target.getAttribute('id').replace('Input', 'Text')
            var markedAnswerTextHtmlElement = $('#' + answerTextId)
            if (thisComponent.markedAnswerTextElement) {
                thisComponent.markedAnswerTextElement.removeClass('answerTextMarked').addClass('answerTextUnmarked')
            }
            $(markedAnswerTextHtmlElement).removeClass('answerTextUnmarked').addClass('answerTextMarked')
            thisComponent.markedAnswerTextElement = markedAnswerTextHtmlElement
            thisComponent.markedAnswerRadioButtonElement = e.target
        })
    }
})

module.exports = Answers