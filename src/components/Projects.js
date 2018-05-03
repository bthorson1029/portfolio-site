import React, { Component } from 'react';
import '../App.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project.js';
import ProjectsSection from './ProjectsSection.js';
import {data} from './ProjectsSection.js';
import ParticleModule from './ParticleModule.js';




function Projects(props) {
	
	const project = data.get(
    parseInt(props.match.params.projectId, 10)
  )
  if (!project) {
    return <div>Sorry, but the project was not found</div>
  }

	return(
		<div>
			<div className="projectHero" key={project.id}>
				<div className="container">
					<div className="projectMain">
						<div className="projectHeading">
							<h1>{project.name}</h1>
							<div className="projectInfoBox">
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
						</div>
					</div>
				</div>
			</div>
			<ParticleModule/>
			<div className="projectContentArea">
				<p>{project.content}</p>
			</div>
		</div>
	);
}

export default Projects;