'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Facebook } from 'lucide-react'

export function AuthPageComponent() {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-zinc-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Card className="w-full max-w-md relative bg-zinc-900/30 backdrop-blur-xl border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome to CycoServe</CardTitle>
          <CardDescription className="text-center text-zinc-400">
            {isLogin ? "Log in to your account" : "Create a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="credentials" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
              <TabsTrigger value="credentials" className="data-[state=active]:bg-zinc-700">Email</TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-zinc-700">Social</TabsTrigger>
            </TabsList>
            <TabsContent value="credentials">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-zinc-300">Password</Label>
                  <Input id="password" type="password" required className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-zinc-300">Confirm Password</Label>
                    <Input id="confirm-password" type="password" required className="bg-zinc-800 border-zinc-700 text-white" />
                  </div>
                )}
                <Button type="submit" className="w-full bg-zinc-100 text-black hover:bg-zinc-200">
                  {isLogin ? "Log in" : "Sign up"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="social">
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full border-zinc-700 text-white hover:bg-zinc-800 bg-gradient-to-r from-zinc-800 to-zinc-900"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-zinc-700 text-white hover:bg-zinc-800 bg-gradient-to-r from-zinc-800 to-zinc-900"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Continue with GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-zinc-700 text-white hover:bg-zinc-800 bg-gradient-to-r from-zinc-800 to-zinc-900"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Continue with Facebook
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full text-zinc-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className="p-0 h-auto font-normal text-zinc-300 hover:text-white"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Log in"}
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}