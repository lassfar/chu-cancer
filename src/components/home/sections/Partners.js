import React, { useState } from 'react'
import SectionLayout from 'components/layouts/sections/sectionLayout.js'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/_partner.module.scss'
import 'scss/home/_partner.module.scss'
import { partnerList } from 'components/_data.js'

const Partners = () => {
  const [partners] = useState(partnerList);

  return (
    <SectionLayout title="Nos Partenaires" bg={_var.bg_white} bgDivider={_var.bg_prwkle}>

      <div className={_style.partner}>
        {partners.map((item, idx) => (
          <div className={_style.partner__card} key={idx}>
            <img className={_style.partner__cardImg} src={item.imgUrl} alt={item.alt} />
          </div>
        ))}
      </div>

      <div className={_style.partner__circle} id={_style.pCircle1}></div>
      <div className={_style.partner__circle} id={_style.pCircle2}></div>

    </SectionLayout>
  )
}

export default Partners
