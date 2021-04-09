import React from 'react';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'
import './index.css'

function App(){

    return(
        <div>
        <ParticleBackground ></ParticleBackground>
        <NavigationBar></NavigationBar>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer></Footer>
        </div>
        )


}

export default App;