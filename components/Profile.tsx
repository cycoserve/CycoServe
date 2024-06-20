import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/utils/firebase'; // Adjust import path for Firebase config

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
  bio?: string | null;
  // Add more fields as needed
}

interface ProfileProps {} // No need for explicit user prop type

const Profile: React.FC<ProfileProps> = () => {
  const [user, setUser] = useState<User | null>(null);
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
    <div className="profile-container flex flex-col justify-center items-center gap-2">
      {isLoading ? (
        <p>Loading profile...</p>
      ) : (
        <>
          {user && ( // Conditionally render user details if user exists
            <>
              {user.photoURL && (
                <img src={user.photoURL} alt="Profile" className="profile-avatar rounded-full w-24 h-auto" />
              )}
              <h3>{user.displayName}</h3>
              <p>{user.email}</p>
              {user.bio && <p>Bio: {user.bio}</p>}
              <Link href={'/dashboard'} className="text-orange-400 hover:text-orange-800">Dashboard Area</Link>
              <button onClick={handleAddToDatabase}>Add to Database</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
