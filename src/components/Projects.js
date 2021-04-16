import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";
import "../index.css";
import mainpage from "../resources/mainpage.png";
import chatapp from "../resources/chatapp.png";
import arithmeticapp from "../resources/arithmeticapp.png";
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
          <Carousel.Item interval={5000}>
            <motion.div whileHover={{ opacity: 0.5, scale: 1.2 }}>
              <div>
                <a href="https://alexpopovici.netlify.app/">
                  <Card.Img variant="top" src={mainpage} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3>Main Website</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/*https://drive.google.com/file/d/1MUsXjd5Df-VLBEv_siku-cUqLz3MPcNH/view?usp=sharing*/}

          <Carousel.Item interval={5000}>
            <motion.div whileHover={{ opacity: 0.5, scale: 1.2 }}>
              <div>
                <a href="https://drive.google.com/file/d/1MUsXjd5Df-VLBEv_siku-cUqLz3MPcNH/view?usp=sharing">
                  <Card.Img variant="top" src={chatapp} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3>Arithmetic Operations App</h3>
              <p>
                App that uses arithmetic operations in order to identify the
                movable objects in series of frames
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <motion.div whileHover={{ opacity: 0.5, scale: 1.2 }}>
              <div>
                <a href="https://drive.google.com/file/d/1MUsXjd5Df-VLBEv_siku-cUqLz3MPcNH/view?usp=sharing">
                  <Card.Img variant="top" src={arithmeticapp} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3>Simple Chat App</h3>
              <p>Simple chat app using Google Firebase</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
