import * as motion from 'motion/react-client';

export const AboutHero = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
    className="text-center mb-20"
  >
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
      <span className='text-white'>About</span>
    </h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: false }}
      className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
    >
      We are a global technology powerhouse dedicated to transforming businesses through innovative digital solutions. 
      Since our founding, we've been pushing boundaries and redefining what's possible in the tech industry.
    </motion.p>
  </motion.section>
);