import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  const testimonialsContent = (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            A few words from us
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-primary-900 text-white p-8 rounded-2xl">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg mb-6">
              "Teplin transformed our Shopify store completely. The team is incredibly responsive, 
              professional, and delivers exceptional quality work consistently. Our conversion rates 
              have improved significantly since working with them."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">JD</span>
              </div>
              <div>
                <div className="font-semibold">John Davis</div>
                <div className="text-primary-200 text-sm">CEO, Urban Lifestyle</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Outstanding service and results. They understand Shopify inside and out."
              </p>
              <div className="text-sm text-gray-500">Sarah Chen, Marketing Director</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The monthly retainer model is perfect for our growing business needs."
              </p>
              <div className="text-sm text-gray-500">Mike Rodriguez, Founder</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-900">90+</div>
              <div className="text-gray-600">Happy clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-900">5.0</div>
              <div className="text-gray-600">Average rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return testimonialsContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {testimonialsContent}
    </motion.div>
  );
};

export default Testimonials;