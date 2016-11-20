import React from 'react'

var Answers = React.createClass({
    getInitialState: function () {
        return {
            answersText: this.props.answersText || ''
        }
    },
    render: function () {
        return (
            <div className="container">
                <form action="">
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="first" type="radio"/>
                        </div>
                        <div className="col-xs-11">
                            <label className="form-control answerText">sadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfssadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadf sdf asd fasd fasd fas df asdfasd fas df asd fasd fas df asdf asdf asd fasd fas df asdf asd fas df asdf asd fas df asdf asd fa sdf asd f asd f asd f asdfas df asd fas df asdf as df asd fasd fa </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="second" type="radio"/>
                        </div>
                        <div className="col-xs-11">
                            <label className="form-control answerText">sadfsadfsadfsadf sdf asd fasd fasd fas df asdfasd fas df asd fasd fas df asdf asdf asd fasd fas df asdf asd fas df asdf asd fas df asdf asd fa sdf asd f asd f asd f asdfas df asd fas df asdf as df asd fasd fa </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="third" type="radio"/>
                        </div>
                        <div className="col-xs-11">
                            <label className="form-control answerText">sadfsadfsadfsadf sdf asd fasd fasd fas df asdfasd fas df asd fasd fas df asdf asdf asd fasd fas df asdf asd fas df asdf asd fas df asdf asd fa sdf asd f asd f asd f asdfas df asd fas df asdf as df asd fasd fa </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="fourth" type="radio"/>
                        </div>
                        <div className="col-xs-11">
                            <label className="form-control answerText">sadfsadfsadfsadf sdf asd fasd fasd fas df asdfasd fas df asd fasd fas df asdf asdf asd fasd fas df asdf asd fas df asdf asd fas df asdf asd fa sdf asd f asd f asd f asdfas df asd fas df asdf as df asd fasd fa </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1">
                            <input className="form-control" name="answer" value="fifth" type="radio"/>
                        </div>
                        <div className="col-xs-11">
                            <label className="form-control answerText">sadfsadfsadfsadf sdf asd fasd fasd fas df asdfasd fas df asd fasd fas df asdf asdf asd fasd fas df asdf asd fas df asdf asd fas df asdf asd fa sdf asd f asd f asd f asdfas df asd fas df asdf as df asd fasd fa </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
})

module.exports = Answers