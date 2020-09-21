import React, { Component, Suspense } from 'react';
import { Router, LocationProvider } from '@reach/router';

import { hot } from 'react-hot-loader';

import Home from './views/Home.jsx';

import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className='App' fontFamily='fontFamily'>
        <Suspense>
          <Router>
            <Home path='/' pathname='Landing' />
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default hot(module)(App);
