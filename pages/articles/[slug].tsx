import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
  author: string;
  date: string;
}

interface ArticlePageProps {
  article: Article | null;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const router = useRouter();
  const defaultImageUrl = '/images/dj-trump.webp'; // Make sure to add a default image to your public folder

  if (router.isFallback) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
    </div>;
  }

  if (!article) {
    return <div className="text-center text-2xl text-gray-800 mt-20">Article not found</div>;
  }

  const imageUrl = article.imageUrl && article.imageUrl.startsWith('http') ? article.imageUrl : defaultImageUrl;

  return (
    <>
      <Head>
        <title>{article.title} - CycoServe Blog</title>
        <meta name="description" content={article.content.substring(0, 160)} />
        <meta property="og:title" content={`${article.title} - CycoServe Blog`} />
        <meta property="og:description" content={article.content.substring(0, 160)} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <RootLayout>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link href="/articles" className="inline-block mb-8 text-orange-500 hover:text-orange-600 transition-colors duration-300">
            ← Back to Articles
          </Link>
          <article>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">{article.author}</span>
              <span>{article.date}</span>
            </div>
            <div className="relative w-full h-96 mb-8">
              <img
                src={imageUrl}
                alt={article.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </article>
        </div>
        <div className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Related Articles</h2>
            {/* Add related articles component here */}
          </div>
        </div>
      </RootLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/articles`);
    const articles: Article[] = response.data;

    const paths = articles.map(article => ({
      params: { slug: article.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/articles/${slug}`);
    const article: Article = response.data;

    if (!article) {
      return { notFound: true };
    }

    return {
      props: { article },
      revalidate: 60, // Enable ISR with a 60-second revalidation
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true,
    };
  }
};

export default ArticlePage;
