'use client'

import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import { useState } from 'react'


export function NewsletterSignupComponent() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // TODO: Implement your newsletter signup logic here
    // This is a placeholder to simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-lg hover:border-orange-500 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">
            Stay updated with our newsletter
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Get the latest news and updates delivered straight to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex">
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 bg-zinc-800 border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
        {status === 'success' && (
          <p className="mt-3 text-sm text-green-400">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-400">An error occurred. Please try again.</p>
        )}
      </div>
    </section>
  )
}