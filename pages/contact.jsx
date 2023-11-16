import React from 'react'
import PageHero from '../components/common/PageHero'
import ContactCard from '../components/contact/ContactCard'
import ContactForm from '../components/contact/ContactForm'
import Layout from '../components/layout/Layout'
import { attributes } from '../content/contact.md'

const Contact = () => {
  let { contactHeroItems, metaTitle, canonicalUrl, metaDescription, metaImage } = attributes

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      <PageHero content={contactHeroItems} customClass="contactHero" />
      <ContactForm />
      <ContactCard />
    </Layout>
  )
}

export default Contact
