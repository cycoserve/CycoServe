import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
}

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error: any) {
        setError(error.message);
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
    <div className="my-0 container mx-auto p-4 rounded-lg ring-1 ring-orange-300 bg-opacity-100 bg-white lg:px-4">
      <section className="container lg:px-0 py-0 lg:py-0 mx-auto my-0">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {articles.map((article) => (
              <div key={article.id} className="bg-white p-2">
                <Link href={`/articles/${article.slug}`}>
                  <div>
                    <img
                      className="w-full aspect-video rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                      src={article.imageUrl}
                      alt={article.title}
                  
                    />
                    <h2 className="text-xl font-bold text-zinc-900 mb-2 hover:text-zinc-500 line-clamp-2">
                      {article.title}
                    </h2>
                  </div>
                </Link>
                <p className="text-sm text-zinc-900 mb-4 line-clamp-2">
                  {article.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesList;
