import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'How does the monthly subscription work?',
      answer: 'Once subscribed, you can add unlimited design and development requests to your queue. We\'ll work on them one by one and deliver them within 48 hours on average.'
    },
    {
      question: 'What if I don\'t like the work?',
      answer: 'No worries! We\'ll continue to revise the design until you\'re 100% satisfied. We offer unlimited revisions on all our work.'
    },
    {
      question: 'How fast will I receive my requests?',
      answer: 'On average, most requests are completed within 48 hours. However, more complex requests may take longer. We\'ll always communicate expected timelines upfront.'
    },
    {
      question: 'Can I pause my subscription?',
      answer: 'Absolutely! You can pause your subscription at any time and resume it when you have more work. Your remaining time will be saved for when you return.'
    },
    {
      question: 'What if I only have a single request?',
      answer: 'That\'s fine! You can subscribe, submit your request, and then pause or cancel your subscription once it\'s completed. No long-term commitment required.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqContent = (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Questions? We have answers.
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white p-6 rounded-lg text-left flex items-center justify-between hover:shadow-sm transition-shadow"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-primary-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="bg-white px-6 pb-6 rounded-b-lg">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return faqContent;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 0.7)}>
      {faqContent}
    </motion.div>
  );
};

export default FAQ;