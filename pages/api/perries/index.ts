import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const perriesCollection = collection(db, 'perries');
    const querySnapshot = await getDocs(perriesCollection);

    const perries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(perries);
  } catch (error) {
    console.error('Error fetching perries from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch perries' });
  }
}
