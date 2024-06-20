import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const judgesCollection = collection(db, 'judges');
    const querySnapshot = await getDocs(judgesCollection);

    const judges = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(judges);
  } catch (error) {
    console.error('Error fetching judges from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch judges' });
  }
}
