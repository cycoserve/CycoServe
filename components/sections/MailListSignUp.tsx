import React, { useState } from 'react';

const MailListSignUp: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log('Email submitted:', email);
    // Reset form
    setEmail('');
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Stay Updated</h2>
        <p className="text-white text-center mb-8">
          Subscribe to our newsletter for the latest updates on AI technology and digital services.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MailListSignUp;
