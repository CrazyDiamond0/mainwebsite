import React from 'react';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'
import './index.css'
import Body from './components/Body'

function App(){

    return(
        <div>
        <ParticleBackground ></ParticleBackground>
        <NavigationBar></NavigationBar>
        <Body></Body>

        <Footer></Footer>
        </div>
        )


}

export default App;