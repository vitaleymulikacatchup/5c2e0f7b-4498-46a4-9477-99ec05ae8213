import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInPreset } from '../lib/motionPresets';

const ClientLogos = () => {
  const shouldReduceMotion = useReducedMotion();

  const logos = [
    'Filmcuts', 'homeleon', 'ldaline', 'URTH', 'BEATBOX', 'WOOF', 'bauwerk.', 'LABODET'
  ];

  const logosContent = (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <p className="text-center text-gray-500 mb-8">Trusted by 100+ brands worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="text-gray-400 font-medium text-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return logosContent;
  }

  return (
    <motion.div {...fadeInPreset(0.2, 0.6)}>
      {logosContent}
    </motion.div>
  );
};

export default ClientLogos;