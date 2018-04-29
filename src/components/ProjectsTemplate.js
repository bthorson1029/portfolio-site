import React, { Component } from 'react';
import '../App.js';
import Button from './Button.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";







function ProjectsTemplate(props) {
	return(
			<div>
				<div className="projectHero" style="background:{props.imageUrl}">
					<div className="projectHeading">
						<h1>{props.name}</h1>
						<div className="projectInfoLeft">
							<div className="projectRole">
								<h5>Role</h5>
								<p>{props.type}</p>
							</div>
							<div className="projectTech">
								<h5>Tech</h5>
								<p>{props.tech}</p>
							</div>
							<div className="projectDate">
								<h5>Date</h5>
								<p>{props.date}</p>
							</div>
						</div>
						<div className="projectInfoRight">
							<div className="projectBrief">
								<h5>Brief</h5>
								<p>{props.brief}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}


export default ProjectsTemplate;