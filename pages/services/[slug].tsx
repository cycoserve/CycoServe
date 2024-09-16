// pages/services/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import SectionWrap from '@/components/elements/SectionWrap';
import HeaderSpace from '@/components/elements/HeaderSpace';
import TitleSection from '@/components/Sections/TitleSection';
import ServicesList from '@/components/services/ServicesList';
import Spacer from '@/components/ui/Spacer';
import Head from 'next/head';


interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
}

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          {service.name} - Browse CycoServe services, CMS, CRM, E-commerce...
        </title>
        <meta
          name="description"
          content={service.description}
        />
        <meta
          name="keywords"
          content={`${service.name}, digital marketing, AI, full service, agency, technology, SEO, web design, content creation, marketing strategies`}
        />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`${service.name} - CycoServe Services`}
        />
        <meta
          property="og:description"
          content={service.description}
        />
        <meta property="og:image" content={service.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content={`${service.name} - CycoServe services`}
        />
        <meta
          name="twitter:description"
          content={service.description}
        />
        <meta name="twitter:image" content={service.imageUrl} />
      </Head>
      <RootLayout>
        <HeaderSpace />
        <SectionWrap>
          <TitleSection
            subtitle={service.slug}
            title={service.name}
          />
          <div className="container mx-auto p-0 min-h-full">
            <img src={service.imageUrl} alt={service.name} className="mb-4 w-full h-64 object-cover" />
            <p className="mb-4">{service.description}</p>
            <p className="text-xl font-semibold">${service.price}</p>
          </div>
        </SectionWrap>
        <ServicesList />
        <Spacer />
      </RootLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services`);
    const services: Service[] = response.data;

    const paths = services.map(service => ({
      params: { slug: service.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching services:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/${slug}`);
    const service: Service = response.data;

    return {
      props: { service },
      revalidate: 1, // Enable ISR with a 1-second revalidation
    };
  } catch (error) {
    console.error('Error fetching service:', error);
    return {
      notFound: true,
    };
  }
};

export default ServicePage;
