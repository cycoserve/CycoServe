import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ringsCollection = collection(db, 'rings');
    const querySnapshot = await getDocs(ringsCollection);

    const rings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(rings);
  } catch (error) {
    console.error('Error fetching rings from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch rings' });
  }
}
