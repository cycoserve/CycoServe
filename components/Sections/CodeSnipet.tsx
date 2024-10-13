'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const codeSnippet = `npm install cycoserve

import { CycoApp, CycoHeader, CycoMain, CycoFooter } from 'cycoserve'

export default function MyApp() {
  return (
    <CycoApp>
      <CycoHeader title="My Awesome App" />
      <CycoMain>
        <h1>Welcome to my app!</h1>
      </CycoMain>
      <CycoFooter />
    </CycoApp>
  )
}`

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Code Block */}
          <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                showLineNumbers
                wrapLines
                className="text-sm sm:text-base"
              >
                {codeSnippet}
              </SyntaxHighlighter>
            </CardContent>
          </Card>

          {/* Explanation Section */}
          <div className="space-y-6 md:px-6">
            <h2 className="text-4xl font-bold">Get Started in Minutes</h2>
            <p className="text-zinc-300">
              CycoServe makes it incredibly easy to build powerful web applications. With our intuitive components and streamlined setup process, you'll be up and running in no time.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Simple installation with npm</li>
              <li>Pre-built, customizable components</li>
              <li>Seamless integration with Next.js</li>
              <li>Responsive design out of the box</li>
            </ul>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="https://docs.cycoserve.com">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-4 w-24 h-24 bg-orange-500/10 rounded-full filter blur-xl" />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl" />
    </div>
  )
}
