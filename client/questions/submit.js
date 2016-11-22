import React from 'react'

var Submit = React.createClass({
    getInitialState: function(){
        return {
            submitQuestionError: this.props.submitQuestionError || ''
        }
    },
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-6 text-center">
                        <button className="btn btn-info col-xs-12" id="submitQuestion">Submit</button>
                        <label className="submitQuestionError">{this.state.submitQuestionError}</label>
                    </div>
                    <div className="col-xs-3"></div>
                </div>
            </div>
        )
    },
    componentDidMount: function(){
        var thisComponent = this
        $('#submitQuestion').on('click', function(e){
            var markedAnswerElement = $('.answerTextMarked')
            if(markedAnswerElement.length === 0){
                thisComponent.setState({
                    submitQuestionError: 'Please select an answer'
                })
            }
            else if(markedAnswerElement.length === 1){
                thisComponent.setState({
                    submitQuestionError: ''
                })
                var questionsScreen = thisComponent._reactInternalInstance._currentElement._owner._instance
                var markedAnswerNumber = markedAnswerElement.attr('id').replace('answerText', '')
                questionsScreen.nextQuestion(markedAnswerNumber)
            }
        })
    }
})

module.exports = Submit