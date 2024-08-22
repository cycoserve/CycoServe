// pages/api/stream-model.ts
import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Specify Edge runtime

export async function POST(req: Request) {
  const { prompt } = await req.json();
  
  // Handle the prompt and stream the response
  try {
    // Simulate streaming response (replace this with actual model streaming logic)
    const stream = new ReadableStream({
      start(controller) {
        // Send chunks of data to the client
        controller.enqueue('This is a chunk of data.');
        // Simulate a delay and send another chunk
        setTimeout(() => controller.enqueue('Here is another chunk.'), 1000);
        // End the stream
        setTimeout(() => controller.close(), 2000);
      },
    });

    return new NextResponse(stream, { status: 200 });
  } catch (error) {
    return new NextResponse('An error occurred', { status: 500 });
  }
}
