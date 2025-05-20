'use client';
import React from "react";

const blockchainTech = [
  { name: "Ethereum", description: "Decentralized apps & smart contracts." },
  { name: "Polygon", description: "Scalable low-cost blockchain solutions." },
  { name: "Solana", description: "High-speed real-time blockchain apps." },
  { name: "Binance Smart Chain", description: "Efficient DeFi and Web3 projects." },
  { name: "Avalanche", description: "Enterprise-grade, fast blockchain." },
];

const aiTech = [
  { name: "OpenAI", description: "Cutting-edge NLP, CV, and automation models." },
  { name: "TensorFlow & PyTorch", description: "Robust frameworks for ML and AI." },
  { name: "Hugging Face", description: "Leading platform for NLP and generative AI." },
  { name: "Custom AI Solutions", description: "Tailored models for unique business needs." },
];

const TechStack = () => {
  return (
    <section className="bg-[#140c1c] py-16 px-6 lg:px-24 text-white">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-purple-400">Blockchain and AI We Build On</h2>
        <p className="text-gray-300 text-lg">
          We leverage leading technologies to deliver secure, scalable, and intelligent solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Blockchain Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-500">Blockchain Networks</h3>
          <div className="space-y-6">
            {blockchainTech.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 border border-white/10 rounded-lg bg-[#1f1531] hover:shadow-lg hover:shadow-purple-500/20 transition"
              >
                <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-500">AI Technologies</h3>
          <div className="space-y-6">
            {aiTech.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 border border-white/10 rounded-lg bg-[#1f1531] hover:shadow-lg hover:shadow-purple-500/20 transition"
              >
                <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
