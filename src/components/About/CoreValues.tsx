import * as motion from 'motion/react-client';

export const CoreValues = () => (
  <section className="mb-16 md:mb-24 lg:mb-32 px-4 sm:px-6 lg:px-8 ">
    <motion.h2 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-[#AE69DF] border-b border-purple-900 pb-2 md:pb-3"
    >
      Our Core Values
    </motion.h2>
    
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {/* First row */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
      >
        {/* Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col items-center bg-[#572b7dcc] rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-purple-900/30 hover:border-purple-700 transition-all duration-300"
        >
          <div className="mb-3 sm:mb-4 text-[#e1f909]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#d8a7ef] mb-1 sm:mb-2 text-center">Innovation</h3>
          <p className="text-sm sm:text-base text-white text-center leading-relaxed">
            We don&rsquo;t just follow trends - we set them. Our R&amp;D labs are constantly experimenting with emerging technologies to deliver groundbreaking solutions.
          </p>
        </motion.div>

        {/* Integrity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
          className="flex flex-col items-center bg-[#572b7dcc] rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-purple-900/30 hover:border-purple-700 transition-all duration-300"
        >
          <div className="mb-3 sm:mb-4 text-[#19d20c]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#d8a7ef] mb-1 sm:mb-2 text-center">Integrity</h3>
          <p className="text-sm sm:text-base text-white text-center leading-relaxed">
            We build trust through transparency. Every client relationship begins with honesty and is maintained through ethical business practices.
          </p>
        </motion.div>

        {/* Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col items-center bg-[#572b7dcc] rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-purple-900/30 hover:border-purple-700 transition-all duration-300"
        >
          <div className="mb-3 sm:mb-4 text-[#15e8f8]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#d8a7ef] mb-1 sm:mb-2 text-center">Excellence</h3>
          <p className="text-sm sm:text-base text-white text-center leading-relaxed">
            Good enough never is. We pursue perfection in every line of code, every design, and every client interaction.
          </p>
        </motion.div>
      </motion.div>

      {/* Second row */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
      >
        {/* Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col items-center bg-[#572b7dcc] rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-purple-900/30 hover:border-purple-700 transition-all duration-300"
        >
          <div className="mb-3 sm:mb-4 text-[#4327f7]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#d8a7ef] mb-1 sm:mb-2 text-center">Collaboration</h3>
          <p className="text-sm sm:text-base text-white text-center leading-relaxed">
            We believe the best solutions come from diverse perspectives working together. Our flat hierarchy encourages open dialogue.
          </p>
        </motion.div>

        {/* Sustainability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
          className="flex flex-col items-center bg-[#572b7dcc] rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-purple-900/30 hover:border-purple-700 transition-all duration-300"
        >
          <div className="mb-3 sm:mb-4 text-[#4dc583]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#d8a7ef] mb-1 sm:mb-2 text-center">Sustainability</h3>
          <p className="text-sm sm:text-base text-white text-center leading-relaxed">
            We build with the future in mind. Our solutions are designed to be energy-efficient and environmentally responsible.
          </p>
        </motion.div>

        {/* Empathy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col items-center bg-[#572b7dcc] rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-purple-900/30 hover:border-purple-700 transition-all duration-300"
        >
          <div className="mb-3 sm:mb-4 text-[#ed1d1d]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#d8a7ef] mb-1 sm:mb-2 text-center">Empathy</h3>
          <p className="text-sm sm:text-base text-white text-center leading-relaxed">
            Technology should serve people. We listen deeply to understand real needs before crafting solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);