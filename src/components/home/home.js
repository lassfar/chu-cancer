import React from 'react'
import * as _style from 'scss/home/home.module.scss'
import Jumbo from 'components/home/sections/jumbo.js'

const Home = () => {
  return (
    <div className={_style.home}>
      <Jumbo />
    </div>
  )
}

export default Home
