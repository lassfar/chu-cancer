import React from 'react'
import * as _style from 'scss/layouts/section.module.scss'
import * as _var from 'scss/_variables.module.scss'
import Devider from 'components/ui/devider'

const SectionLayout = ({ children, title, bg, bgDevider }) => {
  return (
    <section className={`${_style.sectionLayout} ${bg}`}>
      <Devider bg={bgDevider} />
      <h1 className={_style.sectionLayout__title}>{title}</h1>
      { children }
    </section>
  )
}

export default SectionLayout
