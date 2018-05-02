import React, { Component } from 'react';
import '../App.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project.js';
import ProjectsSection from './ProjectsSection.js';
import {data} from './ProjectsSection.js';




function Projects(props) {
	
	return(
		<div>
		{props.data.map((project, index) => {

       return( 
      
				<div className="projectHero" key={index}>
					<div className="projectHeading">
						<h1>{project.name}</h1>
						<div className="projectInfoLeft">
							<div className="projectRole">
								<h5>Role</h5>
								<p>{project.type}</p>
							</div>
							<div className="projectTech">
								<h5>Tech</h5>
								<p>{project.tech}</p>
							</div>
							<div className="projectDate">
								<h5>Date</h5>
								<p>{project.date}</p>
							</div>
						</div>
						<div className="projectInfoRight">
							<div className="projectBrief">
								<h5>Brief</h5>
								<p>{project.brief}</p>
							</div>
						</div>
					</div>
				</div>);
			})}
		</div>
	);
}

export default Projects;