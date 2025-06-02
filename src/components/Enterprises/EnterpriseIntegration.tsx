import React from 'react';
import { FaAws, FaGoogleDrive, FaPaypal } from 'react-icons/fa';
import { SiOkta, SiSap, SiOracle } from 'react-icons/si';
import { DiGoogleCloudPlatform, DiMongodb, DiMysql } from 'react-icons/di';
import * as motion from 'motion/react-client';

const Icons = ["/images/icons/python.svg", "/images/icons/react.svg", "/images/icons/nodejs.svg", "/images/icons/huggingFace.svg", "/images/icons/openAi.svg", "/images/icons/solidity.svg", "/images/icons/langChain.svg", "/images/icons/hard-hat.svg", "/images/icons/fastApi.svg", "/images/icons/pytorch.svg", "/images/icons/metamask.svg"];

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
          Tech We're Working
        </motion.h1>
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12 text-[#AE69DF]"
        >
          With Leading Enterprises
        </motion.h2>
        
        {/* First Row - 3 items */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
          {Icons.slice(0,3).map((Icon, index) => (
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
              className="bg-white rounded-lg p-4 w-28 h-20 md:w-48 md:h-32 lg:w-56 lg:h-36 flex items-center justify-center 
                hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#ac82d1cc]/30 border border-[#3a1d6e]"
            >
              <img src={Icon} alt={`Icon ${index + 1}`} className={` ${
                index === 0 ? 'w-26 h-26 text-white' : 
                index === 1 ? 'w-26 h-26' :
                
                index === 2 ? 'w-32 h-32' : 'w-26'}`} />
              {/* <Icon className={`text-4xl md:text-6xl lg:text-7xl ${
                index === 0 ? 'text-[#d49a30]' : 
                index === 1 ? 'text-[#746a94]' : 'text-[#93c5fd]'
              }`} /> */}
            </motion.div>
          ))}
        </div>
        
        {/* Second Row - 5 items */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8 mb-6 md:mb-8">
          {Icons.slice(3,8).map((Icon, index) => (
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
              className="bg-white rounded-lg p-2 w-20 h-16 md:w-40 md:h-28 lg:w-48 lg:h-32 flex items-center justify-center
                hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#ac82d1cc]/30 border border-[#3a1d6e]"
            >
              <img src={Icon} alt={`Icon ${index + 4}`} className={` ${
                index === 0 ? 'w-48 h-48 text-white' : 
                index === 1 ? 'w-38 h-38' :
                index === 2 ? 'w-16 h-16' :
                index === 3 ? 'w-28 h-28' : 'w-26'}`}/>
              {/* <Icon className={`text-3xl md:text-5xl lg:text-6xl ${
                index === 0 ? 'text-[#d49a30]' : 
                index === 1 ? 'text-[#746a94]' : 
                index === 2 ? 'text-[#93c5fd]' : 
                index === 3 ? 'text-[#d22f2f]' : 'text-[#15e8f8]'
              }`} /> */}
            </motion.div>
          ))}
        </div>
        
        {/* Third Row - 3 items */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {Icons.slice(8,11).map((Icon, index) => (
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
              className="bg-white rounded-lg p-4 w-28 h-20 md:w-48 md:h-32 lg:w-56 lg:h-36 flex items-center justify-center
                hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#ac82d1cc]/30 border border-[#3a1d6e]"
            >
              <img src={Icon} alt={`Icon ${index + 8}`} className={` ${
                index === 0 ? 'w-38 h-38 text-white' :
                index === 1 ? 'w-20 h-20' : 
                index === 2 ? 'w-28 h-28' : 'w-16'}`}/>
              {/* <Icon className={`text-4xl md:text-6xl lg:text-7xl ${
                index === 0 ? 'text-[#d22f2f]' : 
                index === 1 ? 'text-[#d49a30]' : 'text-[#746a94]'
              }`} /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIntegration;