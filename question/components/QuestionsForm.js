import React, { PropTypes } from 'react'
const QuestionsForm = React.createClass({
  getInitialState (){
		return {
      qtitle:'',
      qdesc:''
    }
	},
  handleSubmit () {
    if (this.state.qtitle.trim()==''||this.state.qdesc.trim()=='') {
      alert('请输入有效的问题！')
    } else {
      var newquestion={
          qtitle:this.state.qtitle,
          qdesc:this.state.qdesc,
          count:0
      };
      this.props.onNewQuestion(newquestion);
    }
    this.setState(
      {
        qtitle:'',
        qdesc:''
      }
    );
  },
  handlechange (name,e) {
    var newq={};
    newq[name]=e.target.value;
    this.setState(newq);
  },
  render () {
    var formStyle={
      display:this.props.displayForm?'block':'none'
    };
    return (
      <div className="questionsForm" style={formStyle}>

        <span>问题</span>
        <input type="text" placeholder="请输入您的问题..." className="qTitleInput"
          value={this.state.qtitle}
          onChange={this.handlechange.bind(this,'qtitle')}
          />
        <textarea name="name" rows="5" placeholder="请输入您问题的详情..."
          value={this.state.qdesc}
          onChange={this.handlechange.bind(this,'qdesc')}>
        </textarea>
        <div className='formBtn'>
          <button className="yesBtn" onClick={this.handleSubmit}>确认</button>
          <button className="noBtn" onClick={this.props.onToggleForm}>取消</button>
        </div>
      </div>
    )
  }
})
export default QuestionsForm
