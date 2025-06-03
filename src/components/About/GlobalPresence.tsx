import * as motion from 'motion/react-client';

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
          <h3 className="text-xl sm:text-2xl font-medium mb-3 md:mb-4 text-[#d8a7ef]">Centralized & Focused</h3>
          <p className="text-sm sm:text-base text-white leading-relaxed">
          We operate from a single location to maintain a lean, highly efficient, and skilled team. This model allows us to provide seamless service to clients across the globe with agile communication, 24/7 availability, and deep technical expertise from one cohesive hub.
          </p>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            Our team is dedicated to delivering exceptional results, leveraging the latest technologies and methodologies to drive innovation and success for our clients.
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="h-64 sm:h-80 md:h-96 bg-[#141418] rounded-lg md:rounded-xl flex items-center justify-center border border-purple-900"
      >
        <span className="text-sm sm:text-base md:text-lg text-[#AE69DF] px-4 text-center">
          Interactive World Map Component Would Go Here
        </span>
      </motion.div>
    </motion.div>
  </section>
);