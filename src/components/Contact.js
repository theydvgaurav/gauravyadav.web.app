import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    
    return (
    <div className="container-fluid">
    
    <div className="row align-items-start">
    <div className="col">
    <div className="contact-info">
      <a href = "https://www.google.co.in/maps/place/Indian+Institute+Of+Information+Technology+Sonepat/@28.9527207,77.1020843,17z/data=!4m5!3m4!1s0x390dadd1ccaa6249:0x79dedc8ba40cf3ac!8m2!3d28.9528937!4d77.1036983">
          <h1>IIT Delhi Technopark, Sonepat(Haryana) - 131021</h1></a>
    </div>
    </div>
    <div className="col">
    <div className="main-info">
    <FontAwesomeIcon icon={faFacebookF} />
    </div>
    </div>
  </div>
</div>
    )
}

export default Contact
