import * as motion from 'motion/react-client';

export const GlobalPresence = () => (
  <section className="mb-16 md:mb-24 px-4 sm:px-6 lg:px-8">
    <motion.h2 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-purple-300 border-b border-purple-900 pb-2 md:pb-3"
    >
      Global Presence
    </motion.h2>
    
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="bg-[#2e2450] p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl backdrop-blur-sm border border-purple-900 shadow-md md:shadow-lg shadow-purple-900/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-medium mb-3 md:mb-4 text-purple-200">Our Headquarters</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">
            Our global headquarters in San Francisco serves as our 
            executive leadership and primary research facilities. This 200,000 sq ft campus 
            includes state-of-the-art labs and collaborative workspaces.
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            <strong>Address:</strong> 123 Tech Boulevard, San Francisco, CA 94107<br />
            <strong>Phone:</strong> +1 (555) 123-4567<br />
            <strong>Email:</strong> headquarters@company.com
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-medium mb-3 md:mb-4 text-purple-200">Regional Offices</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            We operate in major tech hubs across North America, Europe, Asia, and Australia. 
            Our regional offices are strategically located to serve our global client base with 
            local expertise and 24/7 support.
          </p>
          <ul className="mt-3 md:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
            <li>• London (EMEA Headquarters)</li>
            <li>• Singapore (APAC Headquarters)</li>
            <li>• Berlin (AI Research Center)</li>
            <li>• Tokyo (IoT Innovation Lab)</li>
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="h-64 sm:h-80 md:h-96 bg-[#2e2450] rounded-lg md:rounded-xl flex items-center justify-center border border-purple-900"
      >
        <span className="text-sm sm:text-base md:text-lg text-purple-400 px-4 text-center">
          Interactive World Map Component Would Go Here
        </span>
      </motion.div>
    </motion.div>
  </section>
);