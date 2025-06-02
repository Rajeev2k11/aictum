import React from 'react';
import { FaAws, FaGoogleDrive, FaPaypal } from 'react-icons/fa';
import { SiOkta, SiSap, SiOracle } from 'react-icons/si';
import { DiGoogleCloudPlatform, DiMongodb, DiMysql } from 'react-icons/di';
import * as motion from 'motion/react-client';

const EnterpriseIntegration: React.FC = () => {
  // Animation variants
  const boxVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  // Different delays for each row
  const rowDelays = [0, 0.2, 0.4];
  const itemDelays = [0, 0.1, 0.2, 0.3, 0.4];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-4 py-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#ffffff]"
        >
          Enterprise Ready
        </motion.h1>
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12 text-[#AE69DF]"
        >
          Integration
        </motion.h2>
        
        {/* First Row - 3 items */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
          {[FaAws, SiOkta, DiMysql].map((Icon, index) => (
            <motion.div 
              key={`row1-${index}`}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ 
                ...boxVariants.visible.transition,
                delay: rowDelays[0] + itemDelays[index]
              }}
              className="bg-[#572b7dcc] rounded-lg p-4 w-28 h-20 md:w-48 md:h-32 lg:w-56 lg:h-36 flex items-center justify-center 
                hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#ac82d1cc]/30 border border-[#3a1d6e]"
            >
              <Icon className={`text-4xl md:text-6xl lg:text-7xl ${
                index === 0 ? 'text-[#d49a30]' : 
                index === 1 ? 'text-[#746a94]' : 'text-[#93c5fd]'
              }`} />
            </motion.div>
          ))}
        </div>
        
        {/* Second Row - 5 items */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8 mb-6 md:mb-8">
          {[SiSap, DiMongodb, DiGoogleCloudPlatform, FaPaypal, FaGoogleDrive].map((Icon, index) => (
            <motion.div 
              key={`row2-${index}`}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ 
                ...boxVariants.visible.transition,
                delay: rowDelays[1] + itemDelays[index]
              }}
              className="bg-[#572b7dcc] rounded-lg p-2 w-20 h-16 md:w-40 md:h-28 lg:w-48 lg:h-32 flex items-center justify-center
                hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#ac82d1cc]/30 border border-[#3a1d6e]"
            >
              <Icon className={`text-3xl md:text-5xl lg:text-6xl ${
                index === 0 ? 'text-[#67e8f9]' : 
                index === 1 ? 'text-[#0aeb19]' : 
                index === 2 ? 'text-[#0b5fc5]' :
                index === 3 ? 'text-[#1d1e7a]' : 'text-[#d6b300]'
              }`} />
            </motion.div>
          ))}
        </div>
        
        {/* Third Row - 3 items */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {[SiOracle, FaAws, SiOkta].map((Icon, index) => (
            <motion.div 
              key={`row3-${index}`}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ 
                ...boxVariants.visible.transition,
                delay: rowDelays[2] + itemDelays[index]
              }}
              className="bg-[#572b7dcc] rounded-lg p-4 w-28 h-20 md:w-48 md:h-32 lg:w-56 lg:h-36 flex items-center justify-center
                hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#ac82d1cc]/30 border border-[#3a1d6e]"
            >
              <Icon className={`text-4xl md:text-6xl lg:text-7xl ${
                index === 0 ? 'text-[#d22f2f]' : 
                index === 1 ? 'text-[#d49a30]' : 'text-[#746a94]'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIntegration;