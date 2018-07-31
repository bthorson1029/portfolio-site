import React, { Component } from 'react';
import '../App.js';
import Projects from './Projects.js';
import Project from './Project.js';
import ParticleModule from './ParticleModule.js';



const data = {
			projects: [ 
				{
					'id': 1,
					'name': 'Cady Studios',
					'date': 'January 2018',
					'type': 'UI/UX Design | Front End Development',
					'projectUrl': 'https://store.cadystudios.com/',
					'imageUrl': require('../assets/images/projectOneImage.png'),
					'projectImage': require('../assets/images/CS-Project-4.png'),
					'brief': 'To build a responsive and intuitive photo ordering and appointment scheduling platform built on the Kentico CMS. The Kentico CMS backend was required to allow marketing and manangment positions to make adjustments to the website quickly and easily.',
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
				},
				{
					'id': 2,
					'name': 'SWP Connect',
					'date': 'March 2018',
					'type': 'UI/UX Design',
					'projectUrl': 'https://swpconnect.com/',
					'imageUrl': require('../assets/images/projectTwoImage.png'),
					'projectImage': require('../assets/images/SWP-Project-1.png'),
					'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur quo, harum temporibus veritatis sapiente aliquam. Perferendis reprehenderit dolorum eius, harum necessitatibus. Placeat voluptatum soluta, veniam impedit ullam temporibus. Laboriosam.',
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
					'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sit saepe, ducimus velit officia rem similique aliquid, quisquam magnam ea id fuga est facere dicta iste consequuntur minus adipisci maiores?',
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
					'name': 'Stone Mountain Park',
					'date': 'September 2017',
					'type': 'UI/UX Design',
					'projectUrl': 'https://www.stonemountainpark.com/',
					'imageUrl': require('../assets/images/projectFourImage.png'),
					'projectImage': require('../assets/images/StoneMountain-iPhone.png'),
					'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ducimus mollitia, impedit voluptatibus minima rerum, cumque, maxime repudiandae et voluptas iure dolorem asperiores, illum voluptate? Repudiandae quis magnam enim, quidem.',
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
					'name': 'Adelman Travel Group',
					'date': 'August 2017',
					'type': 'UI/UX Design',
					'projectUrl': 'https://www.adelmantravel.com/',
					'imageUrl': require('../assets/images/Adelman-ProjectPhoto.png'),
					'projectImage': require('../assets/images/StoneMountain-iPhone.png'),
					'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ducimus mollitia, impedit voluptatibus minima rerum, cumque, maxime repudiandae et voluptas iure dolorem asperiores, illum voluptate? Repudiandae quis magnam enim, quidem.',
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
			/></div>)

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