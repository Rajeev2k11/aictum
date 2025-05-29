import * as motion from 'motion/react-client';

export const Awards = () => (
  <section className="mb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] py-12">
    <motion.h2 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 text-purple-900 border-b border-purple-900 pb-3"
    >
      We Got Awarded
    </motion.h2>
    <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 text-center">
      We are honored to be recognized for our commitment to innovation, excellence, and leadership in technology. Here are some of the awards we’ve received along the way.
    </p>
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {/* Award 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="flex flex-col items-center bg-[#2e2450] rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/30"
      >
        <div className="mb-4 text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Best DeFi Development Company Award 2023</h3>
        <p className="text-purple-200 text-center">Crypto Depo Daily</p>
      </motion.div>
      {/* Award 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false }}
        className="flex flex-col items-center bg-[#2e2450] rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/30"
      >
        <div className="mb-4 text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Top Startup of Asia 2021</h3>
        <p className="text-purple-200 text-center">Bootstrap Lups.info</p>
      </motion.div>
      {/* Award 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className="flex flex-col items-center bg-[#2e2450] rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/30"
      >
        <div className="mb-4 text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Top 3 Blockchain Startups 2022</h3>
        <p className="text-purple-200 text-center">Appengine.ai</p>
      </motion.div>
      {/* Award 4 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
        className="flex flex-col items-center bg-[#2e2450] rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/30"
      >
        <div className="mb-4 text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Top Indian Startups 2020</h3>
        <p className="text-purple-200 text-center">Best in Tech Awards</p>
      </motion.div>
      {/* Award 5 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className="flex flex-col items-center bg-[#2e2450] rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/30"
      >
        <div className="mb-4 text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Best AI Solution Provider 2023</h3>
        <p className="text-purple-200 text-center">Tech Excellence Forum</p>
      </motion.div>
      {/* Award 6 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false }}
        className="flex flex-col items-center bg-[#2e2450] rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/30"
      >
        <div className="mb-4 text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Innovation Leader 2022</h3>
        <p className="text-purple-200 text-center">Global Tech Review</p>
      </motion.div>
    </motion.div>
  </section>
);