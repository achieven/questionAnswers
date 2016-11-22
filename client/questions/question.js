import React from 'react'

var Question = React.createClass({
    getInitialState: function(){
        return {
            questionText: this.props.questionText || ''
        }
    },
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div id="question" dangerouslySetInnerHTML={{__html: this.state.questionText}}>
                        </div>
                    </div>
                </div>
                <hr id="questionAnswersHr"/>
            </div>
        )
    },
    changeQuestion: function(newQuestion){
        this.setState({
            questionText: newQuestion
        })
    }
})

module.exports = Question