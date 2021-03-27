import React from 'react'
import ppic from './Gaurav.png'

function About() {
    return (
    <div className="container-fluid">
    
    <div className="row align-items-start">
    <div className="col">
     <img src = {ppic} className="img-fluid" alt = {"Profile"}></img>
    </div>
    <div className="col">
    <div className="main-info">
      <h2>Hi, I'm Gaurav.</h2>
      <p></p>
    </div>
    </div>
  </div>
</div>
    )
}

export default About
