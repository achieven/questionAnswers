import React from 'react'
import QuestionsScreen from './questions/questionsScreen'
import Summary from './summary/summary'

var App = React.createClass({
    render: function(){
        return (
            <div>
                <QuestionsScreen ref="questionsScreen"></QuestionsScreen>
                <Summary ref="summary" ></Summary>
            </div>
        )
    },
    showSummary: function(){
        this.refs.questionsScreen.hide()
        this.refs.summary.show()
    },
    componentDidMount: function(){
        this.refs.questionsScreen.show()
        this.refs.summary.hide()
    }
})

module.exports = App