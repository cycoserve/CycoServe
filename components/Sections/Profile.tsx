import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/utils/firebase'; // Adjust import path for Firebase config

interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
  bio?: string | null;
  // Add more fields as needed
}

interface UserProfileProps {} // No need for explicit user prop type

const UserProfile: React.FC<UserProfileProps> = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fetchedUser) => {
      setUser(fetchedUser);
      setIsLoading(false); // Set loading state to false after user data is fetched
    });

    return () => unsubscribe();
  }, [auth]); // Add auth as a dependency to rerun when auth changes

  const handleAddToDatabase = async () => {
    if (!user) {
      console.error('User information not available.');
      return;
    }

    const { uid } = user; // Destructure uid directly from user

    try {
      const newRecord = {
        // ... add your new record data here, including other fields as needed
        uid, // Add uid to the record
        createdAt: serverTimestamp(), // Set timestamp using serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'yourCollectionName'), newRecord);
      console.log('Document written with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="profile-container flex justify-center items-center gap-4">
      {isLoading ? (
        <p>Loading profile...</p>
      ) : (
        <>
        <div className='flex justify-center items-center'>
                    {user && (
            <>
              {user.photoURL && (
                <img src={user.photoURL} alt="Profile" className="profile-avatar rounded-full w-6 h-auto" />
              )}
              <div className='text-sm'>{user.displayName}</div>
              <p className='text-sm'>Logged in as: {user.email}</p>
            </>
          )}
        </div>

        </>
      )}
    </div>
  );
};

export default UserProfile;
