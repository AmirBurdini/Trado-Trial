import React from 'react';
import './App.css';

import Opening from './assets/pages/Opening';
import Images from './assets/pages/Images';
import About from './assets/pages/About';

const {BrowserRouter :Router, Switch, Route} = require('react-router-dom')

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch >
            <Route path = "/opening">
                <Opening />
            </Route>
            <Route path = "/images">
                <Images />
            </Route>
            <Route default path = "/">
                <About />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;