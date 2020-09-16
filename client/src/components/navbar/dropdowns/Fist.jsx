import React from 'react'
import RiotGames from '../images/Riot_games_black.png'

const Fist = props =>{
    const { reference, close } = props
    return(
        <div id="Fist" ref={reference}>
            <section className="sect sect-1">
                <img className="sect-1-img" src={RiotGames} alt="riot games"/>
                <div className="sect-1-exit" onClick={close}>
                    <span className="sect-1-exit-x">x</span>
                </div>
            </section>
            <section className="sect sect-2">
                <h2 className="sect-2-name">Riot Games</h2>
                <div className="sect-2-point">
                    <span className="sect-2-point-line"></span>
                    <span className="sect-2-point-line"></span>
                </div>
            </section>
            <section className="sect sect-3">
                <div className="sect-3-block">
                    <img className="sect-3-block-img1" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt71a69bdf084931df/5f46c11da11538653ea5823c/KDA-RiotBar-PromoCard.jpg??&format=pjpg&quality=85" alt=""/>
                    <p className="sect-3-block-txt">
                        Witness K/DA's comeback with their pre-release single, THE BADDEST, out now.
                    </p>
                </div>
                <div className="sect-3-block">
                    <img className="sect-3-block-img1" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltf4e78bfeba9e6468/5f40a61ae65e3223c60429d7/REVIEW-PSD-1-Launch_Riot_Bar_660x428.png??&format=pjpg&quality=85" alt=""/>
                    <p className="sect-3-block-txt">
                        A new Targon-themed expansion for Legends of Runteterra is available now!
                    </p>
                </div>
                <div className="sect-3-boxes">
                    <div className="sect-3-boxes-box">
                        <img className="sect-3-boxes-box-img" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt091f43c0c09e2520/5db7721ae9d7526ab429fe8f/LOL---Marquee-Two---x2-Asset.png??&format=pjpg&quality=85" alt=""/>
                        <p className="sect-3-block-txt">Play Now</p>
                    </div>
                    <div className="sect-3-boxes-box">
                        <img className="sect-3-boxes-box-img" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt893f1ace027e0a15/5e738e8982f4cf42bbba3ba2/tft-mobile-launch-riot-gamecard-318x428.jpg??&format=pjpg&quality=85" alt=""/>
                        <p className="sect-3-block-txt">Play Now</p>
                    </div>
                </div>
                <div className="sect-3-boxes">
                    <div className="sect-3-boxes-box">
                        <img className="sect-3-boxes-box-img" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt239aaca15ea6bfd5/5f40a5ea5e0cc01e7b8792ea/REVIEW-SET3_RIOTBAR_318X428.png??&format=pjpg&quality=85" alt=""/>
                        <p className="sect-3-block-txt">Play Now</p>
                    </div>
                    <div className="sect-3-boxes-box">
                        <img className="sect-3-boxes-box-img" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blte94074969e8e82fe/5e618391d5a7d573058228ba/Riot_Nav_Bar_Graphic_318x428.jpg??&format=pjpg&quality=85" alt=""/>
                        <p className="sect-3-block-txt">Play Now</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fist