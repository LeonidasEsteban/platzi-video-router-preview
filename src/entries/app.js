import React from 'react';
import { render, hydrate } from 'react-dom';
// import Home from '../pages/containers/home';
import App from '../pages/containers/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';



const homeContainer = document.getElementById('home-container')

// render(
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, homeContainer);

