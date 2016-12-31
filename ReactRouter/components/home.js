import React from 'react'

let Home = React.createClass({
  render () {
    return (
      <div className='home'>
        This is homepage.
        <br/>
        It is rendering by the  react router.
        <br/>
        You can see different levels of the pages when you switch the navigation bars.
      </div>
    )
  }
})

export default Home
