import { attributes } from '../../content/about.md'
import Image from 'next/image'
import Markdown from 'react-markdown'
import React from 'react'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
const AboutUs = () => {
  let { aboutUs } = attributes
  return (
    <div className="about pb-24 pt-16">
      <div className="container mx-auto">
        {aboutUs.map((items, index) => (
          <div
            className="about-wrapper grid grid-cols-1 items-center gap-x-[60px] odd:mb-24 md:grid-cols-2"
            key={index}>
            <div className="about-image">
              <Image
                src={items.aboutUsImage}
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto w-full"
                alt="About Image"
              />
            </div>
            <div className="about-content max-md:py-5">
              <Markdown className="">{items.aboutUsContent}</Markdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withMotionAnimation(AboutUs)
