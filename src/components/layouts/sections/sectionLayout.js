import React from 'react'
import * as _style from 'scss/layouts/section.module.scss'
import * as _var from 'scss/_variables.module.scss'
import Devider from 'components/ui/devider'

const SectionLayout = ({ children, title, subtitle, bg, bgDevider }) => {
  return (
    <section className={`${_style.sectionLayout} ${bg || 'bg_white'}`}>
      <Devider bg={bgDevider} />
      { title && <h1 className={_style.sectionLayout__title}>{title}</h1> }
      { subtitle && <h3 className={_style.sectionLayout__subtitle}>{subtitle}</h3> }
      { children }
    </section>
  )
}

export default SectionLayout
