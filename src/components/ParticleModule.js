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
								      value: 60,
								      density: {
								        enable: true,
								        value_area: 1000
								      }
								    },
								    color: {
								      value: "#dd425c"
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
								      color: "#dd425c",
								      opacity: 0.4,
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
								        enable: false,
								        mode: "repulse"
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
								        distance: 400,
								        size: 40,
								        duration: 2,
								        opacity: 8,
								        speed: 3
								      },
								      repulse: {
								        distance: 200,
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
              }}
            />
					)
				}
			}


export default ParticleModule;