'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEthereum, FaBitcoin, FaMobile, FaDatabase, FaServer, FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiBinance, SiSolana, SiPolkadot, SiStellar, SiTon, SiHedera, SiNear, SiPolygon, SiCardano, SiCocos, SiFantom, SiEricsson, SiNextdotjs, SiTensorflow, SiPytorch, SiKeras, SiOpengl, SiFirebase, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGooglecloud,  SiKubernetes, SiJenkins, SiTerraform, SiAnsible, SiGithubactions, SiTypescript, SiJavascript, SiCplusplus, SiRust, SiGo, SiSwift, SiKotlin, SiFlutter, SiDart } from 'react-icons/si';

const TechStackIcon = () => {
  const [activeCategory, setActiveCategory] = useState('blockchain');

  const techItems = {
    blockchain: [
      { name: 'Ethereum', icon: <FaEthereum className="text-2xl sm:text-3xl" /> },
      { name: 'Binance', icon: <SiBinance className="text-2xl sm:text-3xl" /> },
      { name: 'Bitcoin', icon: <FaBitcoin className="text-2xl sm:text-3xl" /> },
      { name: 'Polkadot', icon: <SiPolkadot className="text-2xl sm:text-3xl" /> },
      { name: 'Polygon', icon: <SiPolygon className="text-2xl sm:text-3xl" /> },
      { name: 'EOS', icon: <SiEricsson className="text-2xl sm:text-3xl" /> },
      { name: 'Solana', icon: <SiSolana className="text-2xl sm:text-3xl" /> },
      { name: 'Cardano', icon: <SiCardano className="text-2xl sm:text-3xl" /> },
      { name: 'Near', icon: <SiNear className="text-2xl sm:text-3xl" /> },
      { name: 'Fantom', icon: <SiFantom className="text-2xl sm:text-3xl" /> },
    ],
    AI: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-2xl sm:text-3xl" /> },
      { name: 'PyTorch', icon: <SiPytorch className="text-2xl sm:text-3xl" /> },
      { name: 'Keras', icon: <SiKeras className="text-2xl sm:text-3xl" /> },
      { name: 'OpenGL', icon: <SiOpengl className="text-2xl sm:text-3xl" /> },
      { name: 'Python', icon: <FaPython className="text-2xl sm:text-3xl" /> },
      { name: 'Rust', icon: <SiRust className="text-2xl sm:text-3xl" /> },
      { name: 'C++', icon: <SiCplusplus className="text-2xl sm:text-3xl" /> },
      { name: 'Java', icon: <FaJava className="text-2xl sm:text-3xl" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-2xl sm:text-3xl" /> },
      { name: 'Stellar', icon: <SiStellar className="text-2xl sm:text-3xl" /> },
    ],
    FullStack: [
      { name: 'React', icon: <FaReact className="text-2xl sm:text-3xl" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-2xl sm:text-3xl" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-2xl sm:text-3xl" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-2xl sm:text-3xl" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-2xl sm:text-3xl" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-2xl sm:text-3xl" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl sm:text-3xl" /> },
      { name: 'MySQL', icon: <SiMysql className="text-2xl sm:text-3xl" /> },
      { name: 'Redis', icon: <SiRedis className="text-2xl sm:text-3xl" /> },
    ],
    programming: [
      { name: 'Go', icon: <SiGo className="text-2xl sm:text-3xl" /> },
      { name: 'Rust', icon: <SiRust className="text-2xl sm:text-3xl" /> },
      { name: 'Python', icon: <FaPython className="text-2xl sm:text-3xl" /> },
      { name: 'Java', icon: <FaJava className="text-2xl sm:text-3xl" /> },
      { name: 'C++', icon: <SiCplusplus className="text-2xl sm:text-3xl" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-2xl sm:text-3xl" /> },
      { name: 'Dart', icon: <SiDart className="text-2xl sm:text-3xl" /> },
      { name: 'Swift', icon: <SiSwift className="text-2xl sm:text-3xl" /> },
    ],
    mobile: [
      { name: 'React Native', icon: <FaMobile className="text-2xl sm:text-3xl" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-2xl sm:text-3xl" /> },
      { name: 'Kotlin', icon: <SiKotlin className="text-2xl sm:text-3xl" /> },
      { name: 'Swift', icon: <SiSwift className="text-2xl sm:text-3xl" /> },
      { name: 'Dart', icon: <SiDart className="text-2xl sm:text-3xl" /> },
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb className="text-2xl sm:text-3xl" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl sm:text-3xl" /> },
      { name: 'MySQL', icon: <SiMysql className="text-2xl sm:text-3xl" /> },
      { name: 'Redis', icon: <SiRedis className="text-2xl sm:text-3xl" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-2xl sm:text-3xl" /> },
    ],
    devops: [
      { name: 'AWS', icon: <FaAws className="text-2xl sm:text-3xl" /> },
      { name: 'Docker', icon: <FaDocker className="text-2xl sm:text-3xl" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-2xl sm:text-3xl" /> },
      { name: 'Jenkins', icon: <SiJenkins className="text-2xl sm:text-3xl" /> },
      { name: 'Terraform', icon: <SiTerraform className="text-2xl sm:text-3xl" /> },
      { name: 'Ansible', icon: <SiAnsible className="text-2xl sm:text-3xl" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-2xl sm:text-3xl" /> },
      { name: 'Google Cloud', icon: <SiGooglecloud className="text-2xl sm:text-3xl" /> },
    ]
  };

  return (
    <section id="tech-stack" className="py-12 px-2 sm:px-4 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-purple-900">Our Tech Stack</h2>
          <div className="w-16 sm:w-20 h-1 bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-2xl max-w-2xl sm:max-w-3xl text-[#141015] mx-auto">
            Technologies we work with to build innovative solutions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
        >
          {Object.keys(techItems).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 rounded-full capitalize text-sm sm:text-base transition-colors ${
                activeCategory === category 
                  ? 'bg-purple-900 text-white' 
                  : 'bg-[#141418] hover:bg-gray-500'
              }`}
            >
              {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </button>
          ))}
        </motion.div>
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 max-w-6xl mx-auto"
        >
          {techItems[activeCategory as keyof typeof techItems].map((item, index) => (
            <div 
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-gray-100 text-purple-950 shadow-lg hover:shadow-purple-400 transition-shadow flex items-center justify-center gap-3"
            >
              <span className="text-purple-900 flex-shrink-0">{item.icon}</span>
              <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackIcon;