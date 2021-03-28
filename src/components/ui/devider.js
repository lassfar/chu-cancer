import React from 'react'
import * as _style from 'scss/layouts/section.module.scss'

const Devider = ({ bg }) => {
  
  return (
    <div className={_style.section__devider}>
      <hr className={`${_style.section__deviderLine} ${bg}`} />
    </div>
  )
}

export default Devider
