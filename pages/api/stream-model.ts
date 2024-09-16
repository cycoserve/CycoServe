// pages/api/stream-model.ts
import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Specify Edge runtime

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue('This is a chunk of data.');
        setTimeout(() => controller.enqueue('Here is another chunk.'), 1000);
        setTimeout(() => controller.close(), 2000);
      },
    });

    return new Response(stream, { status: 200 });
  } catch (error) {
    return new Response('An error occurred', { status: 500 });
  }
}

