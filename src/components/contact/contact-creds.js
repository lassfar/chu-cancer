import { Link } from 'gatsby';
import React, { useState } from 'react'
import DynamicIcon from 'components/ui/dynamic-icon'
import { contactInfos } from 'components/_data'

const ContactCreds = () => {
  const [creds] = useState(contactInfos);

  return (
    <div className="contactCreds">
      {creds.map((item) => (
        <>
          <h1 className="contactCreds__title">{item.title}</h1>
          <div className="contactCreds__item">
            <span>
              <DynamicIcon iconName={item.icon} iconSize="40" />
            </span>
            <span className="contactCreds__itemText">
              <Link to={item.to} className="">
                {item.text}
              </Link>
            </span>
          </div>
        </>
      ))}
    </div>
  )
}

export default ContactCreds
