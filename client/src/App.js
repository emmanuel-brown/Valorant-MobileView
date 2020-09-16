import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //Redirect
} from 'react-router-dom'

import "./App.css"

import Navbar from './components/navbar/';

//Pages
import Home from './pages/home/';

function App() {
  return (
    <div id="cover">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
