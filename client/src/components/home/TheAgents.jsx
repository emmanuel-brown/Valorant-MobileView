import React from 'react'
import ReynaRaze from '../../components/home/images/ReynaRaze.mp4'
import Button from '../defaults/button'

const TheAgents = () =>(
    <section id="TheAgents">
        <span className="stripeHorizontal"></span>
        <span className="stripeV"></span>
        <h2 className="head">THE AGENTS</h2>
        <h3 className="subHead">PLANT THE SPIKE</h3>
        <p className="details">
            Agents and their signature abilities are how you win with skill and style. 
            Adapt and outplay in the role of either a Duelist, Initiator, Controller, 
            or Sentinel.
        </p>
        <video autoPlay loop muted className="video">
            <source src={ReynaRaze} type='video/mp4' />
        </video>
        <div className="button">
            <Button txt="VIEW ALL AGENTS" color="#111111" bgColor="#F7F7F7"/>
        </div>
    </section>
)

export default TheAgents