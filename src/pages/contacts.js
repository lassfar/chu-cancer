import React from 'react'
import Contact from 'components/contact/contact'
import Layout from 'components/layouts/layout';
import SEO from 'components/layouts/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contacts" />
      <div className="contacts">
        <Contact />
      </div>
    </Layout>
  )
}

export default ContactPage
