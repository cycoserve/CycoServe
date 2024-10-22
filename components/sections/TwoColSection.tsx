import React from "react";
import Image from "next/image";


const colItems = [
  {
    id: "1",
    title: "Custom Software Development",
    description: "We provide tailored software solutions to meet the specific needs of your business, ensuring improved efficiency and productivity.",
    image: "/images/pic01.jpg", // Replace with actual image path
    url: "/services/custom-software-development",
  },
  {
    id: "2",
    title: "API Integration Services",
    description: "Seamlessly connect your existing systems with our robust API integration services, enhancing data flow and operational synergy.",
    image: "/images/pic02.jpg", // Replace with actual image path
    url: "/services/api-integration",
  },
  {
    id: "3",
    title: "Cloud Solutions and Hosting",
    description: "Leverage our cloud services for scalable, secure, and efficient hosting solutions tailored to your business requirements.",
    image: "/images/pic03.jpg", // Replace with actual image path
    url: "/services/cloud-solutions",
  },
  {
    id: "4",
    title: "Data Analytics and Business Intelligence",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence services, helping you make informed decisions.",
    image: "/images/pic04.jpg", // Replace with actual image path
    url: "/services/data-analytics",
  },
];

const TwoColSection: React.FC = ({

}) => {
  return (
    <>
      <div className="">
        <section className="container mx-auto">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {colItems.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-zinc-900 to-black rounded-lg p-2 border border-zinc-800 hover:border-orange-500 hover:cursor-pointer">
                  <Image
                    className="w-full h-auto aspect-video rounded-lg mb-4"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                  />
                  <h2 className="text-2xl font-bold text-white px-2 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-[1.0rem] text-white mb-4 px-2">{item.description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TwoColSection;
