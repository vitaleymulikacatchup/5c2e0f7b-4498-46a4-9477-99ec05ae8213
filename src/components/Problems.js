import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Problems = () => {
  const shouldReduceMotion = useReducedMotion();

  const problems = [
    'Unreliable freelancers who ghost you mid-project',
    'Expensive agencies with long contracts and hidden fees',
    'In-house teams that are costly and hard to scale',
    'Poor communication and missed deadlines',
    'Inconsistent quality and lack of Shopify expertise'
  ];

  const problemsContent = (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              We handle the problems you <br className="hidden md:block" />
              hate dealing with
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop wasting time and money on unreliable solutions. Get consistent, 
              high-quality Shopify work delivered on time, every time.
            </p>
          </div>
          
          <div className="bg-primary-900 text-white p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">Common pain points we solve:</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return problemsContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {problemsContent}
    </motion.div>
  );
};

export default Problems;