import React from 'react';
import  {render} from 'react-dom'
import { Router,Route,Link,browserHistory,IndexRoute} from 'react-router'

import Home from '../components/home'
import Books from '../components/books'
import Bookitem1 from '../components/bookitem1'
import Movies from '../components/movies'
import Sports from '../components/sports'

require('../build/index.css')

let App =React.createClass({
  render () {
    return (
      <div>
        <div className='nav'>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/books'>BOOKS</Link></li>
            <li><Link to='/movies'>MOVIES</Link></li>
            <li><Link to='/sports'>SPORTS</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
})

// let Routes =

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/books' component={Books}>
        <Route path="/books/:bookitem" component={Bookitem1}/>
      </Route>
      <Route path='/movies' component={Movies}/>
      <Route path='/sports' component={Sports}/>
    </Route>
  </Router>
), document.getElementById('App'));
