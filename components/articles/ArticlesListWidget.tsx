import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios, { AxiosError } from "axios"; // Import Axios and AxiosError

interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
  excerpt: string;
}

const ArticlesListWidget: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<Article[]>('/api/articles'); // Use Axios to fetch data
        // Limiting to only first 5 articles
        setArticles(response.data.slice(0, 5));
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          // Handle Axios-specific error
          setError(error.message);
        } else if (error instanceof Error) {
          // Handle generic JavaScript error
          setError(error.message);
        } else {
          // Handle other unknown errors
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="article-list-widget">
      {articles.map((article) => (
        <div key={article.id} className="article-item">
          <div className="article-image">
            <img className="border rounded-lg aspect-video p-[1px]" src={article.imageUrl} alt={article.title} width={120} height={80} />
          </div>
          <div className="article-content">
            <h3 className="article-title">
              <Link href={`/articles/${article.slug}`} className="hover:underline">
                <div className="line-clamp-2">{article.title}</div>
              </Link>
            </h3>
            <p className="article-excerpt line-clamp-2">{article.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesListWidget;
