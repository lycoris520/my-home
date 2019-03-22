
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './home';
import Test from './Test';
import NotFound from './404'
class Layout extends Component {
  render() {
    return (
      <div className="layout">
          <Route path="/" exact component={ Home} />
          <Route path="/Test" component={Test} />
          <Route path="/404" component={NotFound} />
      </div>
    );
  }
}

export default Layout;