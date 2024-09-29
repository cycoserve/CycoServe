import React from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonSecondary from "@/components/ui/ButtonSecondary";
import { motion } from "framer-motion";

interface BlogHeroProps {
  title: string;
  description: string;
  background: string;
  bptext: string;
  bpurl: string;
  bstext: string;
  bsurl: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({
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
        className="min-h-screen flex flex-col pt-36 pb-24 items-center justify-center relative text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to top, black, purple, black), url(${background})`,
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl text-start">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-white min-h-full pb-4">
                  {title}
                </h1>
              </div>

              <p className="text-[0.8rem] mb-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
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

export default BlogHero;
