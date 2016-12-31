import React from 'react'

let Bookitem1 = React.createClass({
  render () {
    return (
      <div>
        <div className='bookitem1'>This is books {this.props.params.bookitem}</div>
      </div>
    )
  }
})

export default Bookitem1
