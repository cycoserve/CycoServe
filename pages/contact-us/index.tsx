'use client'

import { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RootLayout from '@/components/Layouts/RootLayout'
import Spacer from '@/components/ui/Spacer'

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export default function Component() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [responseMessage, setResponseMessage] = useState<string>('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            setResponseMessage(data.message || data.error)
        } catch (error) {
            console.error('Error sending email:', error)
            setResponseMessage('Failed to send email')
        }
    }

    return (
        <>
            <RootLayout>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 pb-24 pt-32 px-4">
                    <div className="w-full max-w-md pt-4">
                        <Card className="backdrop-blur-lg bg-black/30 border-zinc-800 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-center text-white">Contact Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium text-gray-300">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            placeholder="Your Name"
                                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            placeholder="you@example.com"
                                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</Label>
                                        <Input
                                            id="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                            placeholder="Subject of Your Message"
                                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium text-gray-300">Message</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            placeholder="Your message here..."
                                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                                            rows={4}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                        Send Message
                                    </Button>
                                </form>
                                {responseMessage && (
                                    <p className="mt-4 text-sm text-center text-gray-300">{responseMessage}</p>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </RootLayout>
        </>

    )
}