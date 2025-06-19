'use client';
import React from "react";
import * as motion from "motion/react-client";
import { SiEthereum, SiBinance, SiSolana, SiPolygon, SiOpengl } from "react-icons/si";
import { FaEthereum, FaRobot, FaBrain, FaMicrochip } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsRobot } from "react-icons/bs";

const blockchainTech = [
  { 
    name: "Ethereum", 
    description: "Decentralized apps & smart contracts.",
    icon: <FaEthereum className="text-3xl text-purple-400" />
  },
  { 
    name: "Polygon", 
    description: "Scalable low-cost blockchain solutions.",
    icon: <SiPolygon className="text-3xl text-purple-600" />
  },
  { 
    name: "Solana", 
    description: "High-speed real-time blockchain apps.",
    icon: <SiSolana className="text-3xl text-green-500" />
  },
  { 
    name: "Binance Smart Chain", 
    description: "Efficient DeFi and Web3 projects.",
    icon: <SiBinance className="text-3xl text-yellow-400" />
  },
  { 
    name: "Avalanche", 
    description: "Enterprise-grade, fast blockchain.",
    icon: <SiOpengl className="text-3xl text-red-500" />
  },
];

const aiTech = [
  { 
    name: "OpenAI", 
    description: "Cutting-edge NLP, CV, and automation models.",
    icon: <GiArtificialIntelligence className="text-3xl text-blue-400" />
  },
  { 
    name: "TensorFlow & PyTorch", 
    description: "Robust frameworks for ML and AI.",
    icon: <FaBrain className="text-3xl text-orange-500" />
  },
  { 
    name: "Hugging Face", 
    description: "Leading platform for NLP and generative AI.",
    icon: <BsRobot className="text-3xl text-yellow-300" />
  },
  { 
    name: "Custom AI Solutions", 
    description: "Tailored models for unique business needs.",
    icon: <FaMicrochip className="text-3xl text-purple-300" />
  },
];

const TechStack = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7] py-16 px-6 lg:px-24"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-purple-900">Blockchain and AI We Build On</h2>
        <p className="text-[#141015] text-lg">
          We leverage leading technologies to deliver secure, scalable, and intelligent solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Blockchain Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-purple-800">Blockchain Networks</h3>
          <div className="grid grid-cols-1 gap-6">
            {blockchainTech.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-6 rounded-xl bg-[#141418] bg-opacity-20 backdrop-blur-lg border border-white/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#d8a7ef] mb-1">{tech.name}</h4>
                    <p className="text-white">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-purple-800">AI Technologies</h3>
          <div className="grid grid-cols-1 gap-6">
            {aiTech.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-6 rounded-xl bg-[#141418] bg-opacity-20 backdrop-blur-lg border border-white/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#d8a7ef] mb-1">{tech.name}</h4>
                    <p className="text-white">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;