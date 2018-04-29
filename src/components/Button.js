import React, {Component} from 'react';


function Button( props ) {
      return(
          <button className = "btn btn-primary"
                    title= {props.title}
                    onClick = {
                        (e) => { e.preventDefault(); {props.onClick} } }>
              {props.title}
          </button>)
  }



export default Button;