import React, { useState } from 'react'
import SectionLayout from 'components/layouts/sections/section-layout'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/_blog.module.scss'
import { blogList } from 'components/_data'
import { Link } from 'gatsby'

const Blog = () => {

  const [blogs] = useState(blogList)

  return (
    <SectionLayout title="Actualités" colorTitle={_var.text_hotpink} bg={_var.bg_light} bgDivider={_var.bg_hotpink}>

      <div className={_style.blog}>
        {blogs.map((item, idx) => (
          <div className={_style.blog__card} key={idx}>
            <div className={_style.blog__cardHeader}>
              <img className={_style.blog__cardImg} src={`${item.imgUrl}`} alt={item.desc} />
            </div>
            <div className={_style.blog__cardBody}>
              <h3 className={_style.blog__cardTitle}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className={_style.blog__cardFooter}>
              <Link to={item.link} className={`${_var.black_btn} ${_style.blog__cardBtn}`}>
                Lire plus
              </Link>
            </div>
            
          </div>
        ))}
      </div>

    </SectionLayout>
  )
}

export default Blog
