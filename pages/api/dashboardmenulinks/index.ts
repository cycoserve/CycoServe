import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dashboardmenulinksCollection = collection(db, 'dashboardmenulinks');
    const querySnapshot = await getDocs(dashboardmenulinksCollection);

    const dashboardmenulinks = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(dashboardmenulinks);
  } catch (error) {
    console.error('Error fetching dashboardmenulinks from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch dashboardmenulinks' });
  }
}
