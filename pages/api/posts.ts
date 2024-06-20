// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase'; // Adjust the path to your firebaseConfig file

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
}
