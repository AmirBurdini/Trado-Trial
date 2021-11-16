import React from 'react';
import './App.css';

import OpeningTimePage from './assets/pages/Opening';
import ImagesPage from './assets/pages/Images';
import AboutPage from './assets/pages/About';

import {BrowserRouter as Router, Routes as Switch, Route}  from 'react-router-dom'

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
            <Route path = "/opening" element = { <h1>openings</h1>}>
               
            </Route>
            <Route path = "/images"  element = { <h1>images</h1>}>
                
            </Route>
            <Route path = "/" element = { <h1>about</h1>}>
                
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;