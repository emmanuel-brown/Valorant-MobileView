import React, {useState, useEffect} from 'react'
import ValorantImg from '../images/valorant_4_White.png'
import { FaCaretRight, FaCaretLeft  } from 'react-icons/fa'

const Menu = props =>{
    const { reference, close } = props

    const [ addition, setAddition ] = useState(null)

    function Adding(name, list){
        this.name = name
        this.list = list
    }

    const GameInfo = new Adding("GAME INFO", ["AGENTS", "MAPS", "ARSENAL"])
    const Support = new Adding("SUPPORT", ["SPECS", "SUPPORT", "COMMUNITY CODE"])
    const adds = { GameInfo, Support}
    const options = []
    if(addition && addition.length > 3){
        adds[addition].list.map(opt =>(
            options.push(
                <div className="option" key={opt}>
                    <h2 className="option-txt">{opt}</h2>
                </div>
            )
        ))
    }

    return(
        <>
            <div id="Menu" ref={reference}>
                <div className="head">
                    <img className="head-img" src={ValorantImg} alt=""/>
                    <div className="head-exit" onClick={close}>
                        <span className="head-exit-x">x</span>
                    </div>
                </div>
                <div className="option">
                    <h2 className="option-txt">PLAY NOW</h2>
                </div>
                <div className="option" onClick={() => setAddition("GameInfo")}>
                    <h2 className="option-txt">GAME INFO</h2>
                    <FaCaretRight className="option-caret"/>
                </div>
                <div className="option">
                    <h2 className="option-txt">MEDIA</h2>
                </div>
                <div className="option">
                    <h2 className="option-txt">NEWS</h2>
                </div>
                <div className="option" onClick={() => setAddition("Support")}>
                    <h2 className="option-txt">SUPPORT</h2>
                    <FaCaretRight className="option-caret"/>
                </div>
                <div className="option">
                    <h2 className="option-txt">IGNITION SERIES</h2>
                </div>
                <div id="added" style={{display: `${addition? "block" : "none"}`}}>
                    <div className="head">
                        <FaCaretLeft onClick={() => setAddition("")}/>
                        <h2 className="head-txt">{addition && adds[addition].name}</h2>
                        <div className="head-exit" onClick={close}>
                            <span className="head-exit-x">x</span>
                        </div>
                    </div>
                    {options}
                </div>
            </div>
        </>
    )
}

export default Menu