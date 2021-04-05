import React from 'react'
import * as _style from 'scss/home/home.module.scss'
import Jumbo from 'components/home/sections/jumbo.js'
import Speciality from 'components/home/sections/speciality'
import CareType from 'components/home/sections/CareType'
import Partners from 'components/home/sections/Partners'
import Blog from './sections/Blog'

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
