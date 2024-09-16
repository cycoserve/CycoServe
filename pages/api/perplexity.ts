// pages/api/perplexity.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.body; // Get the user's question from the request body

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  const url = 'https://api.perplexity.ai/chat/completions';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}` // Fetching the key from environment variable
  };

  const body = {
    "model": "pplx-7b-online",
    "stream": false,
    "max_tokens": 1024,
    "frequency_penalty": 1,
    "temperature": 0.0,
    "messages": [
      {
        "role": "system",
        "content": "Be precise and concise in your responses."
      },
      {
        "role": "user",
        "content": question // User's question
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
