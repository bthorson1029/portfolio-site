import React, { Component } from 'react';
import '../App.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { data } from './ProjectsSection.js';
import ParticleModule from './ParticleModule.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mailto from 'react-protected-mailto';


class CV extends Component {
  render() {
    return(
      <div>
        <div className="container cvContainer">
          <div className="row pb-5">
            <div className="col-12">
              <div className="nameTitleArea text-left">
                <h1 className="nameTitle">Bryce Thorson</h1>
                <h1 className="positionTitle">Software Designer + Front-End Developer</h1>
                <hr />
              </div>
              <div className="resumeContactInfo">
                <div className="contactEmail">
                  <FontAwesomeIcon icon="envelope" className="emailIcon" />
                  <Mailto
                    email="brycethorson.design@gmail.com"
                    headers={{ subject: "New Inquiry from Thorson Design Co." }}>
                  </Mailto>
                </div>
                <div className="contactSocial">
                  <FontAwesomeIcon icon={['fab', 'dribbble-square']} className="socialIcon" />
                  <a href="https://dribbble.com/bthorson1029" target="_blank">Dribbble</a>
                </div>
                <div className="contactSocial">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} className="socialIcon" />
                  <a href="https://www.linkedin.com/in/bryce-thorson-44a9a39a" target="_blank">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="rightColumn">
                <div className="profileArea">
                  <h4 className="cvSectionTitle">Profile</h4>
                  <hr />
                  <p>
                    I am a formally trained graphic designer & a self-taught developer who enjoys problem solving
                    and learning new things. I gravitate toward simple, clean, and clear design aethetics. Styles
                    such as Swiss Style and Bauhaus are some of my favorites to pull inpiration from. I love to
                    research new technologies in the industry, and to brainstorm on how I can use these new tools
                    in my exisiting works.</p>
                    <p>In my spare time, if I am not spending time with my lovely wife, Rajvee, and our silly cat, Marlow (Marby), I'm probably working on
                    side-projects, learning languages, baking sourdough, brewing kombucha, cooking, hiking, playing video games, or
                    just spending time with friends.
                    </p>
                </div>
                <div className="educationArea">
                  <h4 className="cvSectionTitle">Education</h4>
                  <hr />
                  <div className="cvContent educationContent">
                    <div className="dateArea educationDate">
                      <p>AUG 2011–MAY 2015</p>
                    </div>
                    <div className="cvItem educationItem">
                        <h5 className="educationTitle">Bachelor of Arts – Graphic Design</h5>
                        <h4 className="educationLocation">Piedmont College</h4>
                        <p class="educationDetails">Minor in Business Administration</p>
                        <p class="educationDetails">Graduated with Distinction</p>
                    </div>
                  </div>
                </div>
                <div className="experienceArea">
                  <h4 className="cvSectionTitle">Experience</h4>
                  <hr />
                  <div className="cvContent">
                    <div className="dateArea">
                      <p>JUN 2018–Present</p>
                    </div>
                    <div className="cvItem">
                      <h5>Software Designer + Developer Consultant</h5>
                      <h4>Improving Enterprises</h4>
                      <p>Previously known as Innovative Architects as of Jan 2019, Improving–Atlanta Enterprise is a confluence of skilled technology consultants currently located in Northeast Atlanta.
                        Since I started working at Improving as a member of the Interactive Team, I have worked on multiple enterprise-level applications and websites with a wide variety of technologies including, Angular, React, .Net, .NetNuke, and SharePoint Online.
                        During my time at Improving, I have offered consultant services ranging from User Experience, UI Design, Mobile Application Design, Logo Design, Responsive Web Design, Front-end Development, and Enterprise Application Architecture. 
                        I have utilized these services to deliver cutting-edge products for Improving's large portfolio of fantastic clients.
                      </p>
                    </div>
                  </div>
                  <div className="cvContent">
                    <div className="dateArea">
                      <p>AUG 2012–Present</p>
                    </div>
                    <div className="cvItem">
                      <h5>Freelance Designer + Developer</h5>
                      <h4>Thorson Design Co.</h4>
                      <p>Since 2012, I have owned and operateed my freelance business,
                          where I offer design and development services to companies large and small.</p>
                    </div>
                  </div>
                  <div className="cvContent">
                    <div className="dateArea">
                      <p>FEB 2016–OCT 2017</p>
                    </div>
                    <div className="cvItem">
                      <h5>Lead Designer</h5>
                      <h4>Blueprint</h4>
                      <p>As lead designer at Blueprint, I was in charge of handling all aspects of the creative side of the business.

Frequent tasks included working with and giving creative direction to junior designers, managing creative elements in video production projects, and the management of web, branding, and print projects from a creative standpoint. In addition to my daily tasks, I often led R&D for the company's creative production processes, workflows, and overall design strategy.</p>

                    </div>
                  </div>
                  <div className="cvContent">
                    <div className="dateArea">
                      <p>SEP 2015–FEB 2016</p>
                    </div>
                    <div className="cvItem">
                      <h5>Designer + Developer</h5>
                      <h4>Blueprint</h4>
                      <p>Starting out as a web designer and developer, my tasks at Blueprint included site performance audits, site migrations, wordpress management, SSL certifications, and general website maintenance as well as the design and production of custom wordpress websites.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div> 
      <ParticleModule />
      </div>
    )
  }
}



export default CV;