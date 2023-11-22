import React, { useRef, useState } from 'react'

import Markdown from 'react-markdown'
import { attributes } from '../../content/about.md'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import { NextButton, PrevButton } from '../common/Shapes'
import rehypeRaw from 'rehype-raw'

const Modal = ({ link, setModal }) => {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationTransition = {
    duration: 0.3,
    delay: 0.2,
  }
  return (
    <motion.div
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
          className="modal-content !w-[500px]">
          <span className="modal-close" onClick={() => setModal({ open: false })}>
            <X size={20} weight="bold" />
          </span>
          <div className="modal-video-align">
            <div className="modal-video-item">
              <Image
                src={link}
                width="0"
                height="0"
                sizes="100vw"
                className=" aspect-auto h-auto w-full"
                alt="gallery Image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ProjectTimeline = () => {
  let { projectTimelineTitle, projectTimelineContent } = attributes

  const timelineRef = useRef(null)
  const [arrowDisable, setArrowDisable] = useState(true)

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      element.scrollLeft += step
      scrollAmount += Math.abs(step)
      if (scrollAmount >= distance) {
        clearInterval(slideTimer)
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true)
      } else {
        setArrowDisable(false)
      }
    }, speed)
  }

  const [modal, setModal] = useState({ open: false, link: '' })

  return (
    <div className="timeline py-24">
      {modal.open ? <Modal link={modal.link} setModal={setModal} /> : null}
      <div className="container relative mx-auto">
        <div className="section-header-title mb-12 text-center">
          <Markdown rehypePlugins={[rehypeRaw]}>{projectTimelineTitle}</Markdown>
        </div>
        <button
          onClick={() => {
            handleHorizantalScroll(timelineRef.current, 25, 100, -10)
          }}
          className={`scroll-button  transform-y-1/2 absolute left-0 top-1/2 z-10 max-lg:hidden ${
            arrowDisable ? 'disabled' : ''
          }`}>
          <PrevButton />
        </button>
        <button
          onClick={() => {
            handleHorizantalScroll(timelineRef.current, 25, 100, 10)
          }}
          className={`scroll-button transform-y-1/2 absolute right-0 top-1/2 z-10 max-lg:hidden `}>
          <NextButton />
        </button>
        <div className="timeline-wrapper relative flex max-lg:flex-col " ref={timelineRef}>
          {projectTimelineContent.map((items, index) => (
            <div className="timeline-content" key={index}>
              <div className="timeline-details-wrapper lg:mb-[40px]">
                <div className="timeline-details  border border-gray bg-white p-6">
                  <h5>{items.projectTimelineDate}</h5>
                  <p className="font-semibold">{items.projectTimelineEvent}</p>
                  <p className="text-[#797C7B]">{items.projectTimelineMotto}</p>
                </div>
              </div>

              <div className="timeline-gallery max-lg:my-5">
                {items.projectTimelineGallery.map((images, index) => (
                  <div className="timeline-gallery-images mb-2 cursor-pointer" key={index}>
                    {images.projectTimelineImages ? (
                      <Image
                        src={images.projectTimelineImages}
                        width={200}
                        height={135}
                        alt="gallery Image"
                        className="mx-auto cursor-pointer"
                        onClick={() => setModal({ id: index, open: true, link: images.projectTimelineImages })}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(ProjectTimeline)
