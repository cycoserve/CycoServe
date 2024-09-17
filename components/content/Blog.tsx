import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  date: string;
  _embedded: {
    'wp:featuredmedia'?: [
      {
        source_url: string;
      }
    ];
    author?: [
      {
        name: string;
      }
    ];
  };
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://content-api.cycoserve.com/wp-json/wp/v2/posts?_embed');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-black rounded-md border border-zinc-800 p-2 animate-pulse"
            >
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-600 rounded w-full mb-4"></div>
                <div className="h-10 bg-orange-500 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="bg-gradient-to-br mb-12 from-zinc-900 to-black rounded-md border border-zinc-800 hover:border-orange-500 p-2"
            >
              {post._embedded && post._embedded['wp:featuredmedia'] && (
                <Image
                  className="w-full rounded-lg mb-4 aspect-square"
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  width={500}
                  height={300}
                />
              )}
              <div className="p-2 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title.rendered}</h3>

                {/* Date and Author in flex container */}
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  {post._embedded && post._embedded.author && (
                    <span>By {post._embedded.author[0].name}</span>
                  )}
                </div>

                <div
                  className="text-gray-300 mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link href={`/blog/${post.slug}`}>
                  <span className="inline-block bg-transparent ring-1 ring-zinc-800 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                    Read More
                  </span>
                </Link>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-black to-zinc-950 mt-12 flex justify-center border border-zinc-800 rounded-lg p-2 ">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={`${
                  currentPage === pageNumber
                    ? 'z-10 bg-orange-500 text-white'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                } relative inline-flex items-center px-4 py-2 border border-orange-500 text-sm font-medium transition-colors duration-300`}
              >
                {pageNumber}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;
