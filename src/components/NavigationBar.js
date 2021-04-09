import React from 'react';
import logo from '../resources/mainpicture.jpg'
import '../index.css'



function NavigationBar(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container"> 

    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='...logo'/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume.pdf" download>Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
        </div>
  </nav>
  )



}

export default NavigationBar;