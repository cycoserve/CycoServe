import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";
import SectionWrap from "@/components/elements/SectionWrap";
import Spacer from "@/components/ui/Spacer";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  if (!post) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <RootLayout>
      <SectionWrap>
        <Spacer />
        <div className="bg-black min-h-screen py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-zinc-800 shadow-lg rounded-lg border border-orange-500 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                {post.title.rendered}
              </h1>
              <p className="text-sm text-gray-400 mb-6">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <div
                className="prose prose-invert max-w-none text-white"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </article>
          </div>
        </div>
      </SectionWrap>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    const response = await axios.get(
      `https://content-api.cycoserve.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    const post = response.data[0];

    return {
      props: {
        post,
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
