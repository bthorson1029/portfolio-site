import React, { Component } from 'react';
import '../App.js';
import ParticleModule from './ParticleModule.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const heroText = 'Thorson Design Co.';

const heroSubText = `Hi, my name is Bryce Thorson, and I'm a digital designer & front-end developer living and working remotely in Atlanta.
	I help agencies, startups & businesses bring their ideas to life through a refined design & development process.`;


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
						<h4 className="hero-subtext">{heroSubText}</h4>
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