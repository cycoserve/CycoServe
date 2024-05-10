import React from "react";

interface PricingItem {
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface PricingTableProps {
  pricingData: PricingItem[];
}

const PricingTable: React.FC<PricingTableProps> = ({ pricingData }) => {
  return (
    <div className="px-4 lg:px-0">
      <section className="container py-4 mx-auto px-4 lg:px-4 bg-black bg-opacity-10 backdrop-blur-sm rounded-md border-gray-500 border-2 border-opacity-15 my-12">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {pricingData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-lg text-gray-800 mb-4">{item.description}</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold mr-2">$</span>
                  <span className="text-4xl font-bold">{item.price}</span>
                  <span className="text-lg ml-2">/month</span>
                </div>
                <ul className="text-lg text-gray-800">
                  {item.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
