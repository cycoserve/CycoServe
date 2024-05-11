import React from "react";
import Link from "next/link";
import Image from "next/image";

// Static data for blog posts
const blogPosts = [
    {
      id: 1,
      title: "The Impact of AI on Modern Business Practices",
      description: "Explore how artificial intelligence is revolutionizing industries and reshaping the future of work.",
      image: "/assets/impact-of-ai.jpg",
      slug: "the-impact-of-ai-on-modern-business-practices",
    },
    {
      id: 2,
      title: "10 Ways to Boost Your Productivity While Working Remotely",
      description: "Discover practical tips and strategies to enhance your productivity when working from home or remotely.",
      image: "/assets/Default_A_futuristic_radio_station_nestled_in_the_snowy_peaks_2.jpg",
      slug: "10-ways-to-boost-your-productivity-while-working-remotely",
    },
    {
      id: 3,
      title: "The Rise of E-Commerce: Trends and Future Predictions",
      description: "Learn about the latest trends in e-commerce and predictions for the future of online retail.",
      image: "/assets/rise-of-eccomerce.jpg",
      slug: "the-rise-of-e-commerce-trends-and-future-predictions",
    },
    {
      id: 4,
      title: "Effective Strategies for Social Media Marketing Success",
      description: "Discover proven techniques and best practices for achieving success in social media marketing campaigns.",
      image: "/assets/social-media-marketing.jpg",
      slug: "effective-strategies-for-social-media-marketing-success",
    },
    {
      id: 5,
      title: "The Power of Data: Leveraging Analytics for Business Growth",
      description: "Unlock the potential of data analytics and harness its power to drive business growth and decision-making.",
      image: "/assets/Default_A_futuristic_radio_station_nestled_in_the_snowy_peaks_2.jpg",
      slug: "the-power-of-data-leveraging-analytics-for-business-growth",
    },
    {
      id: 6,
      title: "Tips for Creating Engaging and Shareable Content",
      description: "Learn how to create compelling content that captivates your audience and encourages social sharing.",
      image: "/assets/Default_Tiger_in_Chinese_garden_tshirt_design_0.jpg",
      slug: "tips-for-creating-engaging-and-shareable-content",
    },
    {
      id: 7,
      title: "The Future of Work: Trends and Innovations in Remote Collaboration",
      description: "Explore emerging trends and innovative technologies shaping the future of remote collaboration and teamwork.",
      image: "/assets/Default_Radio_station_mixing_board_futuristically_powered_by_A_3.jpg",
      slug: "the-future-of-work-trends-and-innovations-in-remote-collaboration",
    },
    {
      id: 8,
      title: "Strategies for Building a Strong Online Brand Presence",
      description: "Discover essential strategies and tactics for establishing and maintaining a strong brand presence in the digital landscape.",
      image: "/assets/Default_Strategies_for_Building_a_Strong_Online_Brand_Presence_0.jpg",
      slug: "strategies-for-building-a-strong-online-brand-presence",
    },
  ];
  

const BlogSection = () => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container py-4 mx-auto my-8">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              {/* Map through blog posts */}
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-zinc-950 rounded-md border-gray-500 border-2 border-opacity-15 p-4">
                  <Link href={`/blog/${post.slug}`}>
                    <div>
                      <Image
                        className="w-full rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={300}
                      />
                      <h2 className="text-xl font-bold text-gray-100 mb-2 hover:text-blue-500 line-clamp-2">
                        {post.title}
                      </h2>
                    </div>
                  </Link>
                  <p className="text-sm text-gray-100 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogSection;
