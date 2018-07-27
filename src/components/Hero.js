import React, { Component } from 'react';
import '../App.js';
import ParticleModule from './ParticleModule.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const heroText = 'Thorson Design Co.';

const heroSubText = `Hi, my name is Bryce Thorson, and I'm a software designer and developer living and working in Atlanta.
	I help agencies, startups & businesses bring their ideas to life through a refined design & development process.
	I am currently a software designer/devloper consultant at Innovative Architects in Duluth, GA.`;


const projectLink = {
	title: 'View Work',
	pathname: '/Projects', 
}

class Hero extends Component {
	render() {
		return (
			<div className="heroCanvas">
				<div className="container hero-container">
					<div className="hero-content">
						<h1 className="hero-text">{heroText}</h1>
						<h4 className="hero-subtext">Hi, my name is Bryce Thorson, and I'm a software designer and developer living and working in Atlanta.
	I help agencies, startups & businesses bring their ideas to life through a refined design & development process. <br />
	I am currently a software designer/devloper consultant at <a href="https://www.innovativearchitects.com/" style={{ textDecoration: 'none', color: '#ff0030' }} target="_blank">Innovative Architects</a> in Duluth, GA.</h4>
						<Link to={projectLink.pathname}>
							<button className="btn btn-primary heroButton">{projectLink.title}</button>
						</Link>
		      </div>
				</div>
				<ParticleModule/>
			</div>
		)
	}
}


export default Hero;