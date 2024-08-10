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
    <>
    <section
      className="hero-section min-h-[50vh] flex md:h-fu lg:h-1/2 py-12 justify-center items-center relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl text-start">
          <h1 className="text-7xl md:text-8xl lg:text-8xl pb-4 font-extrabold leading-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500">
            {title}  
          </h1>
          <p className=" md:text-xl text-sm mb-8">{description}</p>
          <div className="buttons inline-flex gap-4">
            <ButtonPrimary title={bptext} url={bpurl} />
            <ButtonSecondary title={bstext} url={bsurl} />
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Hero;
