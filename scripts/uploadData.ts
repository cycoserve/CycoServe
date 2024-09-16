import { Pinecone } from "@pinecone-database/pinecone";
import * as dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

const pinecone = new Pinecone();

async function uploadData() {
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);

  const cycoServeData = [
    {
      "id": "1",
      "text": "CycoServe is a digital marketing and AI solutions company, specializing in web app development and digital transformation services. The company focuses on excellence, creativity, and results to help businesses thrive in the digital landscape."
    },
    {
      "id": "2",
      "text": "CycoServe was founded by seasoned professionals with a vision to revolutionize the digital marketing industry through innovation, integrity, and client-centricity."
    },
    {
      "id": "3",
      "text": "What sets CycoServe apart is its relentless pursuit of excellence in digital marketing, content creation, web development, and SEO optimization, using the latest technologies and strategies."
    },
    {
      "id": "4",
      "text": "CycoServe's team comprises experts in various fields, including digital marketing, web development, graphic design, and content creation, working collaboratively to turn visions into success stories."
    },
    {
      "id": "5",
      "text": "CycoServe provides tailored solutions for startups, small businesses, and large enterprises, focusing on their unique needs, challenges, and goals."
    },
    {
      "id": "6",
      "text": "CycoServe's AI team includes a Content Creator specializing in generating high-quality content, a Data Analyst who provides actionable insights, and a Customer Support agent offering 24/7 support with accuracy and empathy."
    },
    {
      "id": "7",
      "text": "CycoServe's mission is to revolutionize digital services through AI, offering efficient, creative, and innovative solutions that empower businesses to thrive."
    },
    {
      "id": "8",
      "text": "CycoServe envisions a future where AI integrates seamlessly with human expertise to drive progress and solve complex challenges in the digital world."
    },
    {
      "id": "9",
      "text": "CycoServe believes in establishing strong partnerships with clients, valuing them as members of its community and working closely to meet their specific requirements."
    }
  ];
  

  for (const item of cycoServeData) {
    const vector = await getEmbedding(item.text);
    await index.upsert([
      {
        id: item.id,
        values: vector,
        metadata: { text: item.text },
      },
    ]);
  }

  console.log('Data uploaded successfully');
}

async function getEmbedding(text: string): Promise<number[]> {
  // In a real implementation, you would call an embedding API here
  // For this example, we'll just return a dummy embedding
  return Array(1536).fill(0).map(() => Math.random());
}

uploadData().catch(console.error);