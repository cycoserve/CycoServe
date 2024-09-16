import React from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";

interface HeroAboutProps {
  title: string;
  description: string;
  background: string;
  bptext: string;
  bpurl: string;
  bstext: string;
  bsurl: string;
}

const HeroAbout: React.FC<HeroAboutProps> = ({
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
      className="hero-about-section min-h-screen flex items-center justify-center relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-left max-w-4xl mx-auto md:text-lg lg:text-xl mb-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
          <h2 className="text-5xl font-bold text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500
min-h-full pb-4">
            {title}
          </h2>
          <p className="max-w-lg mx-auto md:text-base lg:text-lg mb-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mt-12">
          <ButtonPrimary title={bptext} url={bpurl} />
          <ButtonSecondary title={bstext} url={bsurl} />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;