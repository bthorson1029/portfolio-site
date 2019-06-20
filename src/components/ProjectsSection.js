import React, { Component } from 'react';
import '../App.js';
import Projects from './Projects.js';
import Project from './Project.js';
import ParticleModule from './ParticleModule.js';

const data = {
			projects: [ 
				{
					'id': 1,
					'name': 'Adelman Travel',
					'date': 'August 2017',
					'type': 'UI/UX Design',
					'projectUrl': 'https://www.adelmantravel.com/',
					'imageUrl': require('../assets/images/Adelman-ProjectPhoto.png'),
					'projectImage': require('../assets/images/StoneMountain-iPhone.png'),
					'brief': 'Adelman Travel Group is one of the largest private travel management companies in North America. I assisted the Adelman team by designing a new modern and responsive website.',
					'tech': 'Sketch, InVision, Adobe Illustrator, Adobe Photoshop',
					'slides': [
						require('../assets/images/Adelman-Homepage.png')
					],
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
											Deserunt minima quod nesciunt beatae nemo, cupiditate. 
											Obcaecati magnam possimus natus iste in autem itaque! 
											Natus mollitia eveniet totam odit dolorum odio iste nulla saepe praesentium excepturi quis iure esse ipsam, sint maiores a id quam perferendis ipsum amet. 
											Numquam odit deserunt esse quibusdam sapiente optio sunt facilis, delectus enim itaque quis non sit qui, eveniet incidunt vel in quasi rerum nulla, perferendis ducimus fuga! 
											Aspernatur consequuntur corporis recusandae adipisci, vero tenetur rem, quidem in tempore, possimus natus perspiciatis. 
											Harum ipsam distinctio, eos, aliquid maiores neque natus, illo adipisci, quos laboriosam recusandae.`,
				},
				{
					'id': 2,
					'name': 'SWP Connect',
					'date': 'March 2018',
					'type': 'UI/UX Design',
					'projectUrl': 'https://swpconnect.com/',
					'imageUrl': require('../assets/images/projectTwoImage.png'),
					'projectImage': require('../assets/images/SWP-Project-1.png'),
					'brief': 'For SWP Connect, I worked with the Vice President to design an approachable and informative landing page for their new educational series for those wanting to plan for retirement.',
					'tech': 'Sketch, InVision, Adobe Photoshop',
					'slides': [
							require('../assets/images/SWP-Project-1.png'),
					],
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
											Incidunt recusandae, deleniti corporis sunt odit molestiae nobis nesciunt. 
											Porro corporis velit, fugit totam culpa nesciunt sed cupiditate tempora officiis impedit enim quia rerum ipsum excepturi perspiciatis eos? 
											Placeat quibusdam est nulla blanditiis, et odio quia id magni, animi libero! Possimus illo voluptatibus, voluptatem quas nobis quos. 
											Velit pariatur illum veritatis dolores eius cumque ipsum accusamus itaque inventore animi, cupiditate voluptates maiores quibusdam quas neque! 
											Quos delectus quasi, enim est mollitia unde sunt quisquam molestias, asperiores provident voluptates id. 
											Explicabo error, ullam, cupiditate impedit sed debitis optio in consequuntur exercitationem eum porro?`,
				},
				{
					'id': 3,
					'name': 'Carzilla',
					'date': 'November 2017',
					'type': 'UI/UX Design',
					'projectUrl': 'http://carzillaapp.com/',
					'imageUrl': require('../assets/images/projectThreeImage.png'),
					'projectImage': require('../assets/images/CZ-Project-1.png'),
					'brief': 'Carzilla is a mobile app that aims to disrupt the car buying industry. I helped the Carzilla team design marketing materials including a newsletter that was sent out dealerships around the United States.',
					'tech': 'Sketch, InVision, Adobe Photoshop, Adobe Illustrator',
					'slides': [
							require('../assets/images/CZ-Project-1.png')
					],
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
											Enim nisi, fuga, illo cum dolore ratione nesciunt culpa, nemo rem sequi voluptate obcaecati! 
											Quisquam dolorum rem aliquam illum repudiandae, quia libero neque, cumque tempora esse excepturi incidunt id assumenda laudantium ea fuga ex eius adipisci labore asperiores molestiae vel. 
											Animi recusandae necessitatibus praesentium velit ipsum explicabo delectus a, fuga, reiciendis dolore, culpa laudantium illum omnis nobis aliquid nihil ea! 
											Laudantium voluptatibus, doloribus cupiditate eveniet, velit illum inventore, repellat ipsum, minima quaerat iusto tempora autem aspernatur! 
											A ipsam minima in nesciunt omnis iste nulla reiciendis ullam, totam ratione ipsum est possimus dolor.`,
				},
				{
					'id': 4,
					'name': 'Stone Mountain',
					'date': 'September 2017',
					'type': 'UI/UX Design',
					'projectUrl': 'https://www.stonemountainpark.com/',
					'imageUrl': require('../assets/images/projectFourImage.png'),
					'projectImage': require('../assets/images/StoneMountain-iPhone.png'),
					'brief': 'Stone Mountain Park, located in Atlanta, has a myriad of events and activities for those visiting the park. My job was to design a mobile app that would help new and veteran visitors figure out which activities would suit them the best.',
					'tech': 'Sketch, InVision, Adobe Illustrator',
					'slides': [
							require('../assets/images/StoneMountain-iPhone.png')
					],
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
											Deserunt minima quod nesciunt beatae nemo, cupiditate. 
											Obcaecati magnam possimus natus iste in autem itaque! 
											Natus mollitia eveniet totam odit dolorum odio iste nulla saepe praesentium excepturi quis iure esse ipsam, sint maiores a id quam perferendis ipsum amet. 
											Numquam odit deserunt esse quibusdam sapiente optio sunt facilis, delectus enim itaque quis non sit qui, eveniet incidunt vel in quasi rerum nulla, perferendis ducimus fuga! 
											Aspernatur consequuntur corporis recusandae adipisci, vero tenetur rem, quidem in tempore, possimus natus perspiciatis. 
											Harum ipsam distinctio, eos, aliquid maiores neque natus, illo adipisci, quos laboriosam recusandae.`,
				},
				{
					'id': 5,
					'name': 'Cady Studios',
					'date': 'January 2018',
					'type': 'UI/UX Design | Front End Development',
					'projectUrl': 'https://store.cadystudios.com/',
					'imageUrl': require('../assets/images/projectOneImage.png'),
					'projectImage': require('../assets/images/CS-Project-4.png'),
					'brief': 'For Cady Studios, I was tasked to build a responsive and intuitive photo ordering and appointment scheduling platform built on the Kentico CMS. The Kentico CMS backend was required to allow marketing and manangment positions to make adjustments to the website quickly and easily.',
					'tech': 'HTML, CSS, JS, Bootstrap, Kentico, Sketch, InVision, Adobe Illustrator',
					'slides': [
						require('../assets/images/CS-Project-Homepage.png'),
						require('../assets/images/CS-Project-Scenes.png'),
						require('../assets/images/CS-Project-Sessions.png'),
						require('../assets/images/CS-Project-Homepage-Mobile.png'),
						require('../assets/images/CS-Project-Scenes-Mobile.png'),
						require('../assets/images/CS-Project-Sessions-Mobile.png')
					],
					'content': `CadyStudios is a family-owned school photography business that specializes in magazine-quality photos for students of all backgrounds and interests.`,
				}
			],
			all: function() {return this.projects},	
			get: function(id) {
				const isProject = p => p.id === id;
				return this.projects.find(isProject)
			}
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
		data.projects.map(item => works.push(item))
		this.setState({ works })
		setTimeout(() => {
			console.log(this.state)
		}, 2000)
	}

	render() {
		const projects = this.state.works.map((project, index) => <div className="col-lg-4"><Project 
				id={project.id}
				name={project.name}
				date={project.date}
				type={project.type}
				imageUrl={project.imageUrl}
				brief={project.brief}
				tech={project.tech}
				projectUrl={project.projectUrl}
				key={index}
		/></div>).reverse()

		return (
			<div className="projectsCanvas">
				<div className="container">
					<div className="projects-title">
						<h1>Work</h1>
					</div>
						<div className="projectsArea">
							<div className="row">
								{ projects }
							</div>
						</div>
					</div>
					<ParticleModule />
				</div>
		)
	}
}



export {data};
export default ProjectsSection;