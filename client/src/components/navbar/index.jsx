import React, { useState } from 'react'
import Fist from './images/riot_fist_white_circle.png'
import Logo from './images/valorant_4_White.png'
import Internet from './images/internet_sign.png'
import { BsCaretDownFill } from 'react-icons/bs'
import FistMenu from './dropdowns/Fist'
import Global from './dropdowns/Global'
import Menu from './dropdowns/Menu'
import CloseClickOutside from './CloseClickOutside'


const Navbar = () =>{
    const [ dropDown, setDropDown ] = useState("")
    const clickedOutsideHandler = () =>{
        setDropDown("")
    }
    const { domNode } = CloseClickOutside(clickedOutsideHandler)
    const dropDowns = {
        FistMenu: <FistMenu reference={domNode} close={() => setDropDown("")}/>,
        Global: <Global reference={domNode}/>,
        Menu: <Menu reference={domNode} close={() => setDropDown("")} />
    }
    
    return(
        <>
            <nav id="navbar">
                <div className="section left" onClick={() => setDropDown("FistMenu")}>
                    <img className="fist" src={Fist} alt="fist_logo"/>
                    <BsCaretDownFill className="icon"/>
                </div>
                <div className="section middle">
                    <img className="val" src={Logo} alt="Valorant"/>
                </div>
                <div className="section right">
                    <img className="internet" src={Internet} alt="Internet symbol" onClick={() => setDropDown("Global")}/>
                    <div className="hamburger" onClick={() => setDropDown("Menu")}>
                        <span className="lines"></span>
                        <span className="lines"></span>
                        <span className="lines"></span>
                    </div>
                </div>
            </nav>
            <section id="dropdown" style={{display: `${dropDown ? "block" : "none"}`}}>
                {dropDowns[dropDown]}
            </section>
        </>
    )
}   

export default Navbar