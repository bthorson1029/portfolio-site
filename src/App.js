import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import ProjectsSection from './components/ProjectsSection.js';
import ProjectsPage from './components/ProjectsPage.js';
import Projects from './components/Projects.js';
import CV from './components/CV.js';
import Contact from './components/Contact.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faDribbbleSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Modal from './components/Modal.js';

library.add(fab, faEnvelope, faPhoneSquare, faDribbbleSquare, faLinkedin)

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

class App extends Component {
	componentDidMount() {
		hideLoader();
	}
	
	render() {
    return (
      <Router>
	      <div className="App">
					<Modal />
	        <Route path="/" component={Header} />
	        <Route exact path="/" component={Hero} />
	        <Switch>
	        	<Route exact path="/Projects" component={ProjectsSection} />
	        	<Route path="/Projects/:projectId" component={Projects} />
						{/* <Route exact path="/CV" component={CV} /> */}
						<Route exact path="/Contact" component={Contact} />
	        </Switch>
	      </div>
      </Router>
    );
  }
}

export default App;
