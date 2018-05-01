import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Button( props ) {
      return(
        <div>
        	<a href={props.pathname}>
						<button className = "btn btn-primary" title={props.title}>
            	{props.title}
	          </button>
          </a>
				</div>	
        )
		  }

export default Button;