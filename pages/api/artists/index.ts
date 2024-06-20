// pages/api/artists/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const artistsCollection = collection(db, 'artists');
    const querySnapshot = await getDocs(artistsCollection);

    const artists = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(artists);
  } catch (error) {
    console.error('Error fetching artists from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch artists' });
  }
}
