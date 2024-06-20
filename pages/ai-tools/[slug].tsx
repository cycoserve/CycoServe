// pages/AiTools/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import SectionWrap from '@/components/elements/SectionWrap';
import HeaderSpace from '@/components/elements/HeaderSpace';
import TitleSection from '@/components/Sections/TitleSection';
import Spacer from '@/components/Spacer';
import AiToolsList from '@/components/ai-tools/AiToolsList';
import Head from 'next/head';

interface AiTool {
    id: string;
    name: string;
    description: string;
    features: string[];
    category: string[];
    pros: string[];
    cons: string[];
    summary: string;
    slug: string;
    imageUrl: string;
}

interface AiToolPageProps {
    aiTool: AiTool;
}

const AiToolPage: React.FC<AiToolPageProps> = ({ aiTool }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>
                    {aiTool.name} - Browse CycoServe AI Tools, CMS, CRM, E-commerce...
                </title>
                <meta name="description" content={aiTool.description} />
                <meta name="keywords" content={`${aiTool.name}, digital marketing, AI, full service, agency, technology, SEO, web design, content creation, marketing strategies`} />
                <meta name="author" content="CycoServe Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={`${aiTool.name} - CycoServe AI Tools`} />
                <meta property="og:description" content={aiTool.description} />
                <meta property="og:image" content={aiTool.imageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@CycoServe" />
                <meta name="twitter:title" content={`${aiTool.name} - CycoServe AI Tools`} />
                <meta name="twitter:description" content={aiTool.description} />
                <meta name="twitter:image" content={aiTool.imageUrl} />
            </Head>
            <RootLayout>
                <HeaderSpace />
                <SectionWrap>
                    <TitleSection subtitle={aiTool.slug} title={aiTool.name} />
                    <div className="container mx-auto p-0 min-h-full">
                        <img src={aiTool.imageUrl} alt={aiTool.name} className="mb-4 w-full h-64 object-cover" />
                        <p className="mb-4">{aiTool.description}</p>
                        <h2 className="text-xl font-semibold mb-2">Features</h2>
                        <ul className="list-disc list-inside mb-4 pl-8">
                            {aiTool.features.map((feature, index) => (
                                <li key={index} className="mb-2 text-sm">{feature}</li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold mb-2">Pros of using {aiTool.name}</h2>
                        <ul className="list-disc list-inside mb-4 pl-8">
                            {aiTool.pros.map((pro, index) => (
                                <li key={index} className="mb-2 text-sm">{pro}</li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold mb-2">Cons of using {aiTool.name}</h2>
                        <ul className="list-disc list-inside mb-4 pl-8">
                            {aiTool.cons.map((con, index) => (
                                <li key={index} className="mb-2 text-sm">{con}</li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold mb-2">Summary of {aiTool.name}</h2>
                        <p>{aiTool.summary}</p>
                    </div>
                </SectionWrap>
                <AiToolsList />
                <Spacer />
            </RootLayout>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ai-tools`);
        const aiTools: AiTool[] = response.data;

        const paths = aiTools.map(aiTool => ({
            params: { slug: aiTool.slug }
        }));

        return { paths, fallback: true };
    } catch (error) {
        console.error('Error fetching AI tools:', error);
        return { paths: [], fallback: true };
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params!;
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ai-tools/${slug}`);
        const aiTool: AiTool = response.data;

        return {
            props: { aiTool },
            revalidate: 1, // Enable ISR with a 1-second revalidation
        };
    } catch (error) {
        console.error('Error fetching AI tool:', error);
        return {
            notFound: true,
        };
    }
};

export default AiToolPage;
