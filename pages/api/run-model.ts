// pages/api/run-model.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

type RequestBody = {
  prompt: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt }: RequestBody = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
      // Define input for the model
      const input = {
        prompt,
        max_tokens: 1024,
      };

      // Run the model
      const output = await replicate.run('meta/meta-llama-3.1-405b-instruct', { input });

      return res.status(200).json({ output });
    } catch (error) {
      console.error('Error running model:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
