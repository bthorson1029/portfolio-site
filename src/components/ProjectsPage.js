import React, { Component } from 'react';
import '../App.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ProjectsPage extends Component {
	render() {
		return(
			<div>
				<div className="container">
					<Header />
					<ProjectsTemplate />
				</div>
			</div>
		);
	}
}


export default ProjectsPage;