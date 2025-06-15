'use client';
import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import Image from 'next/image';

const HiringModelsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fixed' | 'dedicated' | 'timeMaterial'>('fixed');

  const tabs = [
    { id: 'fixed', label: 'Fixed Price Model' },
    { id: 'dedicated', label: 'Dedicated Hiring Model' },
    { id: 'timeMaterial', label: 'Time & Material Model' },
  ];

  const tabContents = {
    fixed: {
      title: 'Fixed Price Model',
      description: 'For businesses with well-defined project scope and requirements.',
      image: 'https://appinventiv.com/wp-content/uploads/2019/03/Integration-of-Blockchain-and-AI-All-You-Need-to-Know_Info-1.webp',
      features: [
        'Simplified process',
        'Higher predictability',
        'Greater transparency',
        'Reduced risk',
        'Low management efforts'
      ],
      process: [
        'Requirement Gathering',
        'Shortlisting Resource Based on Requirement',
        'Project Assigning & Onboarding',
        'Development'
      ]
    },
    dedicated: {
      title: 'Dedicated Hiring Model',
      description: 'For businesses needing dedicated resources for long-term projects.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: [
        'Full-time dedicated team',
        'Flexible scaling',
        'Direct communication',
        'Cost-effective for long-term',
        'Complete control over resources'
      ],
      process: [
        'Requirement Analysis',
        'Team Selection',
        'Onboarding & Integration',
        'Ongoing Development'
      ]
    },
    timeMaterial: {
      title: 'Time & Material Model',
      description: 'For businesses needing flexibility in project scope and resources.',
      image: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: [
        'Pay only for hours worked',
        'Flexible requirements',
        'Easy to scale up/down',
        'Ideal for evolving projects',
        'Transparent billing'
      ],
      process: [
        'Initial Planning',
        'Resource Allocation',
        'Agile Development',
        'Regular Deliverables'
      ]
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Our Custom Hiring Models</h1>
          <p className="text-base md:text-lg text-[#C9C9C9] max-w-3xl mx-auto">
            Choose from our flexible hiring models designed to fit your needs and budget.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center mb-6 md:mb-8 border-b border-[#473062]"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 sm:px-6 sm:py-3 font-medium text-base sm:text-lg focus:outline-none transition-colors ${
                activeTab === tab.id
                  ? 'text-white border-b-2 border-[#9345E0] bg-[#473062]'
                  : 'text-[#C9C9C9] hover:text-white hover:bg-[#473062]/50'
              }`}
              onClick={() => setActiveTab(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 bg-[#1A1325]/80 p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-sm border border-[#473062]">
          {/* Left Side - Slides from left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            {/* Dot Pattern Background */}
            <div 
              className="absolute -inset-4 rounded-lg z-0 overflow-hidden
                         [background-image:radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)]
                         [background-size:16px_16px]"
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{tabContents[activeTab].title}</h2>
              <p className="text-[#C9C9C9] mb-4 md:mb-6">{tabContents[activeTab].description}</p>

              <div className="mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-semibold text-[#9345E0] mb-2 md:mb-3">Benefits:</h3>
                <ul className="space-y-1 md:space-y-2">
                  {tabContents[activeTab].features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#9345E0] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-[#E0E0E0] text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#9345E0] mb-2 md:mb-3">Process:</h3>
                <ul className="space-y-1 md:space-y-2">
                  {tabContents[activeTab].process.map((step, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <span className="bg-[#9345E0] text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs md:text-sm">
                        {index + 1}
                      </span>
                      <span className="text-[#E0E0E0] text-sm md:text-base">{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Slides from right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0"
          >
            <Image
            height={400}
            width={600}
              src={tabContents[activeTab].image}
              alt={tabContents[activeTab].title}
              className="rounded-lg shadow-md w-full max-h-64 md:max-h-80 lg:max-h-96 object-cover border-2 border-[#9345E0]/30"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HiringModelsTabs;