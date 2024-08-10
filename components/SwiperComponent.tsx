// components/SwiperComponent.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const SwiperComponent = () => {
  const slides = [
    {
      title: "VPS Management",
      description: "Efficient VPS management for streamlined operations and optimal performance reliability.",
      image: "/assets/vps-management.jpg",
    },
    {
      title: "Custom Web Design",
      description: "Tailored development of applications to suit your unique needs.",
      image: "/assets/custom-web-design.jpg",
    },
    {
      title: "AI-Driven Content Creation",
      description: "Unlocking creativity with AI-powered content creation for unparalleled engagement",
      image: "/assets/ai-content-creation.jpg",
    },
    {
      title: "Radio Stream Hosting",
      description: "Reliable hosting for seamless radio streaming experiences, unmatched quality service.",
      image: "/assets/radio-stream-hosting.jpg",
    },
    {
      title: "VPS Management",
      description: "Efficient VPS management for streamlined operations and optimal performance reliability.",
      image: "/assets/vps-management.jpg",
    },
    {
      title: "Custom Web Design",
      description: "Tailored development of applications to suit your unique needs.",
      image: "/assets/custom-web-design.jpg",
    },
    {
      title: "AI-Driven Content Creation",
      description: "Unlocking creativity with AI-powered content creation for unparalleled engagement",
      image: "/assets/ai-content-creation.jpg",
    },
    {
      title: "Radio Stream Hosting",
      description: "Reliable hosting for seamless radio streaming experiences, unmatched quality service.",
      image: "/assets/radio-stream-hosting.jpg",
    },
  ];

  return (
    <div className="px-4 lg:px-0">
      <section className="container py-12 mx-auto px-4 lg:px-4 bg-white rounded-md  ring-1 ring-orange-500 my-8">
        <div className="mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="custom-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-start">
                  <Image
                    className="w-full aspect-video object-cover rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                  />
                  <h2 className="text-xl text-start font-bold text-zinc-900 mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-zinc-900 mb-4">{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <style jsx global>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 50%;
        }

        .custom-swiper .swiper-button-next:after,
        .custom-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default SwiperComponent;
