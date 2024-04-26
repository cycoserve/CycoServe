import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              CycoServe is your gateway to a transformative digital experience. We&apos;re pioneers in Next.js app development and VPS management, offering innovative solutions to empower businesses.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is clear: to provide cutting-edge support and AI-driven content solutions, ensuring the utmost protection for your digital assets. Join us for immersive panels and expert-led discussions, where innovation fuels success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

