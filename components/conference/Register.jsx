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
        <div className="flex items-center  max-md:flex-col">
          <div className=" section-header-title-white max-md:mb-12">
            <Markdown className="mb-6">{registerSectionTitle}</Markdown>
            <p className="max-w-[620px] text-white/70">{registerSectionDetails}</p>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <Link
              href={registerSectionLink}
              className="group relative inline-block h-[150px] w-[150px] shrink-0 overflow-hidden rounded-full bg-white lg:h-[200px] lg:w-[200px]">
              <svg
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-[300px] group-hover:translate-x-[250px] group-hover:opacity-0">
                <path
                  d="M2.33337 35.1663L35.6667 1.83301M35.6667 1.83301H8.58337M35.6667 1.83301V28.9163"
                  stroke="#111111"
                  strokeWidth="2.77778"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute  left-1/2 top-1/2 -translate-x-[300px] translate-y-[250px] opacity-0 transition-all duration-500 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2  group-hover:opacity-100">
                <path
                  d="M2.33337 35.1663L35.6667 1.83301M35.6667 1.83301H8.58337M35.6667 1.83301V28.9163"
                  stroke="#111111"
                  strokeWidth="2.77778"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
