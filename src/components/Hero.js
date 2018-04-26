import React, { Component } from 'react';
import '../App.js';
import ParticleModule from './ParticleModule.js';


class Hero extends Component {
	render() {
		return (
			<div className="hero-container">
				<div className="hero-content">
	      	<h1 className="hero-text">Thorson Design Co.</h1>
	      	<button className="btn btn-primary">View Work</button>
	      </div>
	      <ParticleModule/>

			</div>
		)
	}
}


export default Hero;