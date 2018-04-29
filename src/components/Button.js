import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Button( props ) {
      return(
          <div>
						<button className = "btn btn-primary" title= {props.title}>
              <Link to="./images/logo.svg">{props.title}</Link>
	          </button>
					</div>	
          )
  }



export default Button;