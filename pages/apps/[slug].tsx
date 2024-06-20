// pages/Apps/[slug].tsx
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

interface App {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  category: string[];
  slug: string;
  imageUrl: string;
  active: boolean;
  website: string;
}

interface AppPageProps {
  app: App;
}

const AppPage: React.FC<AppPageProps> = ({ app }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <>
      <Head>
        <title>{app.title} - Browse CycoServe apps, CMS, CRM, E-commerce...</title>
        <meta name="description" content={app.description} />
        <meta name="keywords" content={`${app.title}, digital marketing, AI, full app, agency, technology, SEO, web design, content creation, marketing strategies`} />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${app.title} - CycoServe apps`} />
        <meta property="og:description" content={app.description} />
        <meta property="og:image" content={app.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta name="twitter:title" content={`${app.title} - CycoServe apps`} />
        <meta name="twitter:description" content={app.description} />
        <meta name="twitter:image" content={app.imageUrl} />
      </Head>
      <RootLayout>
        <HeaderSpace />
        <SectionWrap>
          <TitleSection subtitle={app.slug} title={app.title} />
          <div className="container mx-auto p-0 min-h-full">
            <Image src={app.imageUrl} alt={app.title} className="mb-4 w-full h-64 object-cover" width={1000} height={400} layout="responsive" />
            <p className="mb-4">{app.description}</p>
          </div>
        </SectionWrap>
        <ArticlesList />
        <Spacer />
      </RootLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/apps`);
    const apps: App[] = response.data;

    const paths = apps.map(app => ({
      params: { slug: app.slug },
    }));

    console.log('Generated paths:', paths); // Log the generated paths

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching apps:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/apps/${slug}`);
    const app: App = response.data;

    if (!app) {
      return { notFound: true };
    }

    return {
      props: { app },
      revalidate: 1, // Enable ISR with a 1-second revalidation
    };
  } catch (error) {
    console.error('Error fetching app:', error);
    return {
      notFound: true,
    };
  }
};

export default AppPage;
