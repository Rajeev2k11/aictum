import React from 'react';
import { FaAws, FaGoogleDrive, FaPaypal } from 'react-icons/fa';
import { SiOkta, SiSap, SiOracle } from 'react-icons/si';
import { DiGoogleCloudPlatform, DiMongodb, DiMysql } from 'react-icons/di';

const EnterpriseIntegration: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#180c26] px-4 py-8 md:p-12 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#ffffff]">Enterprise Ready</h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-6 md:mb-8 text-[#9458d5]">Integration</h2>
        
        {/* First Row - 3 items */}
        <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6">
          {[FaAws, SiOkta, DiMysql].map((Icon, index) => (
            <div key={`row1-${index}`} className="bg-[#27144bea] rounded-lg p-2 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center 
              hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#9458d5]/30">
              <Icon className={`text-3xl md:text-5xl ${
                index === 0 ? 'text-[#d49a30]' : 
                index === 1 ? 'text-[#746a94]' : 'text-[#93c5fd]'
              }`} />
            </div>
          ))}
        </div>
        
        {/* Second Row - 5 items */}
        <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6">
          {[SiSap, DiMongodb, DiGoogleCloudPlatform, FaPaypal, FaGoogleDrive].map((Icon, index) => (
            <div key={`row2-${index}`} className="bg-[#27144bea] rounded-lg p-2 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center
              hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#9458d5]/30">
              <Icon className={`text-2xl md:text-4xl ${
                index === 0 ? 'text-[#67e8f9]' : 
                index === 1 ? 'text-[#0aeb19]' : 
                index === 2 ? 'text-[#0b5fc5]' :
                index === 3 ? 'text-[#1d1e7a]' : 'text-[#d6b300]'
              }`} />
            </div>
          ))}
        </div>
        
        {/* Third Row - 3 items */}
        <div className="flex justify-center gap-3 md:gap-4">
          {[SiOracle, FaAws, SiOkta].map((Icon, index) => (
            <div key={`row3-${index}`} className="bg-[#27144bea] rounded-lg p-2 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center
              hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-[#9458d5]/30">
              <Icon className={`text-3xl md:text-5xl ${
                index === 0 ? 'text-[#d22f2f]' : 
                index === 1 ? 'text-[#d49a30]' : 'text-[#746a94]'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIntegration;