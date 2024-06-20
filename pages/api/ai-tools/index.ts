// pages/api/aiTools/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const aiToolsCollection = collection(db, 'aiTools');
    const querySnapshot = await getDocs(aiToolsCollection);

    const aiTools = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(aiTools);
  } catch (error) {
    console.error('Error fetching aiTools from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch aiTools' });
  }
}
