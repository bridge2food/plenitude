import Feature from '../components/common/Feature'
import MarqueText from '../components/common/MarqueText'
import CTA from '../components/home/CTA'
import Hero from '../components/home/Hero'
import Partners from '../components/home/Partners'
import Product from '../components/home/Product'
import Project from '../components/home/Project'
import Services from '../components/home/Services'
import Layout from '../components/layout/Layout'
import { attributes } from '../content/home.md'

export default function Home() {
  let { featureContent, featureImage, metaTitle, canonicalUrl, metaDescription, metaImage } = attributes

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      <Hero />
      <Feature image={featureImage} content={featureContent} bgClass="bg-secondary" contentOrder="" topSpacing="" />
      <Partners />
      <Project />
      <Services />
      <MarqueText />
      <Product />
      <CTA />
    </Layout>
  )
}
