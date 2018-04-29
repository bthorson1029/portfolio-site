import React, { Component } from 'react';
import '../App.js';
import ProjectsTemplate from './ProjectsTemplate.js';
import projectOneImage from '../images/projectOneImage.png';
import projectTwoImage from '../images/projectTwoImage.png';
import projectThreeImage from '../images/projectThreeImage.png';
import projectFourImage from '../images/projectFourImage.png';


// Projects

const projectOne = {
	name: 'Cady Studios',
	date: 'January 2018',
	type: 'UI/UX | Web Design',
	imageUrl: '',
	brief: '',
	tech: '',
};

const projectTwo = {
	name: 'Strategic Wealth Partners',
	date: 'March 2018',
	type: 'Design',
	imageUrl: '',
	brief: '',
	tech: '',
};

const projectThree = {
	name: 'Carzilla',
	date: 'November 2017',
	type: 'Landing Page Design',
	imageUrl: '',
	brief: '',
	tech: '',
};

const projectFour = {
	name: 'Stone Mountain Park',
	date: 'September 2017',
	type: 'UI/UX | App Design',
	imageUrl: '',
	brief: '',
	tech: '',
};



//Project functional component

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
	render() {
		return (
			<div className="container-fluid">
				<div className="project-section">
					<div className="grid">
						<Project 
							name={projectOne.name}
							date={projectOne.date}
							imageUrl={projectOneImage}
							 />
					</div>
					<div className="grid">
						<Project 
							name={projectTwo.name}
							date={projectTwo.date}
							imageUrl={projectTwoImage}
							 />
					</div>
					<div className="grid">
						<Project 
							name={projectThree.name}
							date={projectThree.date}
							imageUrl={projectThreeImage}
							 />
					</div>
					<div className="grid">
						<Project 
							name={projectFour.name}
							date={projectFour.date}
							imageUrl={projectFourImage}
							 />
					</div>

				</div>
			</div>
		)
	}
}



export default ProjectsSection;