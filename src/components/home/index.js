import React, { Component } from 'react';
import './index.scss'
import Header from './header'
import Nav from './nav'
import Content from './Content'

class Home extends Component {
  render() {
    return (
      <div className="home">
      <Header/>
      <Nav/>
      <Content/>
      </div>
    );
  }
}

export default Home;
