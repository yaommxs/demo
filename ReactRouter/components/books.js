import React from 'react'
import {Link} from 'react-router'

let Books = React.createClass({
  render() {
    return(
      <div className='books'>
        <div className='books_item'>
          <ul>
            <li><Link to='/books/item1'>books item1</Link></li>
            <li><Link to='/books/item2'>books item2</Link></li>
            <li><Link to='/books/item3'>books item3</Link></li>
            <li><Link to='/books/item4'>books item4</Link></li>
            <li><Link to='/books/item5'>books item5</Link></li>
            <li><Link to='/books/item6'>books item6</Link></li>
            <li><Link to='/books/item7'>books item7</Link></li>
            <li><Link to='/books/item8'>books item8</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default Books;
