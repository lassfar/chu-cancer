import React from 'react'
import * as _style from 'scss/home/home.module.scss'
import Jumbo from 'components/home/sections/jumbo'
import Speciality from 'components/home/sections/speciality'
import CareType from 'components/home/sections/care-type'
import Partners from 'components/home/sections/partners'
import Blog from 'components/home/sections/blog'

const Home = () => {
  return (
    <div className={_style.home}>
      <Jumbo />
      <Speciality />
      <CareType />
      <Partners />
      <Blog />
    </div>
  )
}

export default Home
