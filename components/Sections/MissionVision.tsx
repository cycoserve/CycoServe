import React from 'react';
import ParagraphTitle from '../elements/ParagraphTitle';

const MissionVision: React.FC = () => {
  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
           <ParagraphTitle>Our Mission </ParagraphTitle>
            <p className="text-white leading-relaxed">
              At CycoServe, our mission is to revolutionize digital services through the power of AI. 
              We strive to provide cutting-edge solutions that empower businesses to thrive in the 
              digital age, offering unparalleled efficiency, creativity, and innovation.
            </p>
          </div>
          <div>
           <ParagraphTitle>Our Vision</ParagraphTitle>
            <p className="text-white leading-relaxed">
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