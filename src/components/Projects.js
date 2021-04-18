import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";
import "../index.css";
import mainpage from "../resources/mainpage.png";
import chatapp from "../resources/chatapp.png";
import arithmeticapp from "../resources/arithmeticapp.png";
import { motion } from "framer-motion";
import randomfrenchies from "../resources/randomfrenchies.png";

export default function Projects() {
  return (
    <div className="background-projects">
      <Container
        id="projects"
        className="project-container"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <h3
          style={{
            borderTop: "1rem solid #343a40",
            color: "white",
            top: "40px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Projects
        </h3>
        <Carousel className="carousel">
          <Carousel.Item interval={5000}>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
            >
              <div>
                <a href="https://alexpopovici.netlify.app/">
                  <Card.Img variant="top" src={mainpage} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3 className="robotoclass">Main Website</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/*https://drive.google.com/file/d/1MUsXjd5Df-VLBEv_siku-cUqLz3MPcNH/view?usp=sharing*/}

          <Carousel.Item interval={5000}>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
            >
              <div>
                <a href="https://drive.google.com/file/d/1MUsXjd5Df-VLBEv_siku-cUqLz3MPcNH/view?usp=sharing">
                  <Card.Img variant="top" src={arithmeticapp} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3 className="robotoclass">Arithmetic Operations App</h3>
              <p className="robotoclass">
                App that uses arithmetic operations in order to identify the
                movable objects in a series of frames
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
            >
              <div>
                <a href="https://chattingapp-e6186.web.app/">
                  <Card.Img variant="top" src={chatapp} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3 className="robotoclass">Simple Chat App</h3>
              <p className="robotoclass">
                Simple chat app using Google Firebase
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <motion.div
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
            >
              <div>
                <a href="https://randomfrenchie.netlify.app/">
                  <Card.Img variant="top" src={randomfrenchies} />
                </a>
              </div>
            </motion.div>
            <Carousel.Caption>
              <h3 className="robotoclass">Random Frenchie</h3>
              <p className="robotoclass">
                App that uses the dog-api to show a picture of a random frenchie
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
