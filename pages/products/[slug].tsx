// pages/products/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import SectionWrap from '@/components/elements/SectionWrap';
import HeaderSpace from '@/components/elements/HeaderSpace';
import TitleSection from '@/components/Sections/TitleSection';
import Spacer from '@/components/Spacer';
import ProductsList from '@/components/products/ProductsList';
import Head from 'next/head';

interface Product {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
  createdAt: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          {product.title} - Browse CycoServe Products, CMS, CRM, E-commerce...
        </title>
        <meta name="description" content={product.content} />
        <meta
          name="keywords"
          content={`${product.title}, digital marketing, AI, full service, agency, technology, SEO, web design, content creation, marketing strategies`}
        />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${product.title} - CycoServe Products`} />
        <meta property="og:description" content={product.content} />
        <meta property="og:image" content={product.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta name="twitter:title" content={`${product.title} - CycoServe Products`} />
        <meta name="twitter:description" content={product.content} />
        <meta name="twitter:image" content={product.imageUrl} />
      </Head>
      <RootLayout>
        <HeaderSpace />
        <SectionWrap>
          <TitleSection subtitle={product.slug} title={product.title} />
          <div className="container mx-auto p-0 min-h-full">
            <img src={product.imageUrl} alt={product.title} className="mb-4 w-full h-64 object-cover" />
            <p className="mb-4">{product.content}</p>
          </div>
        </SectionWrap>
        <ProductsList />
        <Spacer />
      </RootLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
    const products: Product[] = response.data;

    const paths = products.map(product => ({
      params: { slug: product.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${slug}`);
    const product: Product = response.data;

    return {
      props: { product },
      revalidate: 1, // Enable ISR with a 1-second revalidation
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true,
    };
  }
};

export default ProductPage;
