import React from 'react'
import AboutUs from '../components/about/AboutUs'
import FundDetails from '../components/about/FundDetails'
import ProjectPartners from '../components/about/ProjectPartners'
import ProjectTimeline from '../components/about/ProjectTimeline'
import Target from '../components/about/Target'
import PageHero from '../components/common/PageHero'
import Layout from '../components/layout/Layout'
import { attributes } from '../content/about.md'

const About = () => {
  let { aboutHeroItems, metaTitle, canonicalUrl, metaDescription, metaImage } = attributes

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      <PageHero content={aboutHeroItems} customClass="aboutHero" />
      <AboutUs />
      <Target />
      <ProjectPartners />
      <ProjectTimeline />
      <FundDetails />
    </Layout>
  )
}

export default About
