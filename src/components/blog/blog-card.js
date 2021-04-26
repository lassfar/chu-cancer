import React, { useState } from 'react'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/_blog.module.scss'
import { Link } from 'gatsby'

const ClogCard = ({blogItem}) => {
  return (
    <div className={_style.blog__card}>
      <div className={_style.blog__cardHeader}>
        <img className={_style.blog__cardImg} src={`${blogItem.imgUrl}`} alt={blogItem.desc} />
      </div>
      <div className={_style.blog__cardBody}>
        <h3 className={_style.blog__cardTitle}>{blogItem.title}</h3>
        <p>{blogItem.desc.substring(0, 100)}</p>
      </div>

      <div className={_style.blog__cardFooter}>
        <Link to={blogItem.link} className={`${_var.black_btn} ${_style.blog__cardBtn}`}>
          Lire plus
        </Link>
      </div>
      
    </div>
    
  )
}

export default ClogCard
