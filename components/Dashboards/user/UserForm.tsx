import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/utils/firebase';


interface UserForm {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
  bio?: string | null;
  // Add more fields as needed
}

const UserForm = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fetchedUser) => {
      setUser(fetchedUser);
      setIsLoading(false); // Set loading state to false after user data is fetched
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setError('User information not available. Please try again later.');
      return;
    }

    const { uid } = user;

    try {
      const newRecord = {
        name,
        email,
        uid, // Add uid to the record
        createdAt: serverTimestamp(), // Set timestamp using serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'users'), newRecord); // Replace 'users' with your actual collection name
      console.log('Document written with ID:', docRef.id);
      setName(''); // Clear form fields after successful submission
      setEmail('');
      setError(''); // Clear any previous errors
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      setError('An error occurred while creating the user. Please try again.');
    }
  };

  return (
    <div className="user-form-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && <p className="text-red-500">{error}</p>}
          <label htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            required
          />
          <label htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-sm transition duration-300">
            Add User
          </button>
        </form>
      )}
    </div>
  );
};

export default UserForm;
