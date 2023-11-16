import { attributes } from '../../content/home.md'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const Partners = () => {
  let { partnerTitle, partnerLogo } = attributes

  return (
    <div className="partners">
      <div className="container mx-auto">
        <div className="partners-title">
          <Markdown className="section-header-title mb-2 text-center">{partnerTitle}</Markdown>
        </div>

        <div className="partners-logo ">
          {partnerLogo.map((item, index) => (
            <div key={index} className="partners-logo-item ">
              <Image src={item.logo} width={161} height={77} alt="partners logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(Partners)
