import React from "react"

interface TitleSectionProps {
  title: string
  subtitle: string
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div className="relative mb-8 overflow-hidden">
      <div className="absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="max-w-3xl">
          <h2 className="text-sm sm:text-base text-orange-500 font-semibold tracking-wide uppercase mb-2">
            {subtitle}
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {title}
          </h1>
          <div className="h-1 w-40 bg-orange-500 rounded-full" />
        </div>
      </div>
    </div>
  )
}