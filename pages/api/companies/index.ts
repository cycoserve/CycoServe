import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const companiesCollection = collection(db, 'companies');
    const querySnapshot = await getDocs(companiesCollection);

    const companies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(companies);
  } catch (error) {
    console.error('Error fetching companies from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch companies' });
  }
}
