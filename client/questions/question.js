import React from 'react'
import QuestionUtil  from '../util/questions/question'

var Question = React.createClass({
    getInitialState: function(){
        return {
            questionText: this.props.questionText || 'saasdasdasdasdas dasdas d asdasd as da sdasdas d asd asd asd asdasdasdasdasdasdasd asda sdasdasdasd asd asd asdasdasd asd asd sdfsdfsdf sdfsdfsdf sdfsdfsdf sdf sd sdfsdfsdfsdfs dfsdfs dfsd fsd fsdfsdf s'
        }
    },
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div id="question">
                            {this.state.questionText}
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