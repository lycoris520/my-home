import React, { Component } from 'react';
import './index.scss';

class Header extends Component{
  render(){
    return(
      <header className="header">
        <div className="fairies"></div>
        <div className="home-img"></div>
      </header>
    )
  }
}

export default Header;