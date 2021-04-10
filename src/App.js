import React from 'react';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'
import './index.css'
import Body from './components/Body'
import FacebookMessager from './components/FaceBookMessager'
import Projects from './components/Projects'


function App(){

    return(
        <div>
        <ParticleBackground ></ParticleBackground>
        <Body></Body>
        <NavigationBar></NavigationBar>
        <FacebookMessager></FacebookMessager>
        <Projects></Projects>
        <Footer></Footer>
        </div>
        )


}

export default App;