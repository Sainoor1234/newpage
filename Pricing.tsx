import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  mostPopular: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: {
      monthly: 49,
      yearly: 39,
    },
    description: 'Perfect for small teams and startups getting off the ground.',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '24-hour support response time',
      '5GB storage',
      'Basic security features',
    ],
    mostPopular: false,
    buttonText: 'Start with Starter',
  },
  {
    name: 'Professional',
    price: {
      monthly: 99,
      yearly: 79,
    },
    description: 'Ideal for growing businesses that need more power and features.',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      '12-hour support response time',
      '25GB storage',
      'Enhanced security suite',
      'Custom integrations',
      'Priority support',
    ],
    mostPopular: true,
    buttonText: 'Get Professional',
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 199,
      yearly: 159,
    },
    description: 'For large organizations requiring maximum scale and control.',
    features: [
      'Unlimited team members',
      'Enterprise-grade analytics',
      '1-hour support response time',
      '100GB storage',
      'Advanced security with compliance',
      'Dedicated account manager',
      'Custom solutions and workflows',
      'SLA guarantees',
    ],
    mostPopular: false,
    buttonText: 'Contact Sales',
  },
];

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  const toggleBilling = () => {
    setAnnual(!annual);
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that's right for your business and scale up as you grow.
          </p>

          <div className="flex items-center justify-center mb-8">
            <span className={`text-sm ${!annual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-3 ${
                annual ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
              role="switch"
              aria-checked={annual}
              onClick={toggleBilling}
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  annual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual <span className="text-green-500 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl ${
                tier.mostPopular
                  ? 'border-2 border-blue-500 shadow-xl dark:border-blue-400'
                  : 'border border-gray-200 dark:border-gray-700 shadow-md'
              } bg-white dark:bg-gray-800 overflow-hidden transition-transform duration-300 hover:scale-105`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{tier.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${annual ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>
                {annual && (
                  <p className="mt-1 text-sm text-green-500">
                    Billed annually (${tier.price.yearly * 12}/year)
                  </p>
                )}
              </div>
              
              <div className="flex-1 p-6 border-t border-gray-200 dark:border-gray-700">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-700 dark:text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6">
                <button
                  type="button"
                  className={`w-full py-3 px-4 rounded-lg text-base font-medium ${
                    tier.mostPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-colors duration-200`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;