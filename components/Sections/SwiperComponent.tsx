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
      id: "1",
      url: "#",
      title: "GPU Server Management",
      description:
        "Efficient GPU Server Management for streamlined operations and optimal performance reliability.",
      image: "/assets/vps-management.jpg",
    },
    {
      id: "2",
      url: "#",
      title: "Custom Web Development",
      description:
        "Tailored development of applications to suit your unique needs.",
      image: "/assets/custom-web-design.jpg",
    },
    {
      id: "3",
      url: "#",
      title: "AI Agent Creation",
      description:
        "Unlocking creativity with AI-powered content creation for unparalleled engagement",
      image: "/assets/ai-content-creation.jpg",
    },
    {
      id: "4",
      url: "#",
      title: "Radio Stream Hosting",
      description:
        "Reliable hosting for seamless radio streaming experiences, unmatched quality service.",
      image: "/assets/radio-stream-hosting.jpg",
    },
    {
      id: "5",
      url: "#",
      title: "CPU Server Hosting",
      description:
        "Efficient VPS management for streamlined operations and optimal performance reliability.",
      image: "/assets/vps-management.jpg",
    },
  ];

  return (
    <div className="">
      <section className="container py-6 mx-auto px-4 lg:px-0 bg-transparent rounded-md my-4">
        <div className="mx-auto">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="custom-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-start bg-gradient-to-br from-zinc-900 to-black p-2 rounded-lg border border-zinc-800 hover:border-orange-500">
                  <Image
                    className="w-full aspect-square object-cover rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                  />
                  <h2 className="text-xl text-start font-bold text-white mb-2 line-clamp-1">
                    {slide.title}
                  </h2>
                  <p className="text-[1.09rem] text-white mb-4 line-clamp-2">
                    {slide.description}
                  </p>
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
          padding: 25px;
          border-radius: 10%;
        }

        .custom-swiper .swiper-button-next:after,
        .custom-swiper .swiper-button-prev:after {
          font-size: 25px;
        }

        /* Hide the buttons on mobile devices */
        @media (max-width: 768px) {
          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SwiperComponent;
