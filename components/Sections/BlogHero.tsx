'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Zap, Target, Star } from "lucide-react"
import Link from 'next/link'

const categories = [
  { name: "Technology", icon: Zap },
  { name: "Business", icon: Target },
  { name: "Lifestyle", icon: Star },
]

const featuredArticles = [
  { title: "The Future of AI in Web Development", category: "Technology" },
  { title: "10 Strategies for Sustainable Business Growth", category: "Business" },
  { title: "Balancing Work and Life in the Digital Age", category: "Lifestyle" },
]

export default function BlogHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
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
      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center mb-12 pt-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Explore Our <span className="text-orange-500">Blog</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Dive into a world of insights, tips, and stories across various categories. Stay informed and inspired with our latest articles.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 flex items-center">
                <category.icon className="w-8 h-8 text-orange-500 mr-4" />
                <h2 className="text-xl font-semibold text-white">{category.name}</h2>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-orange-500 text-sm mb-2">{article.category}</p>
                  <h3 className="text-lg font-semibold text-white mb-4">{article.title}</h3>
                  <Link href="#" passHref>
                    <Button variant="link" className="text-zinc-300 hover:text-orange-500 p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href="#">
              View All Articles
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-orange-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}