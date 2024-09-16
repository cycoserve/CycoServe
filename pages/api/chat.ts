import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
import { queryCustomData, initPinecone } from '../../utils/customData'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' })
  }

  try {
    await initPinecone();

    const { messages } = req.body
    const lastMessage = messages[messages.length - 1].content
    const customData = await queryCustomData(lastMessage)

    const augmentedMessages = [
      { role: 'system', content: 'You are a helpful assistant. Use the following information to answer the user\'s question if relevant: ' + customData },
      ...messages
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: augmentedMessages,
    })

    res.status(200).json({ result: completion.choices[0].message })
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data)
      res.status(error.response.status).json(error.response.data)
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`)
      res.status(500).json({ error: 'An error occurred during your request.' })
    }
  }
}