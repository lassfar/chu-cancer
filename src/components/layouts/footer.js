import React from "react"
import Devider from 'components/ui/devider'
import * as _style from 'scss/layouts/_footer.module.scss' 
import { Link } from "gatsby"


const Footer = () => {
  return (
    <footer className={_style.footer}>
      <div className={_style.footer__infos}>

        <h1 className={_style.footer__title}>Centre Mohammed VI de traitement du cancer</h1>
        <Devider bg="bg_white" justify="flex-start" />

        <div className={_style.footer__links}>

          <div className={_style.footer__linksContainer}>
            <h2 className={_style.footer__linksTitle}>Plan du site</h2>
            <div className={_style.footer__linkList}>
              <Link className={_style.footer__linkItem} to="#">Actualités</Link>
              <Link className={_style.footer__linkItem} to="#">Nos spécialités</Link>
              <Link className={_style.footer__linkItem} to="#">Qui somme-nous</Link>
              <Link className={_style.footer__linkItem} to="#">Contacts</Link>
            </div>
          </div>
          
          <div className={_style.footer__linksContainer}>
            <h2 className={_style.footer__linksTitle}>Contact Infos</h2>
            <div className={_style.footer__linkList}>
              <Link className={_style.footer__linkItem} to="#">06 66 00 00 00</Link>
              <Link className={_style.footer__linkItem} to="#">
                Centre Hospitalier Universitaire Mohammed VI
                Route de Casa Km 17 BP 398
                Casablanca, Maroc
              </Link>
              <Link className={_style.footer__linkItem} to="#">contact@email.com</Link>
            </div>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
