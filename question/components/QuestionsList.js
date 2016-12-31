import React, { PropTypes } from 'react'
var up=require('../img/up.png')
var down=require('../img/down.png')

const QuestionsList = React.createClass({
  
  render () {
    var qlist=this.props.questions.map(function(q,i){
      return (
        <li className="qList" key={i}>
          <div className="qListl">
            <div className="up">
              <div className="upIcon zan" ><img src={up} alt="赞"/></div>
              <span>{q.count}</span>
            </div>
            <div className="down">
              <div className="downIcon zan" ><img src={down} alt="踩"/></div>
            </div>
          </div>
          <div className="qListr">
            <h4 className="qTitle">{q.qtitle}</h4>
            <p className="qDesc">{q.qdesc}</p>
          </div>
        </li>
      )
    })
    return (
      <div className="questionsList">
        <ul>
          {qlist}
        </ul>
      </div>
    )
  }
})

export default QuestionsList
