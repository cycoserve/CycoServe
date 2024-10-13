import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const wpUrl = process.env.WORDPRESS_API_URL;
  const baseUrl = `${wpUrl}/wp-json/wp/v2/posts?_embed`;

  try {
    let allPosts: any[] = [];
    let page = 1;
    let totalPages = 1;

    // Fetch all posts across pages
    do {
      const response = await axios.get(`${baseUrl}&per_page=100&page=${page}`);
      totalPages = parseInt(response.headers['x-wp-total-pages'], 15000);
      allPosts = [...allPosts, ...response.data];
      page += 1;
    } while (page <= totalPages);

    // Send the posts back in the response
    res.status(200).json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
}
