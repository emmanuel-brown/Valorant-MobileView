import React from 'react'
import './button.scss'

const Button = props =>{
    const { txt, bgColor, color } = props
    return(
        <div id="button" style={{color}}>
            <span className="sideDash"></span>
            <span className="sideDash"></span>
            <span className="sideDash"></span>
            <span className="sideDash"></span>
            <div className="block" style={{backgroundColor: bgColor}}>
                <span className="box"></span>
                <span className="box"></span>
                <div className="slide"></div>
                <p className="txt">{txt}</p>
            </div>
        </div>
    )
}

export default Button