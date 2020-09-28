import React from 'react'
import Intro from '../../components/home/Intro'
import TheAgents from '../../components/home/TheAgents'
import WeAreValorant from '../../components/home/WeAreValorant'
import TheMaps from '../../components/home/TheMaps'
import StayConnected from '../../components/home/StayConnected'
import './home.scss'

const Home = () =>{
    return(
        <main id="home">
            <Intro />
            <WeAreValorant />
            <TheAgents />
            <TheMaps />
            <StayConnected />
        </main>
    )
}

export default Home