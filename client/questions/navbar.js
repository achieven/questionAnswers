import React from 'react'

var Navbar = React.createClass({
    getInitialState: function () {
        return {
            questionNumber: this.props.questionNumber || 1
        }
    },
    render: function () {
        return (
            <div className="container">
                <div className="row-fluid">
                    <div className="col-xs-2 number-common-properties" id="number1">1</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number2">2</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number3">3</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number4">4</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number5">5</div>
                </div>
            </div>
        )
    },
    changeQuestion: function(newQuestionNumber){
        if(this.questionNumber){
            $('#number' + this.questionNumber).removeClass('currentQuestion')
        }
        $('#number' + newQuestionNumber).addClass('currentQuestion')
        this.questionNumber = newQuestionNumber
    }
  
})

module.exports = Navbar