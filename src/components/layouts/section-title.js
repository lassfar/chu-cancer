import React from 'react'
import * as _style from 'scss/layouts/_sectionTitle.module.scss'
import Divider from './../ui/divider';

const SectionTitle = ({ title, bgImage, bgColor }) => {

  const bgStyle = {
    backgroundImage: `linear-gradient(#00000070, #00000090), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={`${_style.sectionTitle} ${bgColor || ''}`} style={{bgStyle}}>
      <h1 className={_style.sectionTitle__title}>
        { title }
      </h1>
      <Divider bg="bg_white" justify="initial" />
    </div>
  )
}

export default SectionTitle
