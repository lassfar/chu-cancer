import React from 'react'
import * as _style from 'scss/home/home.module.scss'
import Jumbo from 'components/home/sections/jumbo.js'
import Speciality from 'components/home/sections/speciality'

const Home = () => {
  return (
    <div className={_style.home}>
      <Jumbo />
      <Speciality />
    </div>
  )
}

export default Home
