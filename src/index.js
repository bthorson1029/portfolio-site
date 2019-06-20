import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


setTimeout(() => {
  ReactDOM.render(
    <App
      hideLoader={this.hideLoader}
      showLoader={this.showLoader}
    />, 
    document.getElementById('root'));
  registerServiceWorker();

}, 1000);