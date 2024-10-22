import React from "react";
import Image from "next/image";
import Link from "next/link";


const threeColItems = [
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
  {
    id: "4",
    title: "Data Analytics and Business Intelligence",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence services, helping you make informed decisions.",
    image: "/images/pic04.jpg", // Replace with actual image path
    url: "/services/data-analytics",
  },
  {
    id: "4",
    title: "Data Analytics and Business Intelligence",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence services, helping you make informed decisions.",
    image: "/images/pic04.jpg", // Replace with actual image path
    url: "/services/data-analytics",
  },

]


const ThreeColSection: React.FC = () => {
  return (
    <>
      <div className=" ">
        <section className="container py-4 mx-auto my-0 ">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {threeColItems.map((item, index)=> (
              <Link key={index} href={'/'} className=" bg-gradient-to-br from-zinc-900 to-black rounded-md border border-zinc-800 hover:border-orange-500 p-2">
                <Image
                  className="w-full rounded-lg mb-4 aspect-square"
                  src={item.image}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-2xl font-bold text-white mb-2 line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-[1.0rem] text-white mb-4 line-clamp-2">{item.description}</p>
              </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThreeColSection;
