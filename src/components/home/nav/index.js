import React, { Component } from 'react';
import './index.scss';

class Nav extends Component{
  render(){
    return(
      <nav className="nav">
        <ul>
          <li className="code"><span>CODE</span></li>
          <li className="flower"><span>FLOWER</span></li>
          <li className="food"><span>FOOD</span></li>
          <li className="photography"><span>PHOTO</span></li>
          <li className="me"><span>ME</span></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;