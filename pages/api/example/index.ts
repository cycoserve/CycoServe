// pages/api/lowercase/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const lowercaseCollection = collection(db, 'lowercase');
    const querySnapshot = await getDocs(lowercaseCollection);

    const lowercase = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(lowercase);
  } catch (error) {
    console.error('Error fetching lowercase from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch lowercase' });
  }
}
