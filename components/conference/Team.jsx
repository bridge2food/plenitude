import React from 'react'
import Markdown from 'react-markdown'
import Slider from 'react-slick'
import { attributes } from '../../content/conference.md'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import { NextButton, PrevButton } from '../common/Shapes'
import Link from 'next/link'
import Image from 'next/image'
const PrevArrow = (props) => {
  return (
    <button onClick={props.onClick} type="button" className={props.className}>
      <PrevButton />
      Previous
    </button>
  )
}
const NextArrow = (props) => {
  return (
    <button onClick={props.onClick} type="button" className={props.className}>
      <NextButton />
    </button>
  )
}

const Team = () => {
  let { memberSectionTitle, team } = attributes

  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="team relative overflow-hidden !bg-white">
      <div className="container relative mx-auto">
        <div className=" section-header-title mb-[48px]">
          <Markdown>{memberSectionTitle}</Markdown>
        </div>

        <Slider {...settings}>
          {team.map((item, index) => (
            <div key={index}>
              <div className="team-details relative shrink-0">
                <div className="">
                  <Image
                    src={item.memberImage}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className=" mb-4 h-auto w-full"
                    alt="team Image"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-archivo text-xl font-medium tracking-normal ">{item.memberName}</h3>
                    <p className="text-base">{item.memberDesignation}</p>
                  </div>
                  <div className="shrink-0">
                    <Link href={item.socialLink}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 0C5.37374 0 0 5.37374 0 12C0 18.6262 5.37374 23.9999 12 23.9999C18.6262 23.9999 23.9999 18.6262 23.9999 12C23.9999 5.37374 18.6262 0 12 0ZM8.51295 18.1406H5.5903V9.34826H8.51295V18.1406ZM7.05186 8.14732H7.03264C6.05201 8.14732 5.4178 7.47232 5.4178 6.62858C5.4178 5.76561 6.07123 5.10936 7.07107 5.10936C8.07092 5.10936 8.68591 5.76561 8.70513 6.62858C8.70513 7.47232 8.07092 8.14732 7.05186 8.14732ZM19.0509 18.1406H16.1287V13.4367C16.1287 12.2545 15.7054 11.4482 14.6479 11.4482C13.8407 11.4482 13.3598 11.992 13.1484 12.517C13.0711 12.705 13.0523 12.9675 13.0523 13.2304V18.1406H10.1301C10.1301 18.1406 10.1686 10.1728 10.1301 9.34826H13.0523V10.5933C13.4409 9.99419 14.1356 9.14201 15.6862 9.14201C17.609 9.14201 19.0509 10.3987 19.0509 13.0992V18.1406Z"
                          fill=""
                          className="fill-secondary"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default withMotionAnimation(Team)
