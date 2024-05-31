import React from 'react'
import Image from 'next/image'


const inputClasses =
  'mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm'
const textClasses = 'block text-sm font-medium text-zinc-700'
const containerClasses = 'container mx-auto py-8'
const cardClasses = 'bg-white shadow-md rounded-lg p-6'
const buttonClasses =
  'bg-orange-500 text-white py-1 px-8 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50'

const ContactForm = () => {
  return (
    <div className={containerClasses}>
      <div className="max-w-full px-4 lg:px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={cardClasses}>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className={textClasses}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={inputClasses}
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={textClasses}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={inputClasses}
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className={textClasses}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={inputClasses}
                placeholder="123-456-7890"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="services" className={textClasses}>
                Which Service Do You Require?
              </label>
              <select id="services" name="services" className={inputClasses}>
                <option value="digital_marketing" selected>
                  Digital Marketing Services
                </option>
                <option value="seo">SEO Services</option>
                <option value="social_media">Social Media Marketing</option>
                <option value="ppc">PPC Management</option>
                <option value="email_marketing">Email Marketing</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className={textClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClasses}
                placeholder="Your message here"></textarea>
            </div>

            <button type="submit" className={buttonClasses}>
              Submit
            </button>
          </form>
        </div>
        <div className={cardClasses}>
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="mt-4">
            <img
              src="/assets/contacthero-bg.jpg"
              alt="map"
              width={400}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className='grid grid-cols-2 py-4 lg:grid-cols-2'>
            <div className="div py-4 px-2">
              <p className="text-zinc-700 mb-2">2400 Las Vegas Blvd</p>
              <p className="text-zinc-700 mb-2">Las Vegas, United States</p>
              <p className="text-zinc-700 mb-2">sales@cycoserve.com</p>
              <p className="text-zinc-700">+1-(725)-261-6028</p>
            </div>
            <div className="div py-4 px-2">
              <div className="mt-0">
                <p className="text-zinc-700 mb-2">Offering Free consultations:</p>
                <ul className="list-disc list-inside">
                  <li className="text-zinc-700">Marketing Strategies</li>
                  <li className="text-zinc-700">SEO Packages</li>
                  <li className="text-zinc-700">Social Media Growth</li>
                  <li className="text-zinc-700">Ad Management</li>
                  <li className="text-zinc-700">Email Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
