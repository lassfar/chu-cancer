import React, { useState } from 'react'
import SectionLayout from 'components/layouts/section-layout'
import BlogCard from 'components/blog/blog-card'
import * as _var from 'scss/_variables.module.scss'
import * as _style from 'scss/home/_blog.module.scss'
import { blogList } from 'components/_data'

const Blog = () => {

  const [blogs] = useState(blogList)

  return (
    <SectionLayout title="Actualités" colorTitle={_var.text_prwkle} bg={_var.bg_light} bgDivider={_var.bg_prwkle}>

      <div className={_style.blog}>
        {blogs.map((item, idx) => (
          <BlogCard blogItem={item} key={idx} />
        ))}
      </div>

    </SectionLayout>
  )
}

export default Blog
