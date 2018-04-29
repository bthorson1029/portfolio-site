import React, { Component } from 'react';
import '../App.js';
import ParticleModule from './ParticleModule.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const heroText = 'Bryce Thorson';

const heroSubText = `I'm a digital designer & front-end developer living and working remotely in Atlanta.
	I help agencies, startups & businesses bring their ideas to life through a refined design & development process.`;


const projectLink = {
	title: 'Extra Long Cheese Coney',
	pathname: '../images/logo.svg',
}

class Hero extends Component {
	render() {
		return (
			<div>
				<div className="hero-container">
					<div className="hero-content">
						<h1 className="hero-text">{heroText}</h1>
						<h4 className="hero-subtext">{heroSubText}</h4>
						<button className="btn btn-primary">{projectLink.title}</button>
		      </div>
				</div>
				<ParticleModule/>
			</div>
		)
	}
}


export default Hero;