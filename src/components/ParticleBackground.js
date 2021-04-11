import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from './particle-config';


export default function ParticleBackground(){
    return(
        <Particles  className="particlesbackground" params={ParticleConfig} data-toggle="collapse" data-target=".navbar-collapse.show"></Particles>
    )

}