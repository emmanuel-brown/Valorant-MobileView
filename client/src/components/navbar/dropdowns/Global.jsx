import React from 'react'

const Global = props =>{
    const { reference } = props
    return(
        <div id="Global" ref={reference}>
            <ul className="languages">
                <li className="languages-lang active">English(NA)</li>
                <li className="languages-lang">ENGLISH(EUW)</li>
                <li className="languages-lang">DEUTSCH</li>
                <li className="languages-lang">ESPANOL(EUW)</li>
                <li className="languages-lang">FRANCAIS</li>
                <li className="languages-lang">ITALIANO</li>
                <li className="languages-lang">POLSKI</li>
                <li className="languages-lang">PYCCKHH</li>
                <li className="languages-lang">TURKCE</li>
            </ul>
        </div>
    )
}

export default Global