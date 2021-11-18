import React, { useState } from 'react';
import './App.css';

import OpeningTimePage from './assets/pages/Opening';
import ImagesPage from './assets/pages/Images';
import AboutPage from './assets/pages/About';

import {BrowserRouter as Router, Routes as Switch, Route, Link}  from 'react-router-dom'
import { connect } from 'react-redux';
import Liveview from './assets/molecules/Liveview';

function App() {

  const [page ,setPage] = useState('about')

  return (
    <div className="App">

      <Router>
        <div>
          <Link to = "/" >
            <button className = "LinkButton" onClick = {() => setPage('about')}> 
                About Us
            </button> 
          </Link> 

          <Link to = "/images" >
            <button className = "LinkButton" onClick = {() => setPage('images')}> 
                Images
            </button> 
          </Link> 

          <Link to = "/opening" >
            <button className = "LinkButton" onClick = {() => setPage('opening')}> 
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