import React, { Component } from 'react';
import '../App.js';
import Projects from './Projects.js';
import ProjectsSection from './ProjectsSection.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {data} from './ProjectsSection.js';

class ProjectsPage extends Component {
	render() {
		return(
			<div>
				<div className="container">
					<Projects	data={data} key={data.id} />
				</div>
			</div>
		);
	}
}


export default ProjectsPage;