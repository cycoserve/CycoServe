import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const servicesCollection = collection(db, 'services');
    const querySnapshot = await getDocs(servicesCollection);

    const services = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch services' });
  }
}
