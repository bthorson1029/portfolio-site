import React, { Component } from 'react';
import '../App.js';
import ProjectsTemplate from './ProjectsTemplate.js';
import projectOneImage from '../images/projectOneImage.png';
import projectTwoImage from '../images/projectTwoImage.png';
import projectThreeImage from '../images/projectThreeImage.png';
import projectFourImage from '../images/projectFourImage.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Projects



const data = [
			{
		'name': 'Cady Studios',
		'date': 'January 2018',
		'type': 'UI/UX | Front End Development',
		'imageUrl': require('../images/projectOneImage.png'),
		'link': '/Projects/1',
		'brief': '',
		'tech': '',
	},
		{
		'name': 'SWP Connect',
		'date': 'March 2018',
		'type': 'UI/UX',
		'imageUrl': require('../images/projectTwoImage.png'),
		'link': '/Projects/2',
		'brief': '',
		'tech': '',
	},
	{
		'name': 'Carzilla',
		'date': 'November 2017',
		'type': 'UI/UX',
		'imageUrl': require('../images/projectThreeImage.png'),
		'link': '/Projects/3',
		'brief': '',
		'tech': '',
	},
	{
		'name': 'Stone Mountain Park',
		'date': 'September 2017',
		'type': 'UI/UX',
		'imageUrl': require('../images/projectFourImage.png'),
		'link': '/Projects/4',
		'brief': '',
		'tech': '',
	}	
];


function Project(props){
	return (
		<div>
			<Link to={props.link}>
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
}

class ProjectsSection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			works: []
		}
	}

	componentWillMount() {
		this.loadWork()
	}

	loadWork() {
		const works = []
		data.map(item => works.push(item))
		this.setState({ works })
		setTimeout(() => {
			console.log(this.state)
		}, 2000)
	}

	render() {
		const projects = this.state.works.map((project, index) => <div className="grid"><Project 
				name={project.name}
				date={project.date}
				type={project.type}
				imageUrl={project.imageUrl}
				link={project.link}
				brief={project.brief}
				tech={project.tech}
				key={index}
			/></div>)

		return (
			<div className="container">
				<div className="project-section">
					<h2>Recent Projects</h2>
						{ projects }
					</div>
				</div>
		)
	}
}



export default ProjectsSection;