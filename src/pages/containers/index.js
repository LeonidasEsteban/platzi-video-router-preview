import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../pages/components/header';

import Home from './home';
import Videos from './videos';

class Index extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Route path="/videos/:id" component={Videos} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default Index;
