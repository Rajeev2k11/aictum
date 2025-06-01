import * as motion from 'motion/react-client';

export const PurposePhilosophy = () => (
  <section className="mb-16 md:mb-24 lg:mb-32 px-4 sm:px-6 lg:px-8">
    <motion.h2 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-[#AE69DF] border-b border-purple-900 pb-2 md:pb-3"
    >
      Our Purpose & Philosophy
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
      <motion.div 
        initial={{ rotateY: 360, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="bg-[#141418] p-6 sm:p-7 md:p-8 rounded-xl backdrop-blur-sm border border-[#8f8e8f]  transition-all duration-300 shadow-lg shadow-purple-900/10"
        style={{ backfaceVisibility: "hidden" }}
      >
        <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-[#d8a7ef]">Our Mission</h3>
        <p className="text-white leading-relaxed text-sm sm:text-base">
          To empower organizations worldwide with cutting-edge technology solutions that drive growth, 
          efficiency, and innovation. We believe in creating tools that not only solve today's problems 
          but anticipate tomorrow's challenges.
        </p>
      </motion.div>
      <motion.div 
        initial={{ rotateY: 360, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="bg-[#141418] p-6 sm:p-7 md:p-8 rounded-xl backdrop-blur-sm border border-[#8f8e8f]  transition-all duration-300 shadow-lg shadow-purple-900/10"
        style={{ backfaceVisibility: "hidden" }}
      >
        <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-[#d8a7ef]">Our Vision</h3>
        <p className="text-white leading-relaxed text-sm sm:text-base">
          To be the world's most trusted technology partner, recognized for our relentless pursuit of 
          excellence and our commitment to making a positive impact through technology. We envision 
          a future where our solutions become the backbone of digital transformation across industries.
        </p>
      </motion.div>
    </div>
  </section>
);

