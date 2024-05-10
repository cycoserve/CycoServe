import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container py-4 mx-auto px-4 lg:px-4 bg-black bg-opacity-10 backdrop-blur-sm rounded-md border-gray-500 border-2 border-opacity-15 my-12">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <Image className="w-full rounded-lg mb-4" src={"/assets/hardworking.jpg"} alt="" width={500} height={300} />
                <p className="text-lg text-gray-100 mb-4">
                  CycoServe is your gateway to a transformative digital
                  experience. We&apos;re pioneers in Next.js app development and
                  VPS management, offering innovative solutions to empower
                  businesses.
                </p>
              </div>
              <div>
                <Image className="w-full rounded-lg mb-4" src={"/assets/innovative.jpg"} alt="" width={500} height={300} />
                <p className="text-lg text-gray-100 mb-4">
                  Our mission is clear: to provide cutting-edge support and
                  AI-driven content solutions, ensuring the utmost protection
                  for your digital assets. Join us for immersive panels and
                  expert-led discussions, where innovation fuels success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutSection;
