import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';



function Follow() {
  return (
    <div className="signup-content">

    <h2>Follow Us!
    </h2>
        <div className="social-media-icons">
              <a
                href="https://www.facebook.com/BeniciaBMA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" className="cardIcon"
                style={{ color: '#316FF6'}} />
              </a>
              <a
                href="https://www.instagram.com/beniciabma/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="cardIcon" 
                  style={{
                    color: "#cd486b"}}
                />
              </a>
              <a
                href="https://www.yelp.com/biz/benicia-boxing-and-martial-arts-benicia"
                target="_blank"
                rel="noopener noreferrer"

              >
                <FontAwesomeIcon icon={faYelp} size="2x" className="cardIcon" style={{ color: '#c41200'}} />
              </a>
            </div>




  
    <div className="signup-box">


    
    </div>
  </div>
  );
}

export default Follow;