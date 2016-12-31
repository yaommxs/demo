import React from 'react'
import QuestionsHead from '../components/QuestionsHead'
import QuestionsForm from '../components/QuestionsForm'
import QuestionsList from '../components/QuestionsList'

let App = React.createClass({
  getInitialState (){
    var questions=[
      {
        qtitle:'你经历过哪些思维上的转变？',
        qdesc:'你经历过哪些事情，让你更换了看问题的角度。或者经历了哪些事情，对你的性格产生了很大的影响。又或者经历了哪些事情让你改变了原来对其刻板的印象。例如:开车前后思维的变化；学会泡学思维前后的变化；创业前后思维的变化等。',
        count:3
      },{
        qtitle:'连续学习工作，没有娱乐，有什么坏处？',
        qdesc:'这里不是指上班，而是自发的学习和工作。娱乐当然是喜欢的，但是靠自己的毅力克制住了，这样有没有什么坏处？',
        count:5
      }
    ];
    return {
      questions:questions,
      displayForm:false
    }
  },
  onToggleForm () {

    this.setState({
      displayForm:!this.state.displayForm
    })
  },
  onNewQuestion (newquestion) {

    var newquestions=this.state.questions.concat(newquestion);
    newquestions=this.sortQuestions(newquestions);
    this.setState({
      questions:newquestions
    })
  },
  sortQuestions (newquestions) {
    newquestions.sort(function(a,b){
      return b.count-a.count
    })
    return newquestions
  },

  render () {

    return (
      <div>
        <QuestionsHead onToggleForm={this.onToggleForm}/>
        <div className="wrap">
          <QuestionsForm
            displayForm={this.state.displayForm}
            onToggleForm={this.onToggleForm}
            onNewQuestion={this.onNewQuestion}
            />
          <QuestionsList questions={this.state.questions}/>
        </div>
      </div>
    )
  }
})

export default App
