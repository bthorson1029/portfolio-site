import React, { Component } from 'react';
import '../App.js';
import ParticleModule from './ParticleModule.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const heroText = 'Thorson Design Co.';

const heroSubText = `Hi, my name is Bryce Thorson, and I'm a software designer and developer living and working in Atlanta.
	I help agencies, startups & businesses bring their ideas to life through a refined design & development process.`;


const projectLink = {
	title: 'View Work',
	pathname: '/Projects', 
}

const contactLink = {
	title: 'Get In Touch',
	pathname: '/Contact'
}

class Hero extends Component {
	render() {
		return (
			<div className="heroCanvas">
				<div className="container hero-container">
					<div className="hero-content">
						<h1 className="hero-text">{heroText}</h1>
						<h4 className="hero-subtext">{heroSubText}</h4>
	<h4 className="hero-subtext">I am senior ux designer at <a href="https://www.assurant.com/" style={{ textDecoration: 'none', color: '#ff0030' }} target="_blank" rel="noopener noreferrer">Assurant</a> in Atlanta, GA.</h4>
						<div className="hero-buttons">
							<Link to={projectLink.pathname}>
								<button className="btn btn-primary heroButton">{projectLink.title}</button>
							</Link>
							<Link to={contactLink.pathname}>
								<button className="btn btn-secondary heroButton">{contactLink.title}</button>
							</Link>
						</div>
		      </div>
				</div>
				<ParticleModule/>
			</div>
		)
	}
}


export default Hero;