import React from 'react';
import './App.css';

import OpeningTimePage from './assets/pages/Opening';
import ImagesPage from './assets/pages/Images';
import AboutPage from './assets/pages/About';

import {BrowserRouter as Router, Routes as Switch, Route, Link}  from 'react-router-dom'
import { connect } from 'react-redux';

function App() {

  return (
    <div className="App">
      
      <Router>
        <div>
          <Link to = "/" >
            <button > 
                About Us
            </button> 
          </Link> 

          <Link to = "/images" >
            <button > 
                Images
            </button> 
          </Link> 

          <Link to = "/opening" >
            <button > 
                Opening Hours
            </button> 
          </Link> 
        </div>
        
        <Switch>
            <Route path = "/opening" element = {<OpeningTimePage />} />
            <Route path = "/images"  element = {<ImagesPage />} />
            <Route path = "/" element = {<AboutPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);