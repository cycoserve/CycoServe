import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone();

export async function initPinecone() {
  // Pinecone client is initialized automatically
  // No need for explicit initialization
}

export async function queryCustomData(query: string) {
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);
  
  const queryEmbedding = await getEmbedding(query);
  const searchResponse = await index.query({
    vector: queryEmbedding,
    topK: 3,
    includeMetadata: true,
  });

  return searchResponse.matches?.map(match => match.metadata?.text as string).join("\n") || "";
}

async function getEmbedding(text: string): Promise<number[]> {
  // In a real implementation, you would call an embedding API here
  // For this example, we'll just return a dummy embedding
  return Array(1536).fill(0).map(() => Math.random());
}