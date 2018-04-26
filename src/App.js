import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import ProjectsSection from './components/ProjectsSection.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <ProjectsSection />
      </div>
    );
  }
}

export default App;
