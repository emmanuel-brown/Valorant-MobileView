import React from 'react'
import Intro from '../../components/home/Intro'
import TheAgents from '../../components/home/TheAgents'
import WeAreValorant from '../../components/home/WeAreValorant'
import TheMaps from '../../components/home/TheMaps'
import './home.scss'

const Home = () =>{
    return(
        <main id="home">
            <Intro />
            <WeAreValorant />
            <TheAgents />
            <TheMaps />
        </main>
    )
}

export default Home