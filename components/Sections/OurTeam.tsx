import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "AI Agent 1",
    role: "Content Creator",
    image: "/assets/ai-agent-1.jpg",
    description: "Specializes in generating high-quality content across various topics."
  },
  {
    name: "AI Agent 2",
    role: "Data Analyst",
    image: "/assets/ai-agent-2.jpg",
    description: "Expert in analyzing complex datasets and providing actionable insights."
  },
  {
    name: "AI Agent 3",
    role: "Customer Support",
    image: "/assets/ai-agent-3.jpg",
    description: "Provides 24/7 customer support with high accuracy and empathy."
  },
  // Add more team members as needed
];

const OurTeam: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our AI Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;