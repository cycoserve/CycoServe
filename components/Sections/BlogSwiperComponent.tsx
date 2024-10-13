// components/BlogSwiperComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
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

const BlogSwiperComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts'); // Adjust the API endpoint as necessary
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-black rounded-md border border-zinc-800 p-2 animate-pulse"
            >
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-600 rounded w-full mb-4"></div>
                <div className="h-10 bg-purple-500 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <section className="container py-6 mx-auto lg:px-0 bg-transparent rounded-md my-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custom-swiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col items-start bg-gradient-to-br from-zinc-900 to-black p-2 rounded-lg border border-zinc-800 hover:border-orange-500">
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <Image
                      className="w-full aspect-video object-cover rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post.title.rendered}
                      width={500}
                      height={500}
                    />
                  )}
                  <h2 className="text-lg text-start font-bold text-white mb-2 line-clamp-1">
                    {post.title.rendered}
                  </h2>
                  <p className="text-[0.8rem] text-white mb-4 line-clamp-2">
                    {post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')} {/* Removing HTML tags */}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default BlogSwiperComponent;
