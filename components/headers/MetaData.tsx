import React from 'react';
import Head from 'next/head'; // Use this for Next.js. If using React, import from 'react-helmet' instead.

// Define the prop types
interface MetaTagsProps {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  locale?: string;
  siteName?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "CycoServe Labs",
  description = "CycoServe Labs is at the forefront of open-source solutions, providing cutting-edge tools for web development, AI, and data-driven technologies. Join us as we make technology more accessible and open for innovators worldwide.",
  url = "https://cycoserve.com",
  imageUrl = "https://cycoserve.com/assets/images/labs-hero-image.jpg",
  locale = "en_US",
  siteName = "CycoServe Labs",
}) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Optional Meta Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="A representation of CycoServe Labs' innovative technology solutions." />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Mobile theme color */}
      <meta name="theme-color" content="#000000" /> {/* Replace with CycoServe's actual brand color */}

      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaTags;
