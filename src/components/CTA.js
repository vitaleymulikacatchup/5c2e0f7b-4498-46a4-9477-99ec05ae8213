import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const CTA = () => {
  const shouldReduceMotion = useReducedMotion();

  const ctaContent = (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Not ready for a retainer?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Start with a one-time project to see the quality of our work. 
          No commitment required.
        </p>
        <button className="bg-white text-primary-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-50 transition-colors">
          Start a Project
        </button>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return ctaContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.6)}>
      {ctaContent}
    </motion.div>
  );
};

export default CTA;