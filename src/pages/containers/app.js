import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Videos from './videos';
import Video from './video';
import NotFound from '../components/not-found';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../reducers/index'; // esta ruta es diferente ../../ !== ./
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Route path="/videos/:id" component={Video} />
            <Redirect from="/v" to='/videos' />
            <Redirect from="/v/:id" to="/videos/:id" />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
