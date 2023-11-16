import React from 'react'
import Feature from '../components/common/Feature'
import PageHero from '../components/common/PageHero'
import Layout from '../components/layout/Layout'
import AboutMycoprotein from '../components/mycoprotein/AboutMycoprotein'
import { attributes } from '../content/mycoprotein.md'

const Mycoprotein = () => {
  let {
    metaTitle,
    canonicalUrl,
    metaDescription,
    metaImage,
    mycoproteinHeroItems,
    mycoproteinProcessTitle,
    mycoproteinProcess,
    mycoproteinBenefits,
    mycoproteinBenefitsTitle,
    mycoproteinAdvantagesContent,
    mycoproteinAdvantagesImage,
    mycoproteinScalabilityContent,
    mycoproteinScalabilityImage,
    mycoproteinApplicationContent,
    mycoproteinApplicationImage,
  } = attributes

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      <PageHero content={mycoproteinHeroItems} customClass="mycoproteinHero" />
      <AboutMycoprotein title={mycoproteinProcessTitle} contentData={mycoproteinProcess} spacing="pt-9 pb-24" />
      <Feature
        image={mycoproteinAdvantagesImage}
        content={mycoproteinAdvantagesContent}
        bgClass="bg-secondary"
        contentOrder=""
        topSpacing=""
      />
      <AboutMycoprotein title={mycoproteinBenefitsTitle} contentData={mycoproteinBenefits} spacing="py-24" />
      <Feature
        image={mycoproteinScalabilityImage}
        content={mycoproteinScalabilityContent}
        bgClass="bg-primary"
        contentOrder="order-1"
        topSpacing=""
      />
      <Feature
        image={mycoproteinApplicationImage}
        content={mycoproteinApplicationContent}
        bgClass="bg-transparent"
        contentOrder=""
        topSpacing="mt-24"
      />
    </Layout>
  )
}

export default Mycoprotein
