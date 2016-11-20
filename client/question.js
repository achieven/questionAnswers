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
                        <div id="question">
                            saasdasdasdasdas dasdas d asdasd as da sdasdas d asd asd asd asdasdasdasdasdasdasd asda sdasdasdasd asd asd asdasdasd asd asd sdfsdfsdf sdfsdfsdf sdfsdfsdf sdf sd sdfsdfsdfsdfs dfsdfs dfsd fsd fsdfsdf s
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
})

module.exports = Question