import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/speciality.module.scss'
import SectionLayout from 'components/layouts/section-layout'
import {specialityList} from 'components/_data';

const Speciality = () => {
  const [specialities] = useState(specialityList)

  return (
    <SectionLayout title="Nos Spécialités" bg={_var.bg_white} colorTitle="text_lemonade" bgDivider={_var.bg_lemonade}>
      <div className={_style.speciality}>
        {specialities.map((item, idx) => (
          <div className={_style.speciality__card} key={idx}>
            <div className={_style.speciality__cardHeader}>
              <img className={_style.speciality__cardImg} src={item.imgUrl} alt={item.desc} />
            </div>
            <div className={_style.speciality__cardBody}>
              <div className={_style.speciality__cardTexts}>
                <p className={_style.speciality__cardBodyTitle}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Speciality
