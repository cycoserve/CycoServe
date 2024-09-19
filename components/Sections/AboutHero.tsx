import React from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonSecondary from "@/components/ui/ButtonSecondary";
import { motion } from "framer-motion";

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
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section
        className="hero-section min-h-screen  flex flex-col pt-36 pb-24 items-center justify-center relative text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, green, black), url(${background})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-4">
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className=" text-start max-w-7xl">
              <div className="">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500 min-h-full pb-4">
                  {title}
                </h1>
              </div>

              <p className="max-w-7xl mx-auto text-[1.0rem] mb-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
                {description}
              </p>
              <div className="flex flex-row justify-start items-center gap-4">
                <ButtonPrimary title={bptext} url={bpurl} />
                <ButtonSecondary title={bstext} url={bsurl} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
