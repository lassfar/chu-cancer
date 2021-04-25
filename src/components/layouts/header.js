import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as _style from "scss/layouts/header.module.scss"
import * as giIcon from 'react-icons/gi'

const Header = ({ siteTitle }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(null)
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth < 768) {
        setIsMenuHidden(true);
        let menu = document.querySelector('#menu');
        menu.classList.add('d_none');
      } else {
        setIsMenuHidden(false);
      }
      setScreenWidth(window.innerWidth);
    }
  }, [])

  const [links] = useState([
    { link: '/', text: 'Accueil' },
    { link: '/who-we-are', text: 'Qui somme-nous' },
    { link: '/our-specialities', text: 'Nos Spécialités' },
    { link: '/news', text: 'Actualités' },
    { link: '/contacts', text: 'Contact' },
  ]);
  
  const toggleMenu = () => {
    if (screenWidth < 768) {
      let menu = document.querySelector('#menu');
      menu.classList.toggle('d_none');
    }
  }

  return (
    <header>
      <div className={_style.header}>
        <div className={_style.header__logoContainer}>
          <img className={_style.header__logo} src="image/LogoFadwa.png" alt="chu cancer logo" />
          <button className={`${_style.header__menuBtn} ${!isMenuHidden && 'd_none'}`} onClick={() => toggleMenu()}>
            <giIcon.GiHamburgerMenu></giIcon.GiHamburgerMenu>
          </button>
        </div>
        <div className={`${_style.header__linkList} ${isMenuHidden === true && 'd_none'}`} id="menu">
          {links.map((link, idx) => (
              <Link className={_style.header__linkItem} to={link.link} key={idx} onClick={() => toggleMenu()}>
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
