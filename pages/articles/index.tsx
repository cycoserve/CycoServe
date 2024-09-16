import Head from "next/head";
import RootLayout from "../../components/Layouts/RootLayout";
import ArticlesList from "@/components/articles/ArticlesList";
import HeaderSpace from "@/components/elements/HeaderSpace";



export default function ArticlesPage() {
    return (
        <>
            <Head>
                <title>
                    Articles - CycoServe | A.I. Powered Full-Service Digital Marketing Agency
                </title>
                <meta name="description" content="Explore the latest insights and trends in digital marketing, AI, and business growth strategies on the CycoServe blog." />
            </Head>
            <RootLayout>
                <HeaderSpace />
                <div className="bg-white">
                    <div className="container mx-auto px-4 py-16">
                        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">CycoServe Blog</h1>
                        <p className="text-xl text-center text-gray-600 mb-12">Insights, Trends, and Strategies for Digital Success</p>
                        <ArticlesList />
                    </div>
                </div>
                <div className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Stay Informed with CycoServe</h2>
                        <p className="text-lg text-center text-gray-600 mb-12">
                            Subscribe to our newsletter for the latest updates, tips, and industry insights.
                        </p>
                        <div className="max-w-md mx-auto">
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </RootLayout>
        </>
    );
}
