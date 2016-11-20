import React from 'react'
import Navbar from 'navbar'
import Question from 'question'
import Answers from 'answers'
import Submit from 'submit'

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar> </Navbar>
                <hr/>
                <Question></Question>
                <Answers></Answers>
                <hr/>
                <Submit> </Submit>
            </div>
        )
    }
})

module.exports = App