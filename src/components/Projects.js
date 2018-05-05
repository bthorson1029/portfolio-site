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
		<div className="projectsCanvas">
			<div className="projectHero" key={project.id}>
				<div className="container">
					
						<div className="projectHeading">
							<h1>{project.name}</h1>
						</div>
						<div className="projectMain">
							<div className="projectInfoBox row">
								<div className="projectInfoLeft col-md-6">
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
								<div className="projectInfoRight col-md-6">
									<div className="projectBrief">
										<h5>Brief</h5>
										<p>{project.brief}</p>
										<Link to={project.projectUrl}>
												<button className="btn btn-primary projectButton">Visit Website</button>
										</Link>
									</div>
								</div>
							</div>
						<hr />
						<div className="contentZone">
							<div className="row">
								<div className="col-lg-6">
									<div className="projectContentArea">
											<h2>Project Summary</h2>
											<p>{project.content}</p>
									</div>
								</div>
								<div className="col-lg-6">
									<img className="img-fluid projectImageSmall" src={project.imageUrl} alt={project.name} />
								</div>
							</div>
							<hr />
							<div className="row">								
								<div className="col-lg-12">
									<img className="img-fluid projectImageLarge" src={project.projectImage} alt={project.name} />
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 projectContentArea_B">
									<h2>Initial Challenge</h2>
								</div>
								<div className="col-lg-6 projectContentArea_B">
									<p>{project.content}</p>
								</div>
								<div className="col-lg-6 projectContentArea_B">
									<p>{project.content}</p>
								</div>
							</div>
							<div className="row">								
								<div className="col-lg-12">
									<img className="img-fluid projectImageLarge" src={project.projectImage} alt={project.name} />
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 projectContentArea_B">
									<h2>Initial Challenge</h2>
								</div>
								<div className="col-lg-6 projectContentArea_B">
									<p>{project.content}</p>
								</div>
								<div className="col-lg-6 projectContentArea_B">
									<p>{project.content}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ParticleModule />
		</div>
	);
}

export default Projects;