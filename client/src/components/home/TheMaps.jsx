import React from 'react'
import Button from '../defaults/button'

const TheMaps = () =>(
    <section id="theMaps">
        <span className="stripeHorizontal"></span>
        <span className="stripeV"></span>
        <h2 className="head">The Maps</h2>
        <h3 className="subHead">Detonate or Defuse</h3>
        <p className="details">
            Haven. Bind. Split. Ascent. 
            Each a stage for a multitude of savvy plays, 
            agent clutches, and team strategies.
        </p>
        <img className="image" src="https://playvalorant.com/static/maps-03ebbf2c074f13a65af1dba0c80f767e.png" alt=""/>
        <div className="button">
            <Button color="#EBEBEB" bgColor="#FF4655" txt="View All Maps"/>
        </div>
    </section>
)

export default TheMaps