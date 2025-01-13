import React from 'react'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import { attributes } from '../../content/conference.md'
import Markdown from 'react-markdown'
import Image from 'next/image'

const Schedule = () => {
  const { scheduleSectionTitle, scheduleSectionDetails, scheduleList } = attributes
  return (
    <section className="schedule pb-10 pt-[160px]">
      <div className="container">
        <div className="section-header-title mb-[60px] text-center lg:mx-auto lg:max-w-[925px]">
          <Markdown className="mb-6">{scheduleSectionTitle}</Markdown>
          <Markdown>{scheduleSectionDetails}</Markdown>
        </div>
        {scheduleList.map((item, index) => (
          <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2" key={index}>
            <div>
              <h3 className="mb-5 font-archivo text-[32px] font-semibold tracking-normal"> {item.title} </h3>
              <p className="text-lg"> {item.details} </p>
            </div>
            <div>
              <h3 className="mb-6 font-archivo text-[32px]  font-semibold tracking-normal">
                {item.startTime} - {item.endTime}
              </h3>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {item.scheduleAuthor.map((author, index) => (
                  <div key={index}>
                    <Image
                      src={author.memberImage}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className=" mb-3.5 h-auto w-full"
                      alt="member Image"
                    />
                    <div className="">
                      <h3 className="font-archivo text-base font-medium tracking-normal">{author.memberName}</h3>
                      <p className="text-xs">{author.memberDesignation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default withMotionAnimation(Schedule)
