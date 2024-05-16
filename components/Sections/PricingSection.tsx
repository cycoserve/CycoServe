import { CheckIcon } from "@heroicons/react/20/solid";
import ButtonPrimary from "../ButtonPrimary";
import BuyNowButton from "../BuyNowButton";

const includedFeatures = [
  "Private Dashboard Access",
  "Reports and Market Insights",
  "One-On-One Strategy Session",
  "Official Member T-Shirt",
];

const PricingSection: React.FC = () => {
  return (
    <div className="bg-black bg-[url('/assets/homehero-bg.jpg')] bg-cover bg-no-repeat bg-bottom py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl bg-zinc-900 ring-2 ring-gray-500 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none bg-opacity-50 rounded-md ring-opacity-15">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Lifetime Membership
            </h3>
            <p className="mt-6 text-base leading-7 text-white">
              Unlock unlimited access to CycoServe&apos;s premium features and
              services with our exclusive lifetime membership offer. Join us
              today!
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-white">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-white" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p>
                <p className="mt-6 mb-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $299.99
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
               <BuyNowButton title={"Get Acces"} url={"/"} />
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
