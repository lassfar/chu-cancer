import React from 'react'
import * as _style from 'scss/speciality/_ourSpec.module.scss'
import Layout from 'components/layouts/layout'
import OurSpeciality from '../components/speciality/our-speciality'

const OurSpecialityPage = () => {
  return (
    <Layout>
      <div className={_style.spec}>
        <OurSpeciality />
      </div>
    </Layout>
  )
}

export default OurSpecialityPage
