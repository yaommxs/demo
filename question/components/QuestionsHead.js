import React, { PropTypes } from 'react'

const QuestionsHead = React.createClass({
  render () {
    return (
      <div className="questionsHead">
        <div className="wrap">
          <p>问答社区</p>
          <button className="addQuestion" onClick={this.props.onToggleForm}>添加问题</button>
        </div>
      </div>
    )
  }
})

export default QuestionsHead
