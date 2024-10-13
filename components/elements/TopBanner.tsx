import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-orange-500 to-zinc-900 text-white py-3 px-4 relative overflow-hidden">
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-500/5 rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            }}
          />
        ))}
      </div> */}
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <p className="text-sm sm:text-base font-medium">
          <span className="hidden sm:inline">🎉</span> Welcome to CycoServe: Revolutionizing Your Digital Experience
        </p>
        <Button asChild variant="ghost" size="sm" className="text-white hover:text-orange-300 hover:bg-zinc-800/50">
          <Link href="https://www.example.com/learn-more">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}