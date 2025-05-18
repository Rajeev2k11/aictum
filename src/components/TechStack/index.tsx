// components/TechStack.tsx
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
    <section className=" py-16 px-6 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Blockchain and AI We Build On</h2>
        <p className="text-gray-600 text-lg">
          We leverage leading technologies to deliver secure, scalable, and intelligent solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Blockchain Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#4767EA]">Blockchain Networks</h3>
          <div className="space-y-6">
            {blockchainTech.map((tech, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#4767EA]">AI Technologies</h3>
          <div className="space-y-6">
            {aiTech.map((tech, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
