import React from "react";
import Links from './Links';

function About({ linkedin, bio='', github }) {
  if (bio !== '') {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links git={github} linked={linkedin} /> 
      </div>
    )
  }
  else {
     return(
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links git={github} linked={linkedin} /> 
        </div>
    )
  }
} 

export default About;
