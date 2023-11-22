import Image from 'next/image'
import React from 'react'
import Markdown from 'react-markdown'
import { attributes } from '../../content/home.md'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import rehypeRaw from 'rehype-raw'
const Product = () => {
  let { productTitle, products } = attributes
  return (
    <div className="product pb-24 md:pb-[100px] ">
      <div className="container mx-auto">
        <div className="product-title mb-12 text-center">
          <Markdown className="section-header-title" rehypePlugins={[rehypeRaw]}>
            {productTitle}
          </Markdown>
        </div>
        <div className="product-wrapper">
          {products.map((item, index) => (
            <div key={index} className="product-item ">
              <div className="product-content  ">
                <Image
                  src={item.logo}
                  width={80}
                  height={80}
                  className=" mx-auto mb-4 max-lg:mb-2 max-lg:!max-h-[50px] max-lg:!max-w-[50px] max-md:mb-4  max-md:!max-h-[80px] max-md:!max-w-[80px]"
                  alt="partners logo"
                />
                <p className="product-content-title text-title ">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(Product)
