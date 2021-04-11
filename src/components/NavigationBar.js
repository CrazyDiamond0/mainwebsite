import React from 'react';
import logo from '../resources/mainpicture.jpg'
import '../index.css'
import {motion}from 'framer-motion'


function NavigationBar(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container"> 

    <motion.div
    animate={{scale:[0,1.2,1]}}
    ><a className="navbar-brand" href="https://www.instagram.com/alex.al.pop/"><img className='logo' src={logo} alt='...logo'/></a></motion.div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
      
        <li className="nav-item active">
          <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume.pdf" download>Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
        </div>
  </nav>
  )



}

export default NavigationBar;