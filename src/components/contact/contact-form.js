import React from 'react'
import 'scss/contact/_contact.scss'
import Divider from 'components/ui/divider';

const ContactForm = () => {

  return (
    <>
      <form className="contactForm">
        <h1 className="contactForm__title">Contactez-Nous</h1>
        <Divider bg="bg_hotpink" justify="initial" />
        <label className="contactForm__label" htmlFor="contact-fullname">Nom et Prénom</label>
        <input className="contactForm__input" type="fullname" id="contact-fullname" required placeholder="Nom et prénom" />
        <label className="contactForm__label" htmlFor="contact-email">Email</label>
        <input className="contactForm__input" type="email" id="contact-email" required placeholder="Email" />
        <label className="contactForm__label" htmlFor="contact-subject">Objet</label>
        <input className="contactForm__input" type="text" id="contact-subject" placeholder="Objet" />
        <label className="contactForm__label" htmlFor="contact-message">Message</label>
        <textarea className="contactForm__textarea" id="contact-message" rows="7" placeholder="Message"></textarea>
        <button className="contactForm__button" type="submit">Envoyer</button>
      </form>
    </>
  )
}

export default ContactForm
