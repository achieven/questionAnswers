import React from 'react'

var Summary = React.createClass({
    render: function () {
        return (
            <div id="summaryScreen">
                <div className="container">
                    <div id="finished">FINISHED!</div>
                </div>
            </div>
            
        )
    },
    hide: function(){
        $('#summaryScreen').addClass('hide')
    },
    show: function(){
        $('#summaryScreen').removeClass('hide')
    }
})
module.exports = Summary