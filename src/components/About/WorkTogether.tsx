import * as motion from 'motion/react-client';

export const WorkTogether = () => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
    className="text-center py-12 sm:py-16 px-4 sm:px-6"
  >
    <div className="max-w-4xl mx-auto bg-[#2e2450] p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg md:rounded-xl backdrop-blur-sm border border-purple-900 shadow-md md:shadow-lg shadow-purple-900/10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-purple-200">
        Interested in Working Together?
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-purple-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        We're interested in hearing your ideas. Before we proceed, we'll send you a Non-Disclosure Agreement (NDA) to ensure the confidentiality of all information shared. Your privacy is our priority.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10"
      >
        {/* Schedule */}
        <motion.a
          href="https://calendly.com/rajeev@aictum.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          viewport={{ once: false }}
          className="bg-[#2e2450] p-3 sm:p-4 rounded-md sm:rounded-lg border border-purple-900/50 hover:border-purple-700 transition-all duration-300 group shadow-sm sm:shadow-md shadow-purple-900/10 flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="text-purple-400 group-hover:text-purple-300 mb-2 sm:mb-3 transition-colors duration-300 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-purple-200 text-center">Schedule</h3>
        </motion.a>
        
        {/* Chat */}
        <motion.a
          href="https://wa.me/917209236123"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          viewport={{ once: false }}
          className="bg-[#2e2450] p-3 sm:p-4 rounded-md sm:rounded-lg border border-purple-900/50 hover:border-purple-700 transition-all duration-300 group shadow-sm sm:shadow-md shadow-purple-900/10 flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="text-purple-400 group-hover:text-purple-300 mb-2 sm:mb-3 transition-colors duration-300 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-purple-200 text-center">Chat</h3>
        </motion.a>
        
        {/* Call */}
        <motion.a
          href="tel:+918340287491"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          viewport={{ once: false }}
          className="bg-[#2e2450] p-3 sm:p-4 rounded-md sm:rounded-lg border border-purple-900/50 hover:border-purple-700 transition-all duration-300 group shadow-sm sm:shadow-md shadow-purple-900/10 flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="text-purple-400 group-hover:text-purple-300 mb-2 sm:mb-3 transition-colors duration-300 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-purple-200 text-center">Call</h3>
        </motion.a>
        
        {/* Email */}
        <motion.a
          href="mailto:team@aictum.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          viewport={{ once: false }}
          className="bg-[#2e2450] p-3 sm:p-4 rounded-md sm:rounded-lg border border-purple-900/50 hover:border-purple-700 transition-all duration-300 group shadow-sm sm:shadow-md shadow-purple-900/10 flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="text-purple-400 group-hover:text-purple-300 mb-2 sm:mb-3 transition-colors duration-300 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-purple-200 text-center">Email</h3>
        </motion.a>
      </motion.div>
    </div>
  </motion.section>
);