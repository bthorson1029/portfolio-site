import React, { Component } from 'react';
import '../App.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleModule from './ParticleModule.js';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", buttonText: "Send Message" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.formSent())
      .catch(error => alert(error));
    
    e.preventDefault();
    this.setState({ buttonText: "...sending"});
  };

  formSent = () => {
    setTimeout(function () {
      this.setState({
        buttonText: "Message Sent! Thank You!",
        sent: true
      })
      this.resetForm();
    }.bind(this), 2500);
  }

  resetForm = () => {
    setTimeout(function () {
      this.setState({
        name: "",
        message: "",
        email: "",
        buttonText: "Send Message"
      })
    }.bind(this), 2000)

  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  
  render() {
    const { name, email, message } = this.state;
    return(
      <div className="contactCanvas container">
        <div className="projects-title">
          <h1>Contact</h1>
        </div>
        <form name="contact-form" className="contact-form form-group" method="post" onSubmit={this.handleSubmit}>
          <input type="hidden" name="contact-form" value="contact" />
          <div className="form-label-group">
          <input 
            onChange={this.handleChange}
            name="name" 
            className="form-control message-name" 
            type="text" 
            placeholder="Name" 
            value={name} />
          <label for="name">Name</label>
          </div>

          <div className="form-label-group">
          <input 
            onChange={this.handleChange} 
            name="email" 
            className="form-control message-email" 
            type="email" 
            placeholder="Email" 
            required 
            value={email} />
            <label for="email">Email</label>
          </div>

          <div className="form-label-group">
          <textarea 
            onChange={this.handleChange}
            name="message" 
            className="form-control message-input" 
            type="text" 
            placeholder="Please write your message here" 
            value={message} 
            required />
            <label for="message">Message</label>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <div className="buttonContainer">
            <button type="submit" className="btn btn-primary btn-block">{this.state.buttonText}</button>
          </div>
        </form>
        <ParticleModule />
      </div>
    )
  }
}

export default Contact;