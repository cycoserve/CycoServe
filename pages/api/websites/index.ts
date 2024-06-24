import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const websitesCollection = collection(db, 'websites');
    const querySnapshot = await getDocs(websitesCollection);

    const websites = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(websites);
  } catch (error) {
    console.error('Error fetching websites from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch websites' });
  }
}
