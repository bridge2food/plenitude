import { attributes } from '../content/conference.md'
import Layout from '../components/layout/Layout'
import Hero from '../components/conference/Hero'
import MarqueText from '../components/conference/Marque'
import FeatureText from '../components/conference/FeatureText'
import Team from '../components/conference/Team'
import Register from '../components/conference/Register'
import Schedule from '../components/conference/Schedule'
export default function Home() {
  let { metaTitle, canonicalUrl, metaDescription, metaImage } = attributes

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      <Hero />
      <MarqueText />
      <FeatureText />
      <Team />
      <Register />
      <Schedule />
    </Layout>
  )
}
