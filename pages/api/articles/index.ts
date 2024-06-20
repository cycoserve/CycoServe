// pages/api/articles/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const articlesCollection = collection(db, 'articles');
    const querySnapshot = await getDocs(articlesCollection);

    const articles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles from Firestore:', error);
    res.status(500).json({ message: 'Failed to fetch articles' });
  }
}
