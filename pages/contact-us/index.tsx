import BranchLayout from '@/components/Layouts/BranchLayout';
import { useState, FormEvent } from 'react';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setResponseMessage(data.message || data.error);
        } catch (error) {
            console.error('Error sending email:', error);
            setResponseMessage('Failed to send email');
        }
    };

    return (
        <>
            <BranchLayout>
                <div className="bg-white min-h-screen max-w-3xl mx-auto px-4 py-8 ">
                    <h1 className="text-2xl font-semibold mb-6 text-zinc-800 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 ring-2 ring-gray-100">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-zinc-700">Name:</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-zinc-700">Email:</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-zinc-700">Subject:</label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm"
                                placeholder="Subject of Your Message"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-zinc-700">Message:</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm"
                                rows={4}
                                placeholder="Your message here..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white py-2 px-8 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                        >
                            Send Message
                        </button>
                    </form>
                    {responseMessage && <p className="mt-4 text-zinc-700">{responseMessage}</p>}
                </div>
            </BranchLayout>

        </>

    );
}
