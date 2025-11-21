import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const contactContent = (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Have a Shopify?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free consultation and see how we can help optimize your store for better performance and higher conversions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Free store audit</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">No commitment required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Expert recommendations</span>
              </div>
            </div>
            
            <button className="btn-primary mt-8">
              Book Free Consultation
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-primary-600 text-lg font-medium">Store Analysis</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Comprehensive Review</h4>
              <p className="text-gray-600 text-sm mb-4">We'll analyze your current setup and provide actionable insights</p>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Usually completed within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return contactContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {contactContent}
    </motion.div>
  );
};

export default Contact;