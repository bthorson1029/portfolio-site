import React, { Component } from 'react';
import '../App.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Header extends Component {
	render() {
	return(
			<div>
				<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
	  			<Link to="/">
	  				<img className="logoMain" src={require("../images/tdc.svg")}/>
					</Link>
	  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    			<span className="navbar-toggler-icon"></span>
	  			</button>
	  			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				    <div className="navbar-nav">
				      <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
				      <Link to="/Work" className="nav-item nav-link">Work</Link>
				      <Link to="/CV" className="nav-item nav-link">CV</Link>
				      <Link to="/Contact" className="nav-item nav-link">Contact</Link>
				    </div>
	  			</div>
				</nav>
			</div>
		);
	}
}	



export default Header;
