import { motion } from 'framer-motion'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FacebookLogo, LinkedinLogo, TwitterLogo, X } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import ReactPlayer from 'react-player'
import {
  ShapeEight,
  ShapeFive,
  ShapeFour,
  ShapeSeven,
  ShapeTwo,
  PrevButtonSm,
  NextButtonSm,
} from '../../components/common/Shapes'

import Layout from '../../components/layout/Layout'
import { attributes } from '../../content/resource.md'
import { sectionHeaderAnimation } from '../../utils/helper'
const PrevArrow = (props) => {
  return (
    <button onClick={props.onClick} type="button" className={props.className}>
      <PrevButtonSm />
      Previous
    </button>
  )
}
const NextArrow = (props) => {
  return (
    <button onClick={props.onClick} type="button" className={props.className}>
      <NextButtonSm />
    </button>
  )
}

const Slug = () => {
  let { metaTitle, canonicalUrl, metaDescription, metaImage } = attributes
  const router = useRouter()

  const [modal, setModal] = useState(false)
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

  const openModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modal])

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationTransition = {
    duration: 0.3,
    delay: 0.2,
  }
  const slug = router.query.slug
  const resourceDetails = resources.find((post) => post.slug === slug)

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 500,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <Layout metaTitle={metaTitle} canonicalUrl={canonicalUrl} metaDescription={metaDescription} metaImage={metaImage}>
      {modal ? (
        <motion.section
          variants={animationVariants}
          transition={animationTransition}
          initial="hidden"
          animate="visible"
          className="modal-bg">
          <div className="modal-align">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="modal-content"
              modal={modal.toString()}>
              <span className=" modal-close" onClick={openModal}>
                <X size={20} weight="bold" />
              </span>
              <div className="modal-video-align">
                <ReactPlayer
                  url={resourceDetails.data.videoLink}
                  className="modal-video-item"
                  width="100%"
                  height="100%"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      ) : null}

      {resourceDetails && (
        <>
          <section className={`pageHero z-10 text-center`}>
            <div className="container mx-auto max-w-[985px]">
              <motion.div {...sectionHeaderAnimation} className="hero-content">
                <h1>{resourceDetails.data.title}</h1>
              </motion.div>
            </div>
            <Image
              src="/img/pageHero.svg"
              width="0"
              height="0"
              sizes="100vw"
              className=" absolute bottom-0 -z-10 h-auto w-full"
              alt="hero_shape"
            />
            <div className="hero-shape absolute -left-10 bottom-24">
              <ShapeTwo />
            </div>

            <div className="hero-shape absolute left-[30%] top-28">
              <ShapeFour />
            </div>
            <div className="hero-shape absolute left-[43%] top-28 max-lg:hidden">
              <ShapeFive />
            </div>
            <div className="hero-shape absolute -right-[50px] bottom-[100px] lg:right-[200px]">
              <ShapeSeven />
            </div>
            <div className="hero-shape absolute -right-10 top-32">
              <ShapeEight />
            </div>
          </section>

          <motion.div {...sectionHeaderAnimation} className="resourceDetails ">
            <div className="container mx-auto">
              {resourceDetails.data.tags === 'image' && (
                <div className="resourceDetails-item grid grid-cols-12 items-center gap-y-10 bg-primary md:gap-x-10">
                  <div className="resourceDetails-image col-span-12 md:col-span-6 lg:col-span-6">
                    <Slider {...settings}>
                      {resourceDetails.data?.imageGallery?.map((items, index) => (
                        <div className=" relative h-full" key={index}>
                          <p className="resourceDetails-image-details ">{items.caption}</p>
                          <Image
                            key={index}
                            src={items.images}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className=" h-auto w-full "
                            alt="Gallery Image"
                            priority
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="resourceDetails-desc col-span-12 md:col-span-6 lg:col-span-6 lg:max-w-[650px] max-md:px-5 max-md:pb-5">
                    <Markdown>{resourceDetails.content}</Markdown>
                    <div className="resourceDetails-share  flex items-center gap-x-5">
                      <p className="!mb-0 inline-block font-medium ">Share With:</p>
                      <Link
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://plenitude-next.netlify.app/resource/${slug}&title=${resourceDetails.data.title}&summary=${resourceDetails.data.title}`}
                        className="resourceDetails-share-item translate-y-0 rounded-full border  border-white p-2 text-white transition-all duration-500 ease-in-out hover:-translate-y-2"
                        target="_blank">
                        <LinkedinLogo size={32} weight="bold" />
                      </Link>
                      <Link
                        href={`http://twitter.com/share?text=${
                          resourceDetails.data.title && resourceDetails.data.body
                        }&url=https://plenitude-next.netlify.app/resource/${slug}`}
                        className="resourceDetails-share-item translate-y-0 rounded-full border  border-white p-3 text-white transition-all duration-500 ease-in-out hover:-translate-y-2"
                        target="_blank">
                        <TwitterLogo size={24} weight="bold" />
                      </Link>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://plenitude-next.netlify.app/resource/${slug}`}
                        className="resourceDetails-share-item translate-y-0 rounded-full border border-white p-3 text-white transition-all duration-500 ease-in-out hover:-translate-y-2"
                        target="_blank">
                        <FacebookLogo size={24} weight="bold" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {resourceDetails.data.tags === 'video' && (
                <div className="resourceDetails-item grid grid-cols-12 items-center gap-y-10 bg-secondary md:gap-x-10 ">
                  <div className="resourceDetails-video  col-span-12 md:col-span-6 lg:col-span-6">
                    <div className="relative w-full shrink-0">
                      <Image
                        src={resourceDetails.data.thumbnail}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" h-auto w-full"
                        alt="CTA Image"
                      />

                      <div className="cta-video-link">
                        <div className="cta-video-icon " onClick={openModal}>
                          <svg
                            className="ml-1 stroke-secondary stroke-2 "
                            width="20"
                            height="23"
                            viewBox="0 0 20 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 2.40673L17.5 11.5L1.75 20.5933L1.75 2.40673Z" stroke="" strokeWidth="" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resourceDetails-desc col-span-12 md:col-span-6 lg:col-span-6 lg:max-w-[650px] max-md:px-5 max-md:pb-5">
                    <Markdown>{resourceDetails.content}</Markdown>
                    <div className="resourceDetails-share mt-auto flex items-center gap-x-5">
                      <p className="!mb-0 inline-block font-medium ">Share With:</p>
                      <Link
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://plenitude-next.netlify.app/resource/${slug}&title=${resourceDetails.data.title}`}
                        className="resourceDetails-share-item translate-y-0 rounded-full border  border-white p-2 text-white transition-all duration-500 ease-in-out hover:-translate-y-2"
                        target="_blank">
                        <LinkedinLogo size={32} weight="bold" />
                      </Link>
                      <Link
                        href={`http://twitter.com/share?text=${
                          resourceDetails.data.title && resourceDetails.data.body
                        }&url=https://plenitude-next.netlify.app/resource/${slug}`}
                        className="resourceDetails-share-item translate-y-0 rounded-full border  border-white p-2 text-white transition-all duration-500 ease-in-out hover:-translate-y-2"
                        target="_blank">
                        <TwitterLogo size={32} weight="bold" />
                      </Link>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://plenitude-next.netlify.app/resource/${slug}`}
                        className="resourceDetails-share-item translate-y-0 rounded-full border border-white p-2 text-white transition-all duration-500 ease-in-out hover:-translate-y-2"
                        target="_blank">
                        <FacebookLogo size={32} weight="bold" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </Layout>
  )
}

export default Slug
