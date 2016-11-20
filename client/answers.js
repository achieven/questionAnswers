import React from 'react'

var Answers = React.createClass({
    getInitialState: function(){
        return {
            answersText: this.props.answersText || ''
        }
    },
    render: function(){
        return (
            <div className="container"></div>
        )
    }
})

module.exports = Answers