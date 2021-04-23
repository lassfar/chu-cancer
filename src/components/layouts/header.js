import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as _style from "scss/layouts/header.module.scss"
import * as giIcon from 'react-icons/gi'

const Header = ({ siteTitle }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth < 768) {
        setIsMenuHidden(true);
        let menu = document.querySelector('#menu');
        menu.classList.toggle('d_none');
      }
    }
  }, [])

  const [links, setLinks] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/our-specialities', text: 'Nos Spécialités' },
    { link: '/who-we-are', text: 'Qui somme-nous' },
    { link: '/contact', text: 'Contact' },
    { link: '/news', text: 'Actualités' },
  ]);
  
  const toggleMenu = () => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('d_flex');
    menu.classList.toggle('d_none');
  }

  return (
    <header>
      <div className={_style.header}>
        <div className={_style.header__logoContainer}>
          <img className={_style.header__logo} src="image/cancer/1.png" alt="chu cancer logo" />
          <button className={_style.header__menuBtn} onClick={() => toggleMenu()}>
            <giIcon.GiHamburgerMenu></giIcon.GiHamburgerMenu>
          </button>
        </div>
        <div className={_style.header__linkList} id="menu">
          {links.map((link, idx) => (
              <Link className={_style.header__linkItem} to={link.link} key={idx}>
                {link.text}
              </Link>
            ))
          }
        </div>


      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
