import React from 'react'

var QuestionSummary = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-xs-12 generalTextColor">
                        Question number: {this.props.questionNumber},
                        Your answer: {this.props.userAnswer}
                        {this.props.correctAnswerMessage ? ', ' + this.props.correctAnswerMessage : ''}
                        {this.props.correctAnswer}
                        <span className={this.props.rightWrongClass} dangerouslySetInnerHTML={{__html: this.props.rightWrongSymbol}}></span>
                </div>
            </div>
        )
    }
})
module.exports = QuestionSummary