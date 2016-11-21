import React from 'react'

var AnswerWithButton = React.createClass({
    render: function () {
        var inputId = "answerInput" + this.props.id
        var answerId = "answerText" + this.props.id
        return (
            <div className="row">
                <div className="col-xs-1">
                    <input className="form-control" name="answer" type="radio" id={inputId}/>
                </div>
                <div className="col-xs-11">
                    <label className={this.props.answerClassName}
                           id={answerId}>{this.props.answerText}</label>
                </div>
            </div>
        )
    }
})

module.exports = AnswerWithButton