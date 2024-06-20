import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '@/utils/firebase'; // Adjust path to firebase utils
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const CreateOrderPage: React.FC = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const currentUser = getAuth().currentUser;
            if (!currentUser) {
                throw new Error('User not authenticated');
            }

            // Access 'orders' collection in Firestore
            const ordersCollectionRef = collection(db, 'orders');
            const newOrderRef = await addDoc(ordersCollectionRef, {
                name,
                description,
                amount: parseFloat(amount), // Convert amount to number (if needed)
                userId: currentUser.uid, // Use current user's ID
                createdAt: new Date().toISOString(), // Store createdAt timestamp
            });

            console.log('Order added with ID: ', newOrderRef.id);

            // Redirect to dashboard or orders list page after successful submission
            router.push('/dashboard');
        } catch (error) {
            console.error('Error adding order:', error);
            setError('Failed to create order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Create New Order</h1>
                {error && (
                    <div className="mb-4 text-red-500">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="amount" className="block font-medium text-gray-700">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            min="0"
                            step="0.01"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                            loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                    >
                        {loading ? 'Creating...' : 'Create Order'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateOrderPage;
