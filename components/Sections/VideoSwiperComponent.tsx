import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SectionWrap from "../elements/SectionWrap";

const VideoSwiperComponent = () => {
  const slides = [
    {
      title: "Product Demo 1",
      description: "A comprehensive demonstration of our flagship product.",
      videoUrl: "https://example.com/video1.mp4",
    },
    {
      title: "Customer Testimonial",
      description:
        "Hear what our satisfied customers have to say about our services.",
      videoUrl: "https://example.com/video2.mp4",
    },
    {
      title: "Behind the Scenes",
      description: "Get an exclusive look at our development process.",
      videoUrl: "https://example.com/video3.mp4",
    },
    {
      title: "Product Demo 2",
      description: "Exploring the features of our latest software release.",
      videoUrl: "https://example.com/video4.mp4",
    },
    {
      title: "Team Introduction",
      description: "Meet the talented individuals behind our success.",
      videoUrl: "https://example.com/video5.mp4",
    },
    {
      title: "Product Tutorial",
      description: "Learn how to use our product with this step-by-step guide.",
      videoUrl: "https://example.com/video6.mp4",
    },
  ];

  return (
    <>
      <SectionWrap>
        <div className="px-4 lg:px-0">
          <section className=" py-12 mx-auto px-4 lg:px-4 bg-white rounded-md my-8 relative">
            <div className="mx-auto">
              <div className="flex justify-between items-center mb-8">
                <div className="swiper-nav-buttons"></div>
              </div>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
                className="custom-video-swiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-start bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="w-full aspect-video">
                        <video
                          className="w-full h-full object-cover"
                          src={slide.videoUrl}
                          controls
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-gray-600">{slide.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
          <style jsx global>{`
            .custom-video-swiper {
              padding-top: 20px;
              padding-bottom: 40px;
            }
            .swiper-nav-buttons {
              display: flex;
              gap: 10px;
            }
            .custom-video-swiper .swiper-button-next,
            .custom-video-swiper .swiper-button-prev {
              position: static;
              width: 40px;
              height: 40px;
              background-color: #3b82f6;
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .custom-video-swiper .swiper-button-next:after,
            .custom-video-swiper .swiper-button-prev:after {
              font-size: 18px;
            }
            .custom-video-swiper .swiper-button-disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}</style>
        </div>
      </SectionWrap>
    </>
  );
};

export default VideoSwiperComponent;
