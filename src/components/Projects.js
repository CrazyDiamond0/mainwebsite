import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";
import "../index.css";
import img from "../resources/mainpicture.jpg";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="background-projects">
      <Container
        id="projects"
        className="project-container"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <h2 style={{ color: "white", top: "40px" }}>Projects</h2>
        <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <motion.div whileHover={{ opacity: 0.5, scale: 1.2 }}>
              <div>
                <Card.Img variant="top" src={img} />
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <motion.div whileHover={{ opacity: 0.5, scale: 1.2 }}>
              <div>
                <Card.Img variant="top" src={img} />
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <motion.div whileHover={{ opacity: 0.5, scale: 1.2 }}>
              <div>
                <Card.Img variant="top" src={img} />
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
