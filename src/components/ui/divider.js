import React from 'react'
import * as _style from 'scss/layouts/section.module.scss'

const Divider = ({ bg, justify }) => {
  
  return (
    <div className={_style.section__divider} style={{justifyContent: justify || 'center'}}>
      <hr className={`${_style.section__dividerLine} ${bg}`} />
    </div>
  )
}

export default Divider
