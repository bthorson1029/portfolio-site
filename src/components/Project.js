import React from 'react';
import '../App.js';
import ProjectsSection from './ProjectsSection.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export default function Project(props){

	const projectId = props.id;

	return (
		<div>
			<div className="project">
				<Link to={`/Projects/${projectId}`}>
					<div className="effect-sadie projectContainer">
						<img className="projectImage img-fluid"
							src={props.imageUrl}
							alt={props.name}
							/>
							<h2>View Project</h2>
					</div>
				</Link>
				<div className="projectDetails">
					<div className="projectType"><p>{props.type}</p></div>
					<div className="projectTitle"><h3>{props.name}</h3></div>
					<a href={props.projectUrl} style={{color: '#dd425c'}} target="_blank">Visit Website</a>
				</div>
			</div>
		</div>
	);
};


