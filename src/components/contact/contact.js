import React from 'react'
import 'scss/contact/_contact.scss'
import ContactForm from 'components/contact/contact-form'
import ContactCreds from 'components/contact/contact-creds';
import ContactMap from 'components/contact/contact-map';
import SectionTitle from 'components/layouts/section-title';
import ContactAside from './contact-aside';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <ContactForm />
        <ContactAside />
      </div>
      <div className="contact">
        <ContactCreds />
        {/* <ContactMap /> */}
      </div>
    </>
  )
}

export default Contact
