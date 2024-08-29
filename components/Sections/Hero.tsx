import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

interface HeroProps {
  title: string;
  description: string;
  background: string;
  bptext: string;
  bpurl: string;
  bstext: string;
  bsurl: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  background,
  bptext,
  bpurl,
  bstext,
  bsurl,
}) => {
  return (
    <section
      className="hero-section min-h-screen flex flex-col pt-8 items-center justify-center relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, black, black), url(${background})`,
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500 min-h-full pb-4">
            {title}
          </h1>
          <p className="max-w-xl mx-auto text-[1.1rem] mb-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            {description}
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            <ButtonPrimary title={bptext} url={bpurl} />
            <ButtonSecondary title={bstext} url={bsurl} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
