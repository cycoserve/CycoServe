import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase'; // Adjust the path to your firebase config file

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ordersCollection = collection(db, 'orders');
    const querySnapshot = await getDocs(ordersCollection);

    const orders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
}
