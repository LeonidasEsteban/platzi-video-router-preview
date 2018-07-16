import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';

class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/canciones/:id" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default Index;
