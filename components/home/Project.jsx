import React from 'react'
import { attributes } from '../../content/home.md'
import Markdown from 'react-markdown'
import Image from 'next/image'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import rehypeRaw from 'rehype-raw'
const Project = () => {
  let { projectContent, projectStepsOne, projectStepsTwo, projectStepsThree, projectStepsFour } = attributes
  return (
    <div className="project">
      <div className="container mx-auto">
        <div className="project-content">
          <Markdown className="section-header-title" rehypePlugins={[rehypeRaw]}>
            {projectContent}
          </Markdown>
        </div>
        <div className="project-steps ">
          <div className="project-animation max-md:hidden">
            <svg width="474" height="669" viewBox="0 0 474 669" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4355 616.938L10.9219 624.125L4.4082 616.938"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4355 604.594L10.9219 611.781L4.4082 604.594"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M228.062 411.936L220.875 405.422L228.062 398.908"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M240.406 411.936L233.219 405.422L240.406 398.908"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M469.436 163.938L462.922 171.125L456.408 163.938"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M469.436 151.594L462.922 158.781L456.408 151.594"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M463 0V405.5H11V668H277.5" stroke="#70B52D" strokeDasharray="6 6" />
            </svg>
          </div>
          <div className="project-animation-mobile md:hidden">
            <svg width="21" height="1043" viewBox="0 0 21 1043" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="10.5" y1="2.18557e-08" x2="10.5" y2="1043" stroke="#70B52D" strokeDasharray="6 6" />
              <path
                d="M16.9355 91.9375L10.4219 99.125L3.9082 91.9375"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9355 79.5938L10.4219 86.7812L3.9082 79.5938"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9355 500.938L10.4219 508.125L3.9082 500.938"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9355 488.594L10.4219 495.781L3.9082 488.594"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9355 912.938L10.4219 920.125L3.9082 912.938"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9355 900.594L10.4219 907.781L3.9082 900.594"
                stroke="#70B52D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="project-steps-one ">
            {projectStepsOne.map((items, index) => (
              <div key={index}>
                <Image
                  src={items.images}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className=" h-auto w-full"
                  alt="project_shape"
                />
              </div>
            ))}
          </div>
          <div className="project-steps-item-two ">
            <div className=" project-steps-two order-2 max-md:order-1">
              <Image
                src={projectStepsTwo}
                width="0"
                height="0"
                sizes="100vw"
                className=" order-1 h-auto w-full"
                alt="project_shape"
              />
            </div>

            <div className="  project-steps-three order-1 max-md:order-2">
              <Image
                src={projectStepsThree}
                width="0"
                height="0"
                sizes="100vw"
                className=" order-2 h-auto w-full"
                alt="project_shape"
              />
            </div>
          </div>

          <div className="project-steps-four ">
            {projectStepsFour.map((items, index) => (
              <div key={index} className="w-[331px] sm:w-1/2 md:w-1/5 max-md:mx-auto">
                <Image
                  src={items.images}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-auto w-full"
                  alt="project_shape"
                />
                <Markdown rehypePlugins={[rehypeRaw]}>{items.text}</Markdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(Project)
