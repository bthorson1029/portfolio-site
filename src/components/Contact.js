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

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "contact-form": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    this.setState({ buttonText: '...sending'});
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  
  render() {
    const { name, email, message } = this.state;
    return(
      <div className="contactCanvas container">
        <form className="contact-form form-group" onSubmit={this.handleSubmit}>
          <input type="hidden" name="contact-form" value="contact" />
          <input 
            onChange={this.handleChange}
            name="name" 
            className="form-control message-name" 
            type="text" 
            placeholder="Your Name" 
            value={name} />

          <input 
            onChange={this.handleChange} 
            name="email" 
            className="form-control message-email" 
            type="email" 
            placeholder="your@email.com" 
            required 
            value={email} />

          <textarea 
            onChange={this.handleChange}
            name="message" 
            className="form-control message-input" 
            type="text" 
            placeholder="Please write your message here" 
            value={message} 
            required />

          <div data-netlify-recaptcha="true"></div>

          <div className="buttonContainer">
            <button type="submit" className="btn btn-primary">{this.state.buttonText}</button>
          </div>
        </form>
        <ParticleModule />
      </div>
    )
  }
}

export default Contact;