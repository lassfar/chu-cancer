import React from "react"
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/jumbo.module.scss'
// import { StaticImage } from 'gatsby-plugin-image'


const Jumbo = () => {
  
  const bg = 'image/common/2.jpg' 
  const bgStyle = {
    backgroundImage: `linear-gradient(#00000070, #00000090), url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={_style.jumbo} style={bgStyle}>
      <div className={_style.jumbo__leftSection}>
        <h1 className={_style.jumbo__mainTitle}>
          Centre Mohammed VI Pour le traitement des cancers
        </h1>
        <p className={_style.jumbo__desc}>
          Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.
          Lorem Ipsum har været standard fyldtekst siden 1500-tallet,
          hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper.
        </p>
        <button className={`${_style.jumbo__btn} white_btn`}>
          En savoir plus
        </button>
      </div>
      <div className={_style.jumbo__rightSection}>
        {/* <img className={_style.jumbo__rightImg} src={'image/cancer/4.png'} alt="chu cancer jumbo" /> */}
      </div>
    </div>
  )
}

export default Jumbo
