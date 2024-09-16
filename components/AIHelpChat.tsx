import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function AIHelpChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! How can I assist you today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => setIsOpen(!isOpen)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      const userMessage: Message = { role: 'user', content: input }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch response')
        }

        const data = await response.json()
        setMessages(prev => [...prev, data.result as Message])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-background border rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">CycoServe Help Agent</h2>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.content}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button onClick={toggleChat} className="rounded-full h-16 w-16 right-4 border border-zinc-500 hover:border-orange-500">
          <MessageCircle className="h-8 w-8" />
        </Button>
      )}
    </div>
  )
}