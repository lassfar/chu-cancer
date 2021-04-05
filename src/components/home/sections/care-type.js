import React, { useState } from 'react'
import SectionLayout from 'components/layouts/sections/sectionLayout'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/_careType.module.scss'
import { careTypeList } from 'components/_data'
import careTypeBg from 'images/cancer/5-cancer.png'

const CareType = () => {

  const [careTypes] = useState(careTypeList);
  const [subtitle] = useState("Offre de soins divérsifié et accompagnement complet");

  return (
    <SectionLayout subtitle={subtitle} bg={_var.bg_light} bgDivider={_var.bg_hotpink}>
      <div className={_style.careType}>

        <img className={_style.careType__imgBg} src={careTypeBg} />

        {careTypes.map((item, idx) => (
          <div className={_style.careType__card} key={idx}>
            <div className={_style.careType__cardHeader}>
              <img className={_style.careType__cardImg} src={item.imgUrl} alt={item.desc.substring(0, 50)} />
            </div>
            <div className={_style.careType__cardBody}>
              <h1 className={_style.careType__cardTitle}>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </SectionLayout>
  )
}

export default CareType
