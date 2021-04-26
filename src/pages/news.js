import React from 'react'
import SectionTitle from 'components/layouts/section-title'
import Layout from 'components/layouts/layout'
import Blog from 'components/blog/blog'
import 'scss/blog/_blog.scss'

const News = () => {
  return (
    <Layout>
      <SectionTitle title="Actualités" bgColor="bg_black" />
      <Blog />
    </Layout>
  )
}

export default News
