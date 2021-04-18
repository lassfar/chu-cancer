import React, { useState } from 'react'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/_careType.module.scss'
import * as riIcon from 'react-icons/ri'
import SectionLayout from 'components/layouts/section-layout'
import { DynamicIcon } from 'components/ui/dynamic-icon'
import { careTypeList } from 'components/_data'

const CareType = () => {

  const [careTypes] = useState(careTypeList);
  const [subtitle] = useState("Offre de soins divérsifié et accompagnement complet");

  return (
    <SectionLayout subtitle={subtitle} bg={_var.bg_light} bgDivider={_var.bg_hotpink}>
      <div className={_style.careType}>

        <img className={_style.careType__imgBg} src={'image/cancer/5-cancer.png'} />

        {careTypes.map((item, idx) => (
          <div className={_style.careType__card} key={idx}>
            <div className={_style.careType__cardHeader}>
              <div className={_style.careType__cardIconContainer}>
                <riIcon.RiMentalHealthFill className={_style.careType__cardIcon}>
                </riIcon.RiMentalHealthFill>
              </div>
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
