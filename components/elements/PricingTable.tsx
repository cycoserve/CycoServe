// components/PricingTable.js
import React, { useState } from "react";

const PricingTable = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [billPlan, setBillPlan] = useState("monthly");

  const plans = [
    {
      name: "Easy",
      discretion: "All the basics for businesses that are just getting started.",
      price: {
        monthly: 29,
        annually: 29 * 12 - 199,
      },
      features: ["One project", "Your dashboard"],
    },
    {
      name: "Basic",
      discretion: "Better for growing businesses that want more customers.",
      price: {
        monthly: 59,
        annually: 59 * 12 - 100,
      },
      features: [
        "Two projects",
        "Your dashboard",
        "Components included",
        "Advanced charts",
      ],
    },
    {
      name: "Custom",
      discretion: "Advanced features for pros who need more customization.",
      price: {
        monthly: 139,
        annually: 139 * 12 - 100,
      },
      features: [
        "Unlimited projects",
        "Your dashboard",
        "+300 Components",
        "Chat support",
      ],
    },
  ];

  return (
    <div className="container my-8 border-b-4 border-orange-500 py-12 rounded-lg mx-auto antialiased text-gray-900 bg-gray-100">
      {/* Navbar */}


      <main className="mx-4 my-16">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span className="font-semibold">plans</span> for your{" "}
            <span className="font-semibold">strategies</span>
          </h1>
          <p className="text-sm font-normal text-gray-400">
            See below our main three plans for your business, for your startup
            and agency.
          </p>
          <p className="text-sm font-normal text-gray-400">
            It start from here! You can teach yourself what you really like.
          </p>
        </div>

        {/* Plan switch */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <span className="text-base font-medium">Bill Monthly</span>
          <button
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            onClick={() =>
              setBillPlan(billPlan === "monthly" ? "annually" : "monthly")
            }
          >
            <div className="w-16 h-8 transition bg-orange-500 rounded-full shadow-md outline-none"></div>
            <div
              className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
                billPlan === "monthly" ? "translate-x-0" : "translate-x-8"
              }`}
            ></div>
          </button>
          <span className="text-base font-medium">Bill Annually</span>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="flex flex-col max-w-md p-8 mx-auto bg-white border border-gray-200 rounded-lg"
            >
              <h2 className="mb-4 text-xl font-semibold">{plan.name}</h2>
              <p className="text-sm text-gray-400">{plan.discretion}</p>
              <div className="flex items-center my-4 space-x-2">
                <span className="text-3xl font-semibold">
                  ${billPlan === "monthly" ? plan.price.monthly : plan.price.annually}
                </span>
                <span className="text-base text-gray-400">
                  {billPlan === "monthly" ? "/month" : "/year"}
                </span>
              </div>
              <ul className="flex-1 mb-6 space-y-2">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 mt-4 font-semibold text-center text-white bg-orange-600 rounded-md">
                Select
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PricingTable;
