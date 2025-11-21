import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const Features = () => {
  const shouldReduceMotion = useReducedMotion();

  const featuresContent = (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our clients experienced
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Receive your
              </h3>
              <p className="text-gray-600">
                Get your design within a few business days on average, Monday to Friday.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Our Products
              </h3>
              <p className="text-gray-600">
                We create beautiful, conversion-focused Shopify stores that drive results.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Shopify Store Preview</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Premium Store Design</h4>
              <p className="text-gray-600 text-sm">Modern, mobile-responsive design optimized for conversions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return featuresContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {featuresContent}
    </motion.div>
  );
};

export default Features;