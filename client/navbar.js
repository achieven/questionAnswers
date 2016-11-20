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
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number2">1</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number3">1</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number4">1</div>
                    <div className="col-xs-2 number-common-properties col-half-offset" id="number5">1</div>
                </div>
            </div>
        )
    },
    componentDidUpdate: function () {
        $('#number' + this.state.questionNumber).addClass('numberCircle')
    },
    componentDidMount: function () {
        this.setState({
            questionNumber: 1
        })
    }
})

module.exports = Navbar