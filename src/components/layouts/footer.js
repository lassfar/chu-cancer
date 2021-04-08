import React, { useState } from "react"
import { Link } from "gatsby"
import Divider from 'components/ui/divider'
import DynamicIcon from 'components/ui/dynamic-icon'
import * as _style from 'scss/layouts/_footer.module.scss'
import { footerLinkList } from 'components/_data'

const Footer = () => {
  const [footerLinks] = useState(footerLinkList)

  return (
    <footer className={_style.footer}>
      <div className={_style.footer__infos}>

        <h1 className={_style.footer__title}>Centre Mohammed VI de traitement du cancer</h1>
        <Divider bg="bg_white" justify="flex-start" />

        <div className={_style.footer__links}>

          {footerLinks.map((item, idx) => (
            <div className={_style.footer__linksContainer} key={idx}>
              <h2 className={_style.footer__linksTitle}>{item.title}</h2>
              <div className={_style.footer__linkList}>
                {item.links.map((elem, idx) => (
                  <Link to={elem.to} className={_style.footer__linkItem} key={idx}>
                    <DynamicIcon className={_style.footer__linkItemIcon} iconName={elem.icon} />
                    <span className={_style.footer__linkItemText}>{ elem.text }</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

    </footer>
  )
}

export default Footer
