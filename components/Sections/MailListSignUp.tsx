import React from 'react'

const gradientClasses = 'bg-gradient-to-r from-blue-500 to-purple-500'
const textClasses = 'text-white'
const paddingClasses = 'p-8'
const centerTextClasses = 'text-center'
const buttonClasses = 'bg-white text-purple-500 px-4 py-2 rounded-r-lg'
const inputClasses = 'p-2 rounded-l-lg border border-white mr-2'

const WelcomeComponent = () => {
  return (
    <div className={`${gradientClasses} ${textClasses} ${paddingClasses} ${centerTextClasses}`}>
      <h1 className="text-4xl font-bold uppercase">Welcome to Our Website</h1>
      <p className="text-lg my-4">Explore our amazing features and services</p>
      <form className="flex items-center justify-center my-4">
        <input type="email" placeholder="Enter your email" className={inputClasses} />
        <button className={buttonClasses}>Subscribe</button>
      </form>
      <p className="text-sm">We will not sell your information.</p>
    </div>
  )
}

export default WelcomeComponent
