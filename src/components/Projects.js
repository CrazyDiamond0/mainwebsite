import React from 'react'
import {Card,Row,Col,Container } from 'react-bootstrap'
import '../index.css'
import img from '../resources/mainpicture.jpg'
import { motion } from "framer-motion"


const card=
<motion.div initial={{ opacity:0.5 }} whileHover={{ opacity:1,scale:1.1 }}>
<div className="border-image-projects">
<Card.Img variant="top" src={img} />
</div>
</motion.div>

export default function Projects(){
   return( 
    <Container id="projects" className="project-container">
      <h2 style={{color:"white",position:'relative',top:'40px'}}>Projects</h2>
    <Row>
    
    
    <Col>{card}</Col>
    <Col>{card}</Col>
    <Col>{card}</Col>
  
    </Row>




    </Container>

   )
}