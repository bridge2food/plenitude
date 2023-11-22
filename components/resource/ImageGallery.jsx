import React from 'react'
import { attributes } from '../../content/resource.md'
import Markdown from 'react-markdown'
import { PrevButton, NextButton } from '../common/Shapes'
import Slider from 'react-slick'
import Image from 'next/image'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import Link from 'next/link'
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
const ImageGallery = ({ props }) => {
  let { imageGalleryTitle, imageGallery } = attributes

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
    <div className="ImageGallery overflow-hidden py-24">
      <div className="container mx-auto">
        <div className="ImageGallery-wrapper grid grid-cols-12">
          <div className="ImageGallery-title section-header-title z-40 col-span-12 lg:col-span-4">
            <Markdown rehypePlugins={[rehypeRaw]}>{imageGalleryTitle}</Markdown>
          </div>
          <div className="ImageGallery-content col-span-12 lg:col-span-8">
            <Slider {...settings}>
              {props.map(
                (item, index) =>
                  item.data.tags === 'image' && (
                    <div key={index}>
                      <div className="imageGallery-item relative">
                        <Link href={`/resources/${item.slug}`}>
                          <Image
                            src={item.data.thumbnail}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className=" h-auto max-h-[530px] w-full "
                            alt="Gallery Image"
                          />
                        </Link>
                      </div>
                    </div>
                  ),
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withMotionAnimation(ImageGallery)
