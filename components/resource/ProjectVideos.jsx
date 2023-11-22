import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import Slider from 'react-slick'
import { attributes } from '../../content/resource.md'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import {
  NextButton,
  PrevButton,
  ShapeEight,
  ShapeFour,
  ShapeNine,
  ShapeOne,
  ShapeSix,
  ShapeTwo,
} from '../common/Shapes'
import rehypeRaw from 'rehype-raw'
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

const ProjectVideos = ({ props }) => {
  let { videoGalleryTitle, videoGallery } = attributes

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
    <div className="resourceVideo relative overflow-hidden">
      <div className="absolute -left-16 bottom-11">
        <ShapeOne />
      </div>
      <div className="absolute -left-16 top-36">
        <ShapeTwo />
      </div>
      <div className="absolute left-[23%] top-20">
        <ShapeFour />
      </div>
      <div className="absolute left-[61%] top-[200px]">
        <ShapeSix />
      </div>
      <div className="absolute -right-1 top-28">
        <ShapeEight />
      </div>
      <div className="absolute -right-12 bottom-12">
        <ShapeNine />
      </div>
      <div className="container relative mx-auto">
        <div className="resourceVideo-title section-header-title-white mb-[48px]">
          <Markdown rehypePlugins={[rehypeRaw]}>{videoGalleryTitle}</Markdown>
        </div>

        <Slider {...settings}>
          {props.map(
            (item, index) =>
              item.data.tags === 'video' && (
                <div key={index}>
                  <div className="resourceVideo-video relative shrink-0">
                    <Image
                      src={item.data.thumbnail}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className=" h-auto w-full"
                      alt="Video Image"
                    />
                    <div className="cta-video-link">
                      <Link className="cta-video-icon " href={`/resources/${item.slug}`}>
                        <svg
                          className="ml-1 stroke-secondary stroke-2 "
                          width="20"
                          height="23"
                          viewBox="0 0 20 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.75 2.40673L17.5 11.5L1.75 20.5933L1.75 2.40673Z" stroke="" strokeWidth="" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ),
          )}
        </Slider>
      </div>
    </div>
  )
}

export default withMotionAnimation(ProjectVideos)
