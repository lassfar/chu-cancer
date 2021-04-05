import React from 'react'
import * as _style from 'scss/home/home.module.scss'
import Jumbo from 'components/home/sections/jumbo.js'
import Speciality from 'components/home/sections/speciality.js'
import CareType from 'components/home/sections/care-type.js'
import Partners from 'components/home/sections/partners.js'
import Blog from 'components/home/sections/blog.js'

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
