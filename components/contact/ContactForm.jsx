import React from 'react'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const ContactForm = () => {
  return (
    <div className="contactForm">
      <div className="container mx-auto">
        <form
          name="contactForm"
          action="/success"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          // data-netlify-recaptcha="true">
        >
          <div className=" contactForm-wrapper ">
            <input type="hidden" name="form-name" value="contactForm" className="sm:col-span-12" />
            <div className="hidden sm:col-span-12">
              <label htmlFor="botField" className="form-label">
                Don’t fill this out if you’re human
              </label>
              <input type="text" name="bot-field" id="botField" />
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="name">Your Name*</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Your Name"
                  className="contactForm-items"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="email">Email address*</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="contactForm-items"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="company">Company Name*</label>
              <div className="mt-2">
                <input
                  id="company"
                  name="CompanyName"
                  type="text"
                  autoComplete="company-name"
                  className="contactForm-items"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="country">Country*</label>
              <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="contactForm-items" required>
                  <option value="France">France</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-12">
              <label htmlFor="message">Your message*</label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  autoComplete="your-message"
                  className="contactForm-items"
                  required></textarea>
              </div>
            </div>
            <div className="relative flex gap-x-3 sm:col-span-12">
              <div className="flex h-6 items-center">
                <input
                  id="submission"
                  name="submission"
                  type="checkbox"
                  className="!h-4 !w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label
                  htmlFor="submission"
                  className="select-none font-Inter !text-base !font-normal !leading-[25.6px] !text-primary-dark">
                  By submitting this form you agree to our terms and conditions and our Privacy Policy which explains
                  how we may collect, use and disclose your personal information including to third parties.
                </label>
              </div>
            </div>
            {/* <div data-netlify-recaptcha="true"></div> */}
            <div className="mt-6 sm:col-span-12 ">
              <button
                type="submit"
                className="btn w-full !bg-primary !text-white transition-all duration-200 hover:!bg-primary-light">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withMotionAnimation(ContactForm)
