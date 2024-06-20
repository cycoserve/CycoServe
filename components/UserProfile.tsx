// UserProfile.tsx
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Ensure the path to your firebase configuration is correct

type UserProfileProps = {
  userId: string;
};

type UserProfileData = {
  name: string;
  email: string;
};

const UserProfile = ({ userId }: UserProfileProps) => {
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const docRef = doc(db, 'users', userId);
        console.log(`Fetching user profile for ID: ${userId}`); // Debug log
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log('User profile data:', docSnap.data()); // Debug log
          setProfile(docSnap.data() as UserProfileData);
        } else {
          console.log('No such user profile!'); // Debug log
          setError('No such user profile!');
        }
      } catch (err) {
        console.error('Error fetching user profile:', err); // Debug log
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    profile ? (
      <div>
        <h1>{profile.name}&apos;s Profile</h1>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
    ) : (
      <div>No user profile found</div>
    )
  );
};

export default UserProfile;
