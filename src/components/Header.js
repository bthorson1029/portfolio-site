import React, { Component } from 'react';
import '../App.js';




class Header extends Component {
	render() {
	return(
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  			<a href="#">
  				<img className="logoMain" src={require("../images/tdc.svg")}/>
				</a>
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    <div className="navbar-nav">
			      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
			      <a className="nav-item nav-link" href="#">Work</a>
			      <a className="nav-item nav-link" href="#">CV</a>
			      <a className="nav-item nav-link" href="#">Contact</a>
			    </div>
  			</div>
			</nav>
		</div>
		);
	}
}	



export default Header;
