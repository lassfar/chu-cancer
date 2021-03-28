import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import SectionLayout from 'components/layouts/sections/sectionLayout.js'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/speciality.module.scss'

const Speciality = () => {
  const [specialities] = useState([
    {
      title: 'Chirurgie Gynecologique',
      desc: 'lorem ipsum dolor lorem ipsum dolor',
      imgUrl: 'https://image.freepik.com/photos-gratuite/gros-plan-du-medecin-montrant-ruban-rose-symbolisant-cancer-du-sein_118454-13217.jpg'
    },
    {
      title: 'Chirurgie Oncologie',
      desc: 'lorem ipsum dolor lorem ipsum dolor',
      imgUrl: 'https://image.freepik.com/photos-gratuite/medecin-tenant-ruban-rose-sensibilisation-au-cancer-du-sein-concept-rose-octobre_49149-298.jpg'
    },
    {
      title: 'Chirurgie Gynecologique',
      desc: 'lorem ipsum dolor lorem ipsum dolor',
      imgUrl: 'https://image.freepik.com/photos-gratuite/gros-plan-du-medecin-montrant-ruban-rose-symbolisant-cancer-du-sein_118454-13217.jpg'
    },
    {
      title: 'Chirurgie Oncologie',
      desc: 'lorem ipsum dolor lorem ipsum dolor',
      imgUrl: 'https://image.freepik.com/photos-gratuite/medecin-tenant-ruban-rose-sensibilisation-au-cancer-du-sein-concept-rose-octobre_49149-298.jpg'
    },
  ])

  return (
    <SectionLayout title="Nos Spécialités" bg={_var.bg_light} bgDevider={_var.bg_prwkle}>
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
