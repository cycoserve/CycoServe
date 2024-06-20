import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../utils/firebase'; // Adjust the path to your firebase config file

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const navigationsCollection = collection(db, 'navigations');
    const q = query(navigationsCollection, orderBy('order'));

    const querySnapshot = await getDocs(q);

    const navigations = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(navigations);
  } catch (error) {
    console.error('Error fetching navigations from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch navigations' });
  }
}
