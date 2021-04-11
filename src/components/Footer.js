import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'



export default function Footer(){

    return (
            
            <footer className="footer bg-dark text-center text-white" data-toggle="collapse" data-target=".navbar-collapse.show">
               
            {/* Grid container */}
            <div className="container p-4 pb-0">
            
                {/* Section: Social media */}
                <section className="mb-4">
            
        
        
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/alex-popovici/" target="_blank" rel='noreferrer' role="button"><FontAwesomeIcon icon={faLinkedinIn}/></a>
            
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/CrazyDiamond0" target="_blank" rel='noreferrer' role="button"><FontAwesomeIcon icon={faGithub}/></a>
                </section>
                {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2021 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/"> Alex Popovici</a>
            </div>
            {/* Copyright */}
            </footer>

    
    )
}
  

