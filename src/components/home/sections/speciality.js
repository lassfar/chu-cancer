import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/speciality.module.scss'
import SectionLayout from 'components/layouts/sections/section-layout'
import {specialityList} from 'components/_data';

const Speciality = () => {
  const [specialities] = useState(specialityList)

  return (
    <SectionLayout title="Nos Spécialités" bg={_var.bg_white} bgDivider={_var.bg_prwkle}>
      <div className={_style.speciality}>
        {specialities.map((item, idx) => (
          <div className={_style.speciality__card} key={idx}>
            <div className={_style.speciality__cardHeader}>
              <img className={_style.speciality__cardImg} src={`${item.imgUrl}`} alt={item.desc} />
            </div>
            <div className={_style.speciality__cardBody}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Speciality
