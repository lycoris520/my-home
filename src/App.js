import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
