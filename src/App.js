import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import ProjectsSection from './components/ProjectsSection.js';
import ProjectsPage from './components/ProjectsPage.js';


class App extends Component {
  render() {
    return (
      <Router>
	      <div className="App">
	        <Route path="/" component={Header} />
	        <Route exact path="/" component={Hero} />
	        <Switch>
	        	<Route exact path="/" component={ProjectsSection} />
	        	<Route path="/Projects/:projectId" component={ProjectsPage} />
	        </Switch>
	      </div>
      </Router>
    );
  }
}

export default App;
