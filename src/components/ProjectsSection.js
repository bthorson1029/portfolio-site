import React, { Component } from 'react';
import '../App.js';
import Projects from './Projects.js';
import Project from './Project.js';



const data = [
			{
		'id': 1,
		'name': 'Cady Studios',
		'date': 'January 2018',
		'type': 'UI/UX | Front End Development',
		'imageUrl': require('../assets/images/projectOneImage.png'),
		'brief': '',
		'tech': '',
	},
		{
		'id': 2,
		'name': 'SWP Connect',
		'date': 'March 2018',
		'type': 'UI/UX',
		'imageUrl': require('../assets/images/projectTwoImage.png'),
		'brief': '',
		'tech': '',
	},
	{
		'id': 3,
		'name': 'Carzilla',
		'date': 'November 2017',
		'type': 'UI/UX',
		'imageUrl': require('../assets/images/projectThreeImage.png'),
		'brief': '',
		'tech': '',
	},
	{
		'id': 4,
		'name': 'Stone Mountain Park',
		'date': 'September 2017',
		'type': 'UI/UX',
		'imageUrl': require('../assets/images/projectFourImage.png'),
		'brief': '',
		'tech': '',
	}	
];



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
				id={project.id}
				name={project.name}
				date={project.date}
				type={project.type}
				imageUrl={project.imageUrl}
				brief={project.brief}
				tech={project.tech}
				key={project.id}
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



export {data};
export default ProjectsSection;