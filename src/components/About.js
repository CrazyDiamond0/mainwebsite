import React from 'react'
import {Container} from 'react-bootstrap'
import logo from '../resources/mainpicture.jpg'

export default function About(){
    return(
        <div className="aboutpage" data-toggle="collapse" data-target=".navbar-collapse.show">
        <Container id="about" className="aboutwindow" >
            <a className="navbar-brand"><img className='about-image' src={logo} alt='...logo'/></a>
        </Container>
        </div>

    )



}