import { attributes } from '../../content/about.md'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import rehypeRaw from 'rehype-raw'
const ProjectPartners = () => {
  let { projectPartner, projectPartnerTitle } = attributes
  return (
    <div className="projectPartner bg-[#F8F8F8] py-24">
      <div className="container mx-auto">
        <div className="section-header-title mb-12 text-center">
          <Markdown rehypePlugins={[rehypeRaw]}>{projectPartnerTitle}</Markdown>
        </div>

        <div className="projectPartner-wrapper grid gap-9 md:grid-cols-2">
          {projectPartner.map((items, index) => (
            <div className="projectPartner-items bg-white p-6 md:p-10" key={index}>
              <div className="projectPartner-items-logo mb-6 flex items-center justify-between">
                <Image
                  src={items.projectPartnerLogo}
                  width={100}
                  height={44}
                  alt="project partners logo"
                  className="w-auto"
                />
                <Link href={items.projectPartnerLink} target="_blank">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_42_23)">
                      <path
                        d="M23.25 1.5V8.25C23.25 8.66456 22.9146 9 22.5 9C22.0854 9 21.75 8.66456 21.75 8.25V3.3105L11.0302 14.0303C10.8838 14.1767 10.6918 14.25 10.5 14.25C10.3082 14.25 10.1162 14.1767 9.96975 14.0303C9.67669 13.7372 9.67669 13.2626 9.96975 12.9697L20.6895 2.25H15.75C15.3354 2.25 15 1.91456 15 1.5C15 1.08544 15.3354 0.75 15.75 0.75H22.5C22.9146 0.75 23.25 1.08544 23.25 1.5ZM20.25 21V12C20.25 11.5854 19.9146 11.25 19.5 11.25C19.0854 11.25 18.75 11.5854 18.75 12V21C18.75 21.4138 18.4138 21.75 18 21.75H3C2.58619 21.75 2.25 21.4138 2.25 21V6C2.25 5.58619 2.58619 5.25 3 5.25H12C12.4146 5.25 12.75 4.91456 12.75 4.5C12.75 4.08544 12.4146 3.75 12 3.75H3C1.75931 3.75 0.75 4.75931 0.75 6V21C0.75 22.2407 1.75931 23.25 3 23.25H18C19.2407 23.25 20.25 22.2407 20.25 21Z"
                        fill=""
                        className="fill-primary "
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_23">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <p className="projectPartner-items-ddescription">{items.projectPartnerDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(ProjectPartners)
