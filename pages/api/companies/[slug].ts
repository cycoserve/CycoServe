// pages/api/companies/[slug].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  try {
    const companiesCollection = collection(db, 'companies');
    const q = query(companiesCollection, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const service = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };

    res.status(200).json(service);
  } catch (error) {
    console.error('Error fetching service from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch service' });
  }
}
