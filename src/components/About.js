import React from "react";
//import { Container, Row, Col } from "react-bootstrap";
import logo from "../resources/mainpicture.jpg";

export default function About() {
  return (
    <div
      className="aboutpage"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <div id="about" className="aboutwindow container">
        <div className="aboutcontainer">
          <div className="aboutcolimage">
            <img className="about-image" src={logo} alt="...logo" />
          </div>
          <div className="aboutcoltext">
            <label className="abouttext">
              Hi, I'm Alex and I'm a student at the Technical University of
              Cluj-Napoca, specialization in Telecomunications. My interests are
              primarily in Front-End Developer and Web design.
              <br />
              <br />I love to try and learn new programming languages and
              technologies, build beautiful websites, pushing my skills to the
              limit and challenge myself every time.
              <br />
              <br />
              In school, I’ve been working in image processing using arithmetic
              operations (using C#/Emgu CV) and now I’m currently working on my
              final project using image segmentation with hyper-spectral images.
            </label>
            <div className="aboutskillscontainer">
              <div className="labelabouttextskills">
                Skills
                <div className="labelaboutintermidiate">
                  Intermediate
                  <br />
                  <label className="labelabouttext">HTML</label>
                  <label className="labelabouttext">CSS</label>
                  <label className="labelabouttext">Javascript</label>
                  <label className="labelabouttext">React</label>
                </div>
                <div className="labelaboutbasic">
                  Basic
                  <br />
                  <label className="labelabouttext">Java</label>
                  <label className="labelabouttext">C/C++</label>
                  <label className="labelabouttext">C#</label>
                  <label className="labelabouttext">Python</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
