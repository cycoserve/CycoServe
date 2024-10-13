'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Star, Download, BookOpen, ChevronRight } from "lucide-react"
import Link from 'next/link'

export default function Component() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
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
      <div className="relative z-20 container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            Experience the power of our cutting-edge platform. Boost productivity, streamline processes, and achieve your goals faster than ever before.
          </p>

          {/* Rating */}
          <div className="flex items-center mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-zinc-300">
              <span className="font-semibold">4.9</span> (2.5k+ reviews)
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={'https://docs.cycoserve.com/'} >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
                <BookOpen className="w-5 h-5 mr-2" />
                Guides
              </Button>
            </Link>
            <Link href={'https://github.com/cycoserve/CycoServe'}>
              <Button variant="outline" className="bg-transparent border-2 border-zinc-700 text-white hover:bg-zinc-800 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
            </Link>
          </div>
        </div>

        {/* 3D-like illustration */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105" />
            <div className="relative bg-zinc-800 p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-zinc-700">
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-zinc-900/50 p-6 rounded-xl hover:bg-zinc-900/70 transition-colors duration-300">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Feature {i + 1}</h3>
                    <p className="text-zinc-400 text-sm">Enhance your workflow with our powerful tools and intuitive interface.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" style={{ zIndex: 10 }} />
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-orange-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}