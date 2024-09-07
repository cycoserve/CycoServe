import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../../components/Sections/Hero";
import RootLayout from "../../components/Layouts/RootLayout";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import TitleSection from "@/components/Sections/TitleSection";
import Spacer from "@/components/Spacer";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServicesCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "AI Agent Services",
      description: "Leverage cutting-edge AI technology to automate and enhance your business processes.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description: "Create responsive, user-friendly websites that drive engagement and conversions.",
      icon: "💻",
    },
    {
      title: "Podcast Production",
      description: "Produce high-quality podcasts to reach and engage your target audience.",
      icon: "🎙️",
    },
    {
      title: "Radio Streaming",
      description: "Set up and manage professional radio streaming services for your brand.",
      icon: "📻",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive and visually appealing user interfaces for optimal user experience.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "Develop and execute comprehensive digital marketing strategies to grow your online presence.",
      icon: "📈",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServicesCard key={index} {...service} />
      ))}
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>
          Services - CycoServe | Full-Service Digital Marketing Agency
        </title>
        {/* Add any meta tags, stylesheets, or scripts here */}
      </Head>
      <RootLayout>
        <Hero
          background={"/assets/homehero-bg.jpg"}
          title={"Transform Your Digital Presence"}
          description={
            "We offer cutting-edge digital services that will enhance your company's online presence. At CycoServe, we pioneer digital transformation. Our innovative solutions drive success in the digital era. Partner with us and thrive in the digital landscape."
          }
          bptext={"Learn More"}
          bpurl={"/about"}
          bstext={"Contact Us"}
          bsurl={"/contact-us"}
        />
        <Spacer />
        <SectionWrap>
          <TitleSection
            title="Our Services"
            subtitle="Comprehensive Digital Solutions for Your Business"
          />
          <ServicesGrid />
        </SectionWrap>
      </RootLayout>
    </>
  );
}
