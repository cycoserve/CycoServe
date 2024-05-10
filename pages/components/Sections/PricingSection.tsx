import React from "react";
import PricingTable from "../PricingTable";

const pricingData = [
  {
    title: "Basic",
    description: "Lorem ipsum dolor sit amet.",
    price: "29",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    description: "Consectetur adipiscing elit.",
    price: "49",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Premium",
    description: "Sed do eiusmod tempor incididunt.",
    price: "79",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Enterprise",
    description: "Ut labore et dolore magna aliqua.",
    price: "99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <PricingTable pricingData={pricingData} />
      </div>
    </div>
  );
};

export default PricingSection;
