import React, { Component } from 'react';
import '../App.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {data} from './ProjectsSection.js';
import ParticleModule from './ParticleModule.js';
import SliderComponent from './SliderComponent.js';





function Projects(props) {
	const totalProjects = data.projects.length;
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
						<div className="navigationButtons">
							<div className="backToProjects">
								<Link to={`/Projects/`}><button className="btn btn-secondary projectButton">Back to Projects</button></Link>
							</div>
							<div className="nextProject">
								<Link to={`/Projects/${project.id + 1 <= totalProjects ? project.id + 1 : project.id - (totalProjects) + 1}`}><button className="btn btn-secondary projectButton">Next Project</button></Link>
							</div>
						</div>
					</div>
						<div className="projectMain">
							<div className="contentZone">
								<div className="row">
									{/*<div className="col-lg-4 projectContentArea">
												<h2>Project Summary</h2>
												<p>{project.content}</p>
										</div>*/}
								<div className="projectInfoBox col-lg-5">
									<div className="projectInfoLeft col-lg-12">
										<div className="projectRole">
											<h5>Role</h5>
											<p>{project.type}</p>
										</div>
										<div className="projectDate">
											<h5>Date</h5>
											<p>{project.date}</p>
										</div>
										<div className="projectTech">
											<h5>Tech</h5>
											<p>{project.tech}</p>
										</div>
									</div>
									<div className="projectInfoRight col-lg-12">
										<div className="projectBrief">
											<h5>Brief</h5>
											<p>{project.brief}</p>
											<a href={project.projectUrl} target="_blank"><button className="btn btn-primary projectButton">Visit Company Website</button></a>
										</div>
									</div>
								</div>	
									<div className="col-lg-7 p-0">
										<SliderComponent {...project} />
									</div>
								</div>
							</div>
						{/* <hr /> */}

					</div>
				</div>
			</div>
		<ParticleModule />
	</div>
	);
}

export default Projects;