'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, Target } from "lucide-react"
import Link from 'next/link'



export default function CompanyHero() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Company <span className="bg-clip-text text-transparent bg-orange-500 ">Information</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Revolutionizing digital experiences with cutting-edge solutions. We&apos;re on a mission to transform the way you work and interact online.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { icon: Users, title: "About Us", description: "Our diverse team of experts brings years of experience and innovation.", url:"/company/about-us" },

            { icon: Zap, title: "Lightning Fast", description: "Optimized performance ensures your work is done at the speed of thought.", url:"/company/statements" },

            { icon: Target, title: "Precision Focus", description: "Tailored solutions that hit the mark for your specific needs.", url:"/company/contact-us" },

          ].map((feature, index) => (
            <div key={index} className="bg-zinc-800/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 hover:bg-zinc-800/70 transition-colors duration-300">
              <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={'/company/contact-us'}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
             Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-orange-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}