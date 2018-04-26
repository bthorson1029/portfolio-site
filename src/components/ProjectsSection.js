import React, { Component } from 'react';
import '../App.js';
import projectOneImage from '../images/projectOneImage.png';
import projectTwoImage from '../images/projectTwoImage.png';
import projectThreeImage from '../images/projectThreeImage.png';
import projectFourImage from '../images/projectFourImage.png';


// Projects

const projectOne = {
	name: 'Cady Studios',
	date: 'Jan 2018',
	type: 'UI/UX | Web Design',
	imageUrl: '',
};

const projectTwo = {
	name: 'Strategic Wealth Partners',
	date: 'March 2018',
	type: 'Landing Page Design',
	imageUrl: '',
};

const projectThree = {
	name: 'Carzilla',
	date: 'November 2017',
	type: 'Landing Page Design',
	imageUrl: '',
};

const projectFour = {
	name: 'Stone Mountain Park',
	date: 'October 2017',
	type: 'UI/UX | App Design',
	imageUrl: '',
};


const projectFive = "Project Five";


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
								<div className="projectType"><p>{props.type}</p></div>
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
							type={projectOne.type}
							imageUrl={projectOneImage}
							 />
					</div>
					<div className="grid">
						<Project 
							name={projectTwo.name}
							type={projectTwo.type}
							imageUrl={projectTwoImage}
							 />
					</div>
					<div className="grid">
						<Project 
							name={projectThree.name}
							type={projectThree.type}
							imageUrl={projectThreeImage}
							 />
					</div>
					<div className="grid">
						<Project 
							name={projectFour.name}
							type={projectFour.type}
							imageUrl={projectFourImage}
							 />
					</div>

				</div>
			</div>
		)
	}
}



export default ProjectsSection;