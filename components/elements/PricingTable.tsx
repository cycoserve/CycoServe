import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import { Url } from "next/dist/shared/lib/router/router";

const PricingTable = () => {
  const [billPlan, setBillPlan] = useState("monthly");
  const router = useRouter(); // Initialize the router

  const plans = [
    {
      name: "Self-Hosted (Free Forever)",
      discretion:
        "Get started with the CycoServe self-hosted version at no cost. Ideal for designers and developers comfortable with coding.",
      price: {
        monthly: 0, // Free plan
        annually: 0, // Free plan
      },
      features: [
        "Self-hosted setup",
        "Unlimited installations",
        "Access to Starter Template on GitHub (MIT License)",
        "Full source code available",
        "No access to support (Documentation only)",
        "No help with deployment or installation",


      ],
      url: "https://github.com/cycoserve/cycoserve-starter", // GitHub URL for self-hosted
    },
    {
      name: "CycoServe Cloud",
      discretion: "Best for growing businesses that want cloud-hosted solutions with robust features and support.",
      price: {
        monthly: 14.99,
        annually:14.99 * 12 - 50,
      },
      features: [
        "Managed cloud hosting",
        "Up to 2 active projects",
        "Access to premium templates",
        "Integrated WordPress Dashboard",
        "Full access to all components",
        "Automatic backups and updates",
        "Priority email support",
        "24/7 monitoring and security",
        "Scalable infrastructure",
      ],
      url: "/payment/cycoserve-cloud", // Payment page URL
    },
    // {
    //   name: "Reseller License",
    //   discretion: "Designed for agencies and professionals seeking to resell CycoServe services with full white-label capabilities.",
    //   price: {
    //     monthly: 24.99,
    //     annually: 24.99 * 12 - 75,
    //   },
    //   features: [
    //     "Unlimited active projects",
    //     "White-label branding options",
    //     "+300 customizable components",
    //     "Advanced analytics and reporting",
    //     "Dedicated account manager",
    //     "Access to exclusive reseller tools",
    //     "Resell as your own service",
    //     "Priority phone and chat support",
    //     "Full API access for integrations",
    //   ],
    //   url: "/payment/reseller-license", // Payment page URL
    // },
  ];
  

  const handleSelectPlan = (url: Url) => {
    router.push(url); // Navigate to the provided URL
  };

  return (
    <div className="px-4">
      <div className="container my-0 rounded-lg mx-auto antialiased text-gray-900">
        <main className="mx-auto my-4">
          {/* Plan switch */}
          <div className="flex items-center justify-center mt-4 space-x-4">
            <span className="text-base font-medium text-white">Bill Monthly</span>
            <button
              className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={() =>
                setBillPlan(billPlan === "monthly" ? "annually" : "monthly")
              }
            >
              <div className="w-16 h-8 transition bg-orange-500 rounded-full shadow-md outline-none"></div>
              <div
                className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${billPlan === "monthly" ? "translate-x-0" : "translate-x-8"}`}
              ></div>
            </button>
            <span className="text-base font-medium text-white">Bill Annually</span>
          </div>

          {/* Pricing cards */}
          <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="flex flex-col max-w-md p-8 mx-auto bg-white border border-gray-200 rounded-lg"
              >
                <h2 className="mb-4 text-2xl text-zinc-900 font-bold">{plan.name}</h2>
                <p className="text-lg text-zinc-700">{plan.discretion}</p>
                <div className="flex items-center my-4 space-x-2">
                  {plan.price.monthly === 0 ? (
                    <span className="text-3xl font-semibold text-orange-500">Free</span>
                  ) : (
                    <>
                      <span className="text-3xl font-semibold">
                        ${billPlan === "monthly" ? plan.price.monthly : plan.price.annually}
                      </span>
                      <span className="text-base text-gray-400">
                        {billPlan === "monthly" ? "/month" : "/year"}
                      </span>
                    </>
                  )}
                </div>
                <ul className="flex-1 mb-6 space-y-2">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-full mt-4 font-semibold text-center text-white ${plan.price.monthly === 0 ? "bg-gray-600" : "bg-orange-500"}`}
                  onClick={() => handleSelectPlan(plan.url)} // Link to the plan's URL
                >
                  {plan.price.monthly === 0 ? "Get Started" : "Select"}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PricingTable;
