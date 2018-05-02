import React from 'react';
import '../App.js';
import ProjectsSection from './ProjectsSection.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export default function Project(props){

	const projectId = props.id;

	return (
		<div>
			<Link to={`/Projects/${projectId}`}>
			<div className="project">
				<figure className="effect-sadie">
					<img className="projectImage img-fluid"
						src={props.imageUrl}
						alt={props.name}
						/>
					<figcaption>
							<div className="projectInfoSmall">
								<div className="projectType"><p>{props.type}</p></div>
							</div>
							<div className="projectTitle"><h2>{props.name}</h2></div>
					</figcaption>
				</figure>
			</div>
			</Link>
		</div>
	);
};


