import React from 'react'
import { attributes } from '../../content/contact.md'
import Image from 'next/image'
import Link from 'next/link'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import { Email } from 'react-obfuscate-email'
Link
const ContactCard = () => {
  let { contactInfo } = attributes
  return (
    <div className="contactCard pt-24">
      <div className="container mx-auto">
        <div className="contactCard-wrapper">
          {contactInfo.map((items, index) => (
            <div className="contactCard-content" key={index}>
              <p>{items.contactDesignation}</p>
              <h4>{items.contactName}</h4>
              <Email email={`${items.contactEmail}`}>{items.contactEmail}</Email>
              <Image src={items.contactLogo} width={161} height={77} alt="partners logo" className="h-auto w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(ContactCard)
