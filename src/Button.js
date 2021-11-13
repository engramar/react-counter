import React, { Component } from "react";
import './App.css';

function Button(props) {
  
  const handleClick = () => props.onClickFunction(props.increment); 

	return (
    <button onClick={handleClick}>
      +{props.increment}      
    </button>
  );

}

export default Button;