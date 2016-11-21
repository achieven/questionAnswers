import React from 'react'

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
                <form action="">
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="first" type="radio" id="answerInput1"/>
                        </div>
                        <div className="col-xs-11">
                            <label className={this.state.answer1ClassName}
                                   id="answerText1">{this.state.answer1Text}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="second" type="radio"
                                   id="answerInput2"/>
                        </div>
                        <div className="col-xs-11">
                            <label className={this.state.answer2ClassName}
                                   id="answerText2">{this.state.answer2Text}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="third" type="radio" id="answerInput3"/>
                        </div>
                        <div className="col-xs-11">
                            <label className={this.state.answer3ClassName}
                                   id="answerText3">{this.state.answer3Text}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="fourth" type="radio"
                                   id="answerInput4"/>
                        </div>
                        <div className="col-xs-11">
                            <label className={this.state.answer4ClassName}
                                   id="answerText4">{this.state.answer4Text}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="fifth" type="radio" id="answerInput5"/>
                        </div>
                        <div className="col-xs-11">
                            <label className={this.state.answer5ClassName}
                                   id="answerText5">{this.state.answer5Text}</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    changeAnswers: function (answersArray) {
        $(this.markedAnswerRadioButtonElement).prop('checked', false)
        $(this.markedAnswerElement).removeClass('answerTextMarked').addClass('answerTextUnmarked')
        this.setState({
            answer1Text: answersArray[0],
            answer2Text: answersArray[1],
            answer3Text: answersArray[2],
            answer4Text: answersArray[3],
            answer5Text: answersArray[4],
        })
    },
    componentDidMount: function () {
        var thisComponent = this
        $('[name="answer"]').on('click', function (e) {
            
            var answerTextId = e.target.getAttribute('id').replace('Input', 'Text')
            var markedAnswerTextHtmlElement = $('#' + answerTextId)
            if (thisComponent.markedAnswerElement) {
                thisComponent.markedAnswerElement.removeClass('answerTextMarked').addClass('answerTextUnmarked')
            }
            $(markedAnswerTextHtmlElement).removeClass('answerTextUnmarked').addClass('answerTextMarked')
            thisComponent.markedAnswerElement = markedAnswerTextHtmlElement
            thisComponent.markedAnswerRadioButtonElement = e.target
        })
    }
})

module.exports = Answers