import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Contact() {
    
    return (
      <div className="cn_">
    <div className="container-fluid">
    
    <div className="row align-items-start">
    <div className="col">
    <div className="contact-info">
      <a href = "https://www.google.co.in/maps/place/Indian+Institute+Of+Information+Technology+Sonepat/@28.9527207,77.1020843,17z/data=!4m5!3m4!1s0x390dadd1ccaa6249:0x79dedc8ba40cf3ac!8m2!3d28.9528937!4d77.1036983">
          <h1>IIIT Sonepat, IIT Delhi Technopark, Sonepat(Haryana) - 131021</h1></a>
    </div>
    </div>
    <div className="col">
    <div className="main-info">
      <div className="c_d">
      <SocialIcon className="social_" url="https://twitter.com/gauravy55933775" />
      <SocialIcon className="social_" url="https://www.linkedin.com/in/gaurav-yadav-a5966b190/" />
      <SocialIcon className="social_" url="https://www.facebook.com/profile.php?id=100034463205120" />
      <SocialIcon className="social_" url="https://github.com/in/theydvgaurav" />
      <SocialIcon className="social_" url="https://discord.com/channels/782654896406265856/782654898118066190" />
      </div>
    </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Contact
