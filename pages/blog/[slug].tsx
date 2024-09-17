import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
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
        <div className="bg-gradient-t from-zinc-900 to-black min-h-screen py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {post.title.rendered}
            </h1>
            <p className="text-sm text-gray-400 mb-6">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <article className="bg-black ">
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
