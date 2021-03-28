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
      <p>Every person has their own unique story. Here is a glimpse into mine.</p>
      <p>My name is Gaurav Yadav currently I'm a Computer Science Engineering Student at the Indian Institute of Information Technology, Sonepat aka IIIT Sonepat. So far I'm experienced in  C/C++/Python/JavaScript, along with the knowledge of React, NodeJs.  </p>
      <p>I efficiently work on Linux and  Microsoft Windows as well. I have a keen interest in Cyber Security.</p>
    </div>
    </div>
  </div>
</div>
    )
}

export default About
