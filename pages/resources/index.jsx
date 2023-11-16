import React, { useState, useEffect } from 'react'
import PageHero from '../../components/common/PageHero'
import Layout from '../../components/layout/Layout'
import Faq from '../../components/resource/Faq'
import ImageGallery from '../../components/resource/ImageGallery'
import ProjectVideos from '../../components/resource/ProjectVideos'
import { attributes } from '../../content/resource.md'

const Resource = () => {
  let { resourceHeroItems, metaTitle, canonicalUrl, metaDescription, metaImage } = attributes
  const [resources, setResources] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getAllResources')
        if (response.ok) {
          const data = await response.json()
          setResources(data.resources)
        } else {
          console.error('Failed to fetch resources.')
        }
      } catch (error) {
        console.error('Error while fetching resources:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      <PageHero content={resourceHeroItems} customClass="resourceHero" />
      <ImageGallery props={resources} />
      <ProjectVideos props={resources} />
      <Faq />
    </Layout>
  )
}

export default Resource
