import React from 'react'
import {App} from 'app'

var Submit = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-6 text-center">
                        <button className="btn btn-info col-xs-12" id="submitQuestion">Submit</button>
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
                //error
            }
            else if(markedAnswerElement.length === 1){
                var app = thisComponent._reactInternalInstance._currentElement._owner._instance
                app.nextQuestion()
            }
            else {
                //programmer mistake
            }
        })
    }
})

module.exports = Submit