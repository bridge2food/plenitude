import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { attributes } from '../../content/footer.md'

const Footer = () => {
  let { logoDark, footerMenus, twitterLink, linkedinLink, footerFund } = attributes

  return (
    <footer className="footer ">
      <Image src={logoDark} width={167} height={52} className="footer-logo" alt="footer logo" />
      <div className="footer-menu mb-9">
        <ul className="mx-auto flex w-fit">
          {footerMenus.map((item, index) => (
            <li key={index} className="px-3 sm:px-8">
              <Link href={item.url} className="footer-menu-link">
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="socialLink pb-10">
        <ul className="mx-auto flex w-fit">
          <li className="px-1">
            <Link
              href={linkedinLink}
              className="socialLink-item translate-y-0 transition duration-500 ease-in-out hover:-translate-y-2">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="" className="stroke-primary" />
                <path
                  d="M32.7857 17C33.4308 17 34 17.5692 34 18.2522V32.7857C34 33.4688 33.4308 34 32.7857 34H18.1763C17.5312 34 17 33.4688 17 32.7857V18.2522C17 17.5692 17.5312 17 18.1763 17H32.7857ZM22.1228 31.5714V23.4888H19.6183V31.5714H22.1228ZM20.8705 22.3504C21.6674 22.3504 22.3125 21.7054 22.3125 20.9085C22.3125 20.1116 21.6674 19.4286 20.8705 19.4286C20.0357 19.4286 19.3906 20.1116 19.3906 20.9085C19.3906 21.7054 20.0357 22.3504 20.8705 22.3504ZM31.5714 31.5714V27.1317C31.5714 24.9688 31.0781 23.2612 28.5357 23.2612C27.3214 23.2612 26.4866 23.9442 26.1451 24.5893H26.1071V23.4888H23.7165V31.5714H26.221V27.5871C26.221 26.5246 26.4107 25.5 27.7388 25.5C29.029 25.5 29.029 26.7143 29.029 27.625V31.5714H31.5714Z"
                  fill=""
                  className="fill-primary"
                />
              </svg>
            </Link>
          </li>
          <li className="px-1">
            <Link
              href={twitterLink}
              className="socialLink-item translate-y-0 transition-all duration-500 ease-in-out hover:-translate-y-2">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="" className="stroke-primary" />
                <path
                  d="M32.9648 21.9711C32.9648 22.1639 32.9648 22.3181 32.9648 22.5108C32.9648 27.8699 28.8552 34 21.3014 34C18.953 34 16.8004 33.3446 15 32.188C15.3131 32.2265 15.6262 32.2651 15.9785 32.2651C17.8963 32.2651 19.6575 31.6096 21.0665 30.5301C19.2661 30.4916 17.7397 29.3349 17.2309 27.7157C17.5049 27.7542 17.7397 27.7928 18.0137 27.7928C18.3659 27.7928 18.7573 27.7157 19.0704 27.6386C17.1918 27.253 15.7828 25.6337 15.7828 23.6675V23.6289C16.3307 23.9373 16.9961 24.0916 17.6614 24.1301C16.5264 23.3976 15.8219 22.1639 15.8219 20.7759C15.8219 20.0048 16.0176 19.3108 16.3699 18.7325C18.4051 21.1614 21.4579 22.7807 24.863 22.9735C24.7847 22.6651 24.7456 22.3566 24.7456 22.0482C24.7456 19.812 26.5851 18 28.8552 18C30.0294 18 31.0861 18.4627 31.8689 19.2723C32.7691 19.0795 33.6693 18.7325 34.4521 18.2699C34.1389 19.2337 33.5127 20.0048 32.6517 20.506C33.4736 20.4289 34.2955 20.1976 35 19.8892C34.4521 20.6988 33.7476 21.3928 32.9648 21.9711Z"
                  fill=""
                  className="fill-primary"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-fund ">
        <h3 className="mb-5 font-Inter text-[20px] font-bold leading-[1.2]">Funded By</h3>
        <Image src={footerFund} width="0" height="0" sizes="100vw" className=" h-auto w-full" alt="footer-fund image" />
      </div>
      <div className="copyright ">
        <p className="text-base font-normal text-primary-dark">
          Copyright {new Date().getFullYear()} Penitude / All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
