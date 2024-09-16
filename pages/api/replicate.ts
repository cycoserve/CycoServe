import type { NextApiRequest, NextApiResponse } from 'next';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN as string,
});

type Data = {
  error?: string;
  result?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { prompt } = req.body as { prompt: string };

    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const input = {
      top_p: 0.9,
      prompt: `Say sure i can help:\n\n${prompt}`,
      min_tokens: 0,
      temperature: 0.6,
      prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a poet named Evan.<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
      presence_penalty: 1.15,
    };

    try {
      const result = await replicate.run('meta/meta-llama-3-70b-instruct', { input });
      res.status(200).json({ result });
    } catch (error) {
      console.error('Error running Replicate model:', error);
      res.status(500).json({ error: 'Error running the Replicate model' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
