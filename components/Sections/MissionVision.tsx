import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At CycoServe, our mission is to revolutionize digital services through the power of AI. 
              We strive to provide cutting-edge solutions that empower businesses to thrive in the 
              digital age, offering unparalleled efficiency, creativity, and innovation.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where AI seamlessly integrates with human expertise, creating a 
              harmonious ecosystem that drives progress and solves complex challenges. CycoServe aims 
              to be at the forefront of this transformation, leading the way in AI-driven digital services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;