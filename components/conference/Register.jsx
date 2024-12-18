import React from 'react'
import Markdown from 'react-markdown'
import { attributes } from '../../content/conference.md'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import Link from 'next/link'

const Register = () => {
  const { registerSectionTitle, registerSectionDetails, registerSectionLink } = attributes
  return (
    <section className="register bg-primary py-[144px]">
      <div className="container">
        <div className="item-center flex  max-md:flex-col">
          <div className=" section-header-title-white max-md:mb-12">
            <Markdown className="mb-6">{registerSectionTitle}</Markdown>
            <p className="max-w-[620px] text-white/70">{registerSectionDetails}</p>
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <Link href={registerSectionLink} className="shrink-0">
              <svg width="200" height="201" viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100.5" r="100" fill="#70B52D" />
                <circle cx="100" cy="100.5" r="100" fill="white" />
                <path
                  d="M83.3334 117.166L116.667 83.833M116.667 83.833H89.5834M116.667 83.833V110.916"
                  stroke=""
                  strokeWidth="2.77778"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-title"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default withMotionAnimation(Register)
