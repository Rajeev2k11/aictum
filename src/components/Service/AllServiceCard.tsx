"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const services = {
  "AI & ML Solutions": {
    id: "ai-ml",
    items: [
      {
        title: "Natural Language Processing (NLP)",
        description: "Build intelligent systems that understand and process human language.",
        image: "/images/services/nlp.jpg"
      },
      {
        title: "Computer Vision",
        description: "Enable machines to interpret and analyze visual information from the world.",
        image: "/images/services/computer-vision.jpg"
      },
      {
        title: "Generative AI & Chatbots",
        description: "Create AI that generates content and interacts naturally with users.",
        image: "/images/services/generative-ai.jpg"
      },
      {
        title: "Predictive Analytics & Data-driven decision making",
        description: "Leverage data to forecast trends and make informed business decisions.",
        image: "/images/services/predictive-analytics.jpg"
      }
    ]
  },
  "Blockchain & Web3 Solutions": {
    id: "blockchain",
    items: [
      {
        title: "Smart Contract Development",
        description: "Create self-executing contracts with transparent, tamper-proof terms.",
        image: "/images/services/smart-contract.jpg"
      },
      {
        title: "Decentralized Applications (dApps)",
        description: "Build applications that run on decentralized blockchain networks.",
        image: "/images/services/dapps.jpg"
      },
      {
        title: "NFT Marketplaces & Tokenization",
        description: "Develop platforms for digital asset ownership and trading.",
        image: "/images/services/nft-marketplace.jpg"
      },
      {
        title: "Blockchain Consulting & Strategy",
        description: "Expert guidance for implementing blockchain solutions.",
        image: "/images/services/blockchain-consulting.jpg"
      }
    ]
  },
  "Product Development": {
    id: "web-mobile",
    items: [
      {
        title: "Full-stack application development",
        description: "End-to-end development of scalable, high-performance applications.",
        image: "/images/services/fullstack.jpg"
      },
      {
        title: "UX/UI Design",
        description: "Create intuitive, user-friendly interfaces that enhance experience.",
        image: "/images/services/ui-ux.jpg"
      },
      {
        title: "Mobile & Web Application Development",
        description: "Build cross-platform applications for all devices and browsers.",
        image: "/images/services/web-mobile.jpg"
      },
      {
        title: "Cloud Infrastructure & Scalability",
        description: "Design systems that grow with your business needs.",
        image: "/images/services/cloud-infra.jpg"
      }
    ]
  },
  "Technical Consulting": {
    id: "tech-consulting",
    items: [
      {
        title: "Technology assessment and strategy",
        description: "Evaluate and plan your technology roadmap for optimal results.",
        image: "/images/services/tech-assessment.jpg"
      },
      {
        title: "Architecture design & integration",
        description: "Design robust systems with seamless integration capabilities.",
        image: "/images/services/architecture.jpg"
      },
      {
        title: "Performance optimization",
        description: "Enhance speed, efficiency, and reliability of your systems.",
        image: "/images/services/performance.jpg"
      },
      {
        title: "Training & support",
        description: "Empower your team with knowledge and ongoing assistance.",
        image: "/images/services/training.jpg"
      }
    ]
  }
};

const getServiceLink = (category: string, item: string) => {
  const serviceId = services[category as keyof typeof services]?.id || '';
  return `/services/${serviceId}?service=${encodeURIComponent(item)}`;
};

export function AllServiceCard() {
  return (
    <div className="py-8 px-4  bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-gray-100 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Explore All Services
      </h2>
      
      {Object.entries(services).map(([category, data]) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold text-[#9345E0] mb-8">
            {category}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.items.map((item) => (
              <Link
                key={item.title}
                href={getServiceLink(category, item.title)}
                className={cn(
                  "group bg-[#1c1b1e] border border-[#9345E0]/40 rounded-xl overflow-hidden",
                  "shadow-lg hover:shadow-[#9345E0]/30 transition-all duration-300",
                  "hover:border-[#9345E0]/70 h-full flex flex-col"
                )}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-lg font-medium text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300 flex-1">
                    {item.description}
                  </p>
                  <div className="mt-4 text-[#9345E0] text-sm font-medium group-hover:underline">
                    Explore more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}