'use client'
import { useState, useEffect } from 'react'


export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted')
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-20 max-w-2xl left-12 max right-12 transform transition-transform duration-500 ease-in-out z-50"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div className="p-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg">
        <div className="bg-gradient-to-r from-black to-zinc-900 backdrop-filter backdrop-blur-lg bg-opacity-35 p-4 sm:p-6 rounded-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-white leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking &quot;Accept&quot;, you consent to our use of cookies. 
                We value your privacy and ensure your data is handled securely.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAccept}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-black bg-gradient-to-r from-purple-400 to-orange-300 hover:from-purple-500 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
              >
                Accept All
              </button>
              {/* <button
                onClick={handleAccept}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Close cookie notice"
              >
                <X className="h-6 w-6" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}