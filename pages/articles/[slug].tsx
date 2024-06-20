import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import SectionWrap from '@/components/elements/SectionWrap';
import HeaderSpace from '@/components/elements/HeaderSpace';
import TitleSection from '@/components/Sections/TitleSection';
import Spacer from '@/components/Spacer';
import Head from 'next/head';
import Image from 'next/image';
import ArticlesList from '@/components/articles/ArticlesList';
import Contain from '@/components/Layouts/Contain';
import BlogSidebar from '@/components/Layouts/BlogSidebar';

interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
}

interface ArticlePageProps {
  article: Article | null;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Head>
        <title>{article.title} - Browse CycoServe articles, CMS, CRM, E-commerce...</title>
        <meta name="description" content={article.content} />
        <meta name="keywords" content={`${article.title}, digital marketing, AI, full article, agency, technology, SEO, web design, content creation, marketing strategies`} />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${article.title} - CycoServe articles`} />
        <meta property="og:description" content={article.content} />
        <meta property="og:image" content={article.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta name="twitter:title" content={`${article.title} - CycoServe articles`} />
        <meta name="twitter:description" content={article.content} />
        <meta name="twitter:image" content={article.imageUrl} />
      </Head>
      <RootLayout>
        <HeaderSpace />
        <Contain>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-screen pt-12">
            <div className="lg:col-span-3">
              <img src={article.imageUrl} alt={article.title} className="mb-4 w-full aspect-video rounded-lg object-cover" width={1920} height={400} />
              <h1>{article.title}</h1>
              <hr />
              <div className="mb-20">
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </Contain>
        <Spacer />
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

    console.log('Generated paths:', paths); // Log the generated paths

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
      revalidate: 1, // Enable ISR with a 1-second revalidation
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true,
    };
  }
};

export default ArticlePage;
