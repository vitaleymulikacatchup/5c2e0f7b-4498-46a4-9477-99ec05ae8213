import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const WhyUs = () => {
  const shouldReduceMotion = useReducedMotion();

  const whyUsContent = (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Why think of us with us
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Shopify Experts
                </h3>
                <p className="text-gray-600">
                  Our team consists of certified Shopify experts with years of experience 
                  building high-converting stores across various industries.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Predictable Pricing
                </h3>
                <p className="text-gray-600">
                  No surprise bills or hidden fees. Pay one flat monthly rate and get 
                  unlimited design and development work.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Fast Turnaround
                </h3>
                <p className="text-gray-600">
                  Most requests are completed within 48 hours. Need something urgent? 
                  We offer same-day delivery for priority requests.
                </p>
              </div>
            </div>
            
            <button className="btn-primary mt-8">
              Get Started Today
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                <div className="text-gray-600">Years of experience</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-900">500+</div>
                  <div className="text-gray-600 text-sm">Stores built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">98%</div>
                  <div className="text-gray-600 text-sm">Satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return whyUsContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {whyUsContent}
    </motion.div>
  );
};

export default WhyUs;