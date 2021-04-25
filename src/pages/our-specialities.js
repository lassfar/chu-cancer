import React from 'react'
import * as _style from 'scss/speciality/_ourSpec.module.scss'
import Layout from 'components/layouts/layout'
import OurSpeciality from '../components/speciality/our-speciality'
import SectionTitle from '../components/layouts/section-title'

const OurSpecialityPage = () => {
  return (
    <Layout>
      <div className={_style.spec}>
        <SectionTitle title="Nos Spécialités" bgImage="image/common/5.jpg" bgColor="bg_lemonade" />
        <OurSpeciality />
      </div>
    </Layout>
  )
}

export default OurSpecialityPage
