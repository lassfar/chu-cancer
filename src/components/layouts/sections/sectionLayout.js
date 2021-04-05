import React from 'react'
import * as _style from 'scss/layouts/section.module.scss'
import * as _var from 'scss/_variables.module.scss'
import Devider from 'components/ui/devider'

const SectionLayout = ({ children, title, colorTitle, subtitle, bg, bgDivider }) => {
  return (
    <section className={`${_style.sectionLayout} ${bg || _var.bg_white}`}>
      <Devider bg={bgDivider} />
      { title && <h1 className={`${_style.sectionLayout__title} ${colorTitle || 'text_prwkle'}`}>{title}</h1> }
      { subtitle && <h2 className={_style.sectionLayout__subtitle}>{subtitle}</h2> }
      { children }
    </section>
  )
}

export default SectionLayout
