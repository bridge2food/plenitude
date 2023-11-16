import React, { useRef } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const Feature = ({ image, content, bgClass, contentOrder, topSpacing }) => {
  const ref = useRef(null)
  return (
    <div className={`feature ${topSpacing}`}>
      <div className="container mx-auto">
        <div className={`feature-wrapper ${bgClass}`}>
          <div className={`feature-image ${contentOrder}`}>
            <Image src={image} width="0" height="0" sizes="100vw" className=" h-auto w-full" alt="Feature Image" />
          </div>
          <div className="feature-content">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(Feature)
