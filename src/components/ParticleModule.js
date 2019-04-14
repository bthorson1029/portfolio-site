import React, { Component } from 'react';
import '../App.js';
import Particles from 'react-particles-js';

class ParticleModule extends Component {
	render() {
		return (
	      <Particles 
              params={{
            		particles: {
								    number: {
								      value: 80,
								      density: {
								        enable: true,
								        value_area: 4000
								      }
								    },
								    color: {
								      value: "#ff0030"
								    },
								    shape: {
								      type: "circle",
								      stroke: {
								        width: 0,
								        color: "#000000"
								      },
								      polygon: {
								        nb_sides: 4
								      },
								    },
								    opacity: {
								      value: 1,
								      random: false,
								      anim: {
								        enable: false,
								        speed: 1,
								        opacity_min: 0.1,
								        sync: false
								      }
								    },
								    size: {
								      value: 3,
								      random: true,
								      anim: {
								        enable: false,
								        speed: 40,
								        size_min: 0.1,
								        sync: false
								      }
								    },
								    line_linked: {
								      enable: true,
								      distance: 100,
								      color: "#ff0030",
								      opacity: 0.2,
								      width: 2
								    },
								    move: {
								      enable: true,
								      speed: 2,
								      direction: "none",
								      random: false,
								      straight: false,
								      out_mode: "out",
								      bounce: false,
								      attract: {
								        enable: false,
								        rotateX: 600,
								        rotateY: 1200
								      }
								    }
								  },
								  interactivity: {
								    detect_on: "canvas",
								    events: {
								      onhover: {
								        enable: true,
								        mode: "bubble"
								      },
								      onclick: {
								        enable: true,
								        mode: "push"
								      },
								      resize: true
								    },
								    modes: {
								      grab: {
								        distance: 400,
								        line_linked: {
								          opacity: 1
								        }
								      },
								      bubble: {
								        distance: 300,
								        size: 5,
								        duration: 2,
								        opacity: 10,
								        speed: 3
								      },
								      repulse: {
								        distance: 100,
								        duration: 0.4
								      },
								      push: {
								        particles_nb: 4
								      },
								      remove: {
								        particles_nb: 2
								      }
								    }
								  },
								  retina_detect: true
            	}}
              style={{
                width: '100%',
								background: `#fff`,
								position: 'fixed',
								zIndex: '-10',
								top: '0',
								left: '0',
              }}
            />
					)
				}
			}


export default ParticleModule;