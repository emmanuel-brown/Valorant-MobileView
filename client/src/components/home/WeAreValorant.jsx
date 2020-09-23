import React from 'react'
import StripeH from '../defaults/stripe/stripeH'
import Overview from './images/GameOverview.jpg'
import Play from '../defaults/play.svg'

const WeAreValorant = () =>(
    <section id="WeAreValorant">
        <StripeH backgroundColor="#111111"/>
        <span className="stripeD"></span>
        <h2 className="heading">WE ARE VALORANT</h2>
        <h3 className="subheading">DEFY THE LIMITS</h3>
        <p className="description">
            VALORANT is your global competitive stage. It’s a 5v5 tac-shooter matchup 
            to plant or defuse the Spike in a one-life-per-round, 
            first to 13 series. More than guns and bullets,
            you’ll choose an Agent armed with adaptive, swift, and lethal abilities 
            that create opportunities to let your gunplay shine.
        </p>
        <p className="subdescription">Creativity is your greatest weapon</p>
        <div className="video">
            <span className="video-accent"></span>
            <div className="video-play">
                <img src={Play} alt=""/>
            </div>
            <img src={Overview} alt="" className="video-image"/>
        </div>
    </section>
)

export default WeAreValorant