'use client'

import { useState, useEffect } from 'react'
import CompanyGridComponent from '@/components/page/company/CompanyGrid'
import ResourcesGridComponent from './ResourcesGridComponent'



export default function ResourcesHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 verflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-500/10 rounded-full"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) translateY(${scrollY * (i % 5 + 1) * 0.1}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center pt-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Explore <span className="bg-clip-text text-transparent bg-orange-500">CycoServe Resources</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Empowering you with insights and knowledge. Dive into our extensive collection of white papers, blog articles, documentation, and case studies.
          </p>
        </div>
        <ResourcesGridComponent />
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-orange-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}