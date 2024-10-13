'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Compass, Eye } from "lucide-react"

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('mission-vision')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <div className="relative py-16 ">
      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-0">
        <div 
          id="mission-vision"
          className={`grid md:grid-cols-2 gap-8 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'
          } transition-all duration-1000 ease-out`}
        >
          <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Compass className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-zinc-300 text-lg">
                To revolutionize digital experiences by providing cutting-edge solutions that empower businesses and individuals to achieve their full potential in the digital landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-zinc-300 text-lg">
                To be the global leader in innovative digital solutions, setting new standards for efficiency, creativity, and user experience in every product we develop.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Decorative elements */}

    </div>
  )
}