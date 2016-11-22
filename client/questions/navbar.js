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
                <div className="row-fluid navbarRow">
                    <div className="navbarNumber" id="number1">1</div>
                    <div className="navbarNumber" id="number2">2</div>
                    <div className="navbarNumber" id="number3">3</div>
                    <div className="navbarNumber" id="number4">4</div>
                    <div className="navbarNumber" id="number5">5</div>
                </div>
            </div>
        )
    },
    changeQuestion: function(newQuestionNumber){
        if(this.questionNumber){
            $('#number' + this.questionNumber).removeClass('navbarCurrentQuestion')
        }
        $('#number' + newQuestionNumber).addClass('navbarCurrentQuestion')
        this.questionNumber = newQuestionNumber
    }
  
})

module.exports = Navbar