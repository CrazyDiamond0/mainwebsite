import React from "react";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import "./index.css";
import Body from "./components/Body";
import FacebookMessager from "./components/FaceBookMessager";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactButton from "./components/ContactButton";

function App() {
  return (
    <div>
      <ParticleBackground></ParticleBackground>
      <Body id="home"></Body>
      <NavigationBar></NavigationBar>
      <FacebookMessager></FacebookMessager>
      <About></About>
      <Projects id="projects"></Projects>
      <ContactButton></ContactButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
