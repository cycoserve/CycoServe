// pages/api/apps/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const appsCollection = collection(db, 'apps');
    const querySnapshot = await getDocs(appsCollection);

    const apps = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(apps);
  } catch (error) {
    console.error('Error fetching apps from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch apps' });
  }
}
