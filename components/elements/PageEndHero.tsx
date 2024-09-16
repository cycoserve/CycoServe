import React from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";



interface PageEndHeroProps {
  title: string;
  description: string;
  background: string;
  bptext: string;
  bpurl: string;
  bstext: string;
  bsurl: string;
}

const PageEndHero: React.FC<PageEndHeroProps> = ({
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
      className="hero-section min-h-[100vh] my-8 flex md:h-fu lg:h-1/2 justify-center items-center relative text-white bg-cover bg-top bg-no-repeat rounded-lg border border-zinc-800 hover:border-orange-500"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
    >
      <div className=" mx-auto px-4 lg:px-0">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl pb-4 font-bold leading-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500">
            {title}  
          </h1>
          <p className=" md:text-xl text-sm mb-8 text-center">{description}</p>
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

export default PageEndHero;





// 0868568096

