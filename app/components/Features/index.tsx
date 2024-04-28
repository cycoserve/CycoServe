import React from 'react';

const Features = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature">
            <h3 className="text-xl font-semibold mb-2">VPS Management</h3>
            <p>Efficiently manage Virtual Private Servers (VPS).</p>
            <p>Seamlessly handle server configurations and optimizations.</p>
            <p>Ensure high-performance hosting solutions for your projects.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2">Learn More</a>
          </div>
          <div className="feature">
            <h3 className="text-xl font-semibold mb-2">Custom App Development</h3>
            <p>Tailored development of applications to suit your unique needs.</p>
            <p>Expertise in various frameworks and coding languages.</p>
            <p>Delivering scalable and user-friendly solutions.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2">Learn More</a>
          </div>
          <div className="feature">
            <h3 className="text-xl font-semibold mb-2">AI-Driven Content Creation</h3>
            <p>Harness the power of Artificial Intelligence for content creation.</p>
            <p>Automated generation of podcasts, radio stations, and YouTube videos.</p>
            <p>Stay ahead with innovative and engaging content strategies.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2">Learn More</a>
          </div>
          <div className="feature">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
            <p>Receive dedicated support for all your technical queries and challenges.</p>
            <p>Expert guidance and assistance throughout your tech journey.</p>
            <p>Ensure smooth operations and rapid issue resolution.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
