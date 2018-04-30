import React, { Component } from 'react';
import '../App.js';
import ProjectsTemplate from './ProjectsTemplate.js';
import projectOneImage from '../images/projectOneImage.png';
import projectTwoImage from '../images/projectTwoImage.png';
import projectThreeImage from '../images/projectThreeImage.png';
import projectFourImage from '../images/projectFourImage.png';


// Projects



const data = [
			{
		'name': 'Cady Studios',
		'date': 'January 2018',
		'type': 'UI/UX | Web Design',
		'imageUrl': require('../images/projectOneImage.png'),
		'brief': '',
		'tech': '',
	},
		{
		'name': 'Strategic Wealth Partners',
		'date': 'March 2018',
		'type': 'Design',
		'imageUrl': require('../images/projectTwoImage.png'),
		'brief': '',
		'tech': '',
	},
	{
		'name': 'Carzilla',
		'date': 'November 2017',
		'type': 'Landing Page Design',
		'imageUrl': require('../images/projectThreeImage.png'),
		'brief': '',
		'tech': '',
	},
	{
		'name': 'Stone Mountain Park',
		'date': 'September 2017',
		'type': 'UI/UX | App Design',
		'imageUrl': require('../images/projectFourImage.png'),
		'brief': '',
		'tech': '',
	}	
];




function Project(props){
	return (
		<div>
			<div className="project">
				<figure className="effect-sadie">
					<img className="projectImage img-fluid"
						src={props.imageUrl}
						alt={props.name}
						/>
					<figcaption>
							<div className="projectInfoSmall">
								<div className="projectType"><p>{props.date}</p></div>
							</div>
							<div className="projectTitle"><h2>{props.name}</h2></div>
					</figcaption>
				</figure>
			</div>
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
				brief={project.brief}
				tech={project.tech}
			/></div>)

		return (
			<div className="container-fluid">
				<div className="project-section">
						{ projects }
					</div>
				</div>
		)
	}
}



export default ProjectsSection;