import React, { Component } from "react";
import Slider from "react-slick";
import Project from './Project.js';
import ProjectsSection from './ProjectsSection.js';
import {data} from './ProjectsSection.js';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      fade: true,
      lazyLoad: true
    };
    return (
      <Slider {...settings}>
        {this.props.slides.map(slide => {
        		return <div><img className="img-fluid" src={slide} key={slide.id} alt={this.props.name + ' Project Images'}/></div>
        	})}
      </Slider>
    );
  }
}
