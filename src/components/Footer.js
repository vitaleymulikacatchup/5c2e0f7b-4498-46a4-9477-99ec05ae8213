import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  const footerContent = (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Teplin</div>
            <p className="text-primary-200 mb-6 max-w-md">
              Your dedicated Shopify design and development team. 
              Get unlimited requests for one flat monthly fee.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@teplin.agency" className="text-primary-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">Shopify Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm">
            © 2024 Teplin Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-primary-200 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );

  if (shouldReduceMotion) {
    return footerContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.6)}>
      {footerContent}
    </motion.div>
  );
};

export default Footer;