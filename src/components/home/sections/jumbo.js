import React from "react"
import * as _style from 'scss/home/jumbo.module.scss'
import { StaticImage } from 'gatsby-plugin-image'


const Jumbo = () => {
  return (
    <div className={_style.jumbo}>
      <div className={_style.jumbo__leftSection}>
        <h1 className={_style.jumbo__mainTitle}>
          Centre Mohammed VI Pour le traitement de cancer
        </h1>
        <p className={_style.jumbo__desc}>
          Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.
          Lorem Ipsum har været standard fyldtekst siden 1500-tallet,
          hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper.
        </p>
        <button className={`${_style.jumbo__btn} primary_btn`}>
          En savoir plus
        </button>
      </div>
      <div className={_style.jumbo__rightSection}>
        <StaticImage className={_style.jumbo__rightImg} src="../../../images/cancer/1.png" alt="chu cancer jumbo" />
      </div>
    </div>
  )
}

export default Jumbo
