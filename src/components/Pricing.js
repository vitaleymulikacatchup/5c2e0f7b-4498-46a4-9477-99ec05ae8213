import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Pricing = () => {
  const shouldReduceMotion = useReducedMotion();

  const plans = [
    {
      name: 'Standard',
      price: '$3995',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'One request at a time',
        'Average 48-hour delivery',
        'Unlimited revisions',
        'Pause or cancel anytime',
        'Dedicated Slack channel',
        'Shopify theme customization',
        'App integration & setup',
        'Performance optimization'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$5995',
      period: '/month',
      description: 'For businesses that need more',
      features: [
        'Two requests at a time',
        'Average 24-hour delivery',
        'Unlimited revisions',
        'Pause or cancel anytime',
        'Dedicated Slack channel',
        'Priority support',
        'Custom development',
        'Advanced integrations',
        'Conversion optimization',
        'Monthly strategy calls'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7995',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited requests',
        'Same-day delivery',
        'Unlimited revisions',
        'Pause or cancel anytime',
        'Dedicated team',
        'Priority support',
        'Custom development',
        'Advanced integrations',
        'Conversion optimization',
        'Weekly strategy calls',
        'Multi-store management'
      ],
      popular: false
    }
  ];

  const pricingContent = (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Shopify retainer plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include unlimited revisions and the ability to pause or cancel anytime.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-primary-500 shadow-xl scale-105' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-primary-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Not sure which plan is right for you?</p>
          <button className="btn-secondary">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return pricingContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.8)}>
      {pricingContent}
    </motion.div>
  );
};

export default Pricing;