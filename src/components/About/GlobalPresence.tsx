import * as motion from 'motion/react-client';
import Image from 'next/image';

export const GlobalPresence = () => (
  <section className="mb-16 md:mb-24 px-4 sm:px-6 lg:px-8">
    <motion.h2 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-[#AE69DF] border-b border-purple-900 pb-2 md:pb-3"
    >
      Global Presence
    </motion.h2>
    
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="bg-[#572b7dcc] p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl backdrop-blur-sm border border-purple-900 shadow-md md:shadow-lg shadow-purple-900/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-medium mb-3 md:mb-4 text-[#d8a7ef]">Our Headquarters</h3>
          <p className="text-sm sm:text-base text-white mb-3 md:mb-4 leading-relaxed">
            We are proudly headquartered in Delhi, India — a growing hub for cutting-edge technology and innovation. 
            Our office serves as the central base for all client operations, product development, and research in AI, Blockchain, and Software Engineering.
          </p>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            <strong>Address:</strong> Gaur Complex, Sector 16B <br />
            <strong>Phone:</strong> +91 7209236123<br />
            <strong>Email:</strong> team@aictum.com
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-medium mb-3 md:mb-4 text-[#d8a7ef]">Global Reach</h3>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            While based in India, we serve clients across four continents with our technology solutions.
            Our distributed delivery model ensures 24/7 support and seamless collaboration.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#AE69DF] rounded-full mr-2"></div>
              <span className="text-xs text-white">North America</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#AE69DF] rounded-full mr-2"></div>
              <span className="text-xs text-white">Europe</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#AE69DF] rounded-full mr-2"></div>
              <span className="text-xs text-white">Middle East</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#AE69DF] rounded-full mr-2"></div>
              <span className="text-xs text-white">Asia Pacific</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="h-64 sm:h-80 md:h-96 bg-[#010101] rounded-lg md:rounded-xl relative overflow-hidden"
      >
        <Image
          src="/images/mapIndia.png"
          alt="Company Global Presence"
          fill
          unoptimized
        />
      </motion.div>
    </motion.div>
  </section>
);