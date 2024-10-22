import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import RootLayout from "@/components/layouts/RootLayout";
import SectionWrap from "@/components/elements/SectionWrap";
import MetaTags from "@/components/headers/MetaData";
import BlogSwiperComponent from "@/components/sections/BlogSwiperComponent";
import Image from "next/image";




interface Post {
  [x: string]: any;
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  author: number;
  featured_media: number; // ID for the featured image
}

interface Author {
  name: string;
}

interface BlogPostProps {
  post: Post;
  author: Author;
  featuredImageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, author, featuredImageUrl }) => {
  if (!post) {
    return <div className="text-white">Loading...</div>;
  }

  // Short description (truncate the post content)
  const description = post.content.rendered.replace(/<[^>]+>/g, "").slice(0, 150) + "...";

  return (
    <>
      {/* MetaTags for SEO */}
      <MetaTags
        title={`CycoServe - ${post.title.rendered}`}
        description={description}
        url={`https://content-api.cycoserve.com/blog/${post.slug}`}
        imageUrl={featuredImageUrl || "https://content-api.cycoserve.com/assets/images/default-blog-image.jpg"} // Fallback image if no featured image
      />

      <RootLayout>
        <SectionWrap>
          <div className="bg-gradient-t from-zinc-900 to-black min-h-screen py-24">
            <div className="max-w-5xl mx-auto py-4 md:py-8 lg:py-16">
              <h1
                className="text-3xl lg:text-6xl font-bold text-white mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p className="text-sm text-gray-400 mb-6">
                {new Date(post.date).toLocaleDateString()}
                <span className="inline-block mx-2">|</span>
                {author.name}
              </p>
              <Image
                  className="w-full rounded-lg mb-6 aspect-video"
                  src={featuredImageUrl}
                  alt={post.title.rendered}
                  width={500}
                  height={300}
                />
              <article className="bg-black">
                <div
                  className="prose prose-invert max-w-none text-white text-[1.0rem]"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </article>
            </div>
            <BlogSwiperComponent />
          </div>
        </SectionWrap>
      </RootLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    // Fetch the post
    const postResponse = await axios.get(
      `https://content-api.cycoserve.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    const post = postResponse.data[0];

    // Fetch the author
    const authorResponse = await axios.get(
      `https://content-api.cycoserve.com/wp-json/wp/v2/users/${post.author}`
    );
    const author = authorResponse.data;

    // Fetch the featured image if available
    let featuredImageUrl = "";
    if (post.featured_media) {
      const mediaResponse = await axios.get(
        `https://content-api.cycoserve.com/wp-json/wp/v2/media/${post.featured_media}`
      );
      featuredImageUrl = mediaResponse.data.source_url;
    }

    return {
      props: {
        post,
        author,
        featuredImageUrl, // Pass the featured image URL to the component
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
};

export default BlogPost;
