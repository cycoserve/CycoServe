import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white pt-48 pb-64">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Innovation, Expertise, and Seamless Solutions!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Transform your digital landscape with our innovative solutions and
            expert guidance. Join us in revolutionizing the way technology works
            for you.
          </p>
          <ButtonPrimary title="Login" url="https://station.cycoserve.com/login/" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
