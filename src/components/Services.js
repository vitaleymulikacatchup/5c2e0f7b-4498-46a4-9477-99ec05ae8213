import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Package, Settings, TrendingUp, Globe, Zap, Target } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Package,
      title: 'Shopify Store Setup',
      description: 'Complete store setup from scratch with theme customization and product configuration.'
    },
    {
      icon: Settings,
      title: 'App Integration',
      description: 'Seamless integration of essential Shopify apps to enhance functionality and user experience.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Data-driven improvements to increase your store\'s conversion rates and revenue.'
    },
    {
      icon: Globe,
      title: 'Custom Development',
      description: 'Bespoke Shopify solutions tailored to your unique business requirements.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization and technical improvements for better user experience.'
    },
    {
      icon: Target,
      title: 'Marketing Implementation',
      description: 'Setup of tracking, analytics, and marketing tools to drive growth.'
    }
  ];

  const servicesContent = (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            What's covered in our <br className="hidden md:block" />
            Shopify retainer services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return servicesContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {servicesContent}
    </motion.div>
  );
};

export default Services;