import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/speciality.module.scss'
import SectionLayout from 'components/layouts/sections/sectionLayout.js'
import {specialityList} from 'components/_data.js';

const Speciality = () => {
  const [specialities] = useState(specialityList)

  return (
    <SectionLayout title="Nos Spécialités" bgDevider={_var.bg_prwkle}>
      <div className={_style.speciality}>
        {specialities.map((spec, idx) => (
          <div className={_style.speciality__card} key={idx}>
            <div className={_style.speciality__cardHeader}>
              <img className={_style.speciality__cardImg} src={`${spec.imgUrl}`} alt={spec.desc} />
            </div>
            <div className={_style.speciality__cardBody}>
              <h3>{spec.title}</h3>
              <p>{spec.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Speciality
