import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import { db } from '@/utils/firebase'; // Adjust the import path as necessary
import { collection, addDoc } from 'firebase/firestore';

function StayUpdated() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!email) {
            setError('Email is required');
            return;
        }

        try {
            // 1. Save email to Firestore
            await addDoc(collection(db, 'newsLetterSignups'), {
                email,
                timestamp: new Date(),
            });

            // 2. Send email via your SendGrid API
            const response = await fetch('/api/newsLetterSignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setSuccess('Thank you for subscribing!');
            setEmail(''); // Clear the input after successful submission
        } catch (error) {
            console.error('Error during submission:', error);
            setError('There was an error submitting your email. Please try again.');
        }
    };

    return (
        <>
            {/* Stay Updated Section at the Bottom */}
            <div className="mt-8 pt-8 border-t border-zinc-800">
                <div className="text-start">
                    <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Mail className="h-4 w-4 mr-2" />
                            Subscribe
                        </Button>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                </div>
            </div>
        </>
    );
}

export default StayUpdated;
