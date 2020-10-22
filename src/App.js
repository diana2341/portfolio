import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav'
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Me from './components/me'
import Projects from './components/Projects'



function App() {
  return (
    <>
          <Nav/>

    <Router>
    <Switch>
      
      <Route exact path='/'><About/></Route>
      <Route exact path='/contact'><Contact/></Route>
      <Route exact path='/about-me'><Me/></Route>
      <Route exact path='/projects'><Projects/></Route>

    </Switch>
    </Router>
    </>

      // <Page/>
  );
}

export default App;
