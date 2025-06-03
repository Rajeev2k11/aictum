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
        image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901780.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Computer Vision",
        description: "Enable machines to interpret and analyze visual information from the world.",
        image: "https://img.freepik.com/premium-photo/future-security-data-by-biometrics-eye-scanning_31965-4035.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Generative AI & Chatbots",
        description: "Create AI that generates content and interacts naturally with users.",
        image: "https://img.freepik.com/premium-photo/cute-conversational-copilot-ai-robot-with-speech-bubble-3d-rendering_651547-1216.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Predictive Analytics & Data-driven decision making",
        description: "Leverage data to forecast trends and make informed business decisions.",
        image: "https://img.freepik.com/premium-photo/financial-consultation-concept-3d-rendering_1029744-94.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      }
    ]
  },
  "Blockchain & Web3 Solutions": {
    id: "blockchain",
    items: [
      {
        title: "Smart Contract Development",
        description: "Create self-executing contracts with transparent, tamper-proof terms.",
        image: "https://img.freepik.com/premium-photo/smart-contract-concept-business-technology_220873-60752.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Decentralized Applications (dApps)",
        description: "Build applications that run on decentralized blockchain networks.",
        image: "https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074561.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "NFT Marketplaces & Tokenization",
        description: "Develop platforms for digital asset ownership and trading.",
        image: "https://img.freepik.com/premium-photo/nft-token-digital-crypto-art-blockchain-technology-concept-person-hand-using-digital-tablet-with-nft-icon-virtual-screen_1296497-4909.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Blockchain Consulting & Strategy",
        description: "Expert guidance for implementing blockchain solutions.",
        image: "https://img.freepik.com/premium-photo/blockchain-technology-concept-businessman-use-laptop-tablet-blockchain-global-networking-dat_926199-3785364.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      }
    ]
  },
  "Product Development": {
    id: "web-mobile",
    items: [
      {
        title: "Full-stack application development",
        description: "End-to-end development of scalable, high-performance applications.",
        image: "https://img.freepik.com/premium-vector/application-programming-interface_773186-1531.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "UX/UI Design",
        description: "Create intuitive, user-friendly interfaces that enhance experience.",
        image: "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Mobile & Web Application Development",
        description: "Build cross-platform applications for all devices and browsers.",
        image: "https://img.freepik.com/premium-vector/web-development-coding-programming-responsive-layout-internet-site-app-devices-creation-digital-software-mobile-platforms-computer-code-phone-concept-banner_276941-170.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Cloud Infrastructure & Scalability",
        description: "Design systems that grow with your business needs.",
        image: "https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-business-network-concept_31965-6612.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      }
    ]
  },
  "Technical Consulting": {
    id: "tech-consulting",
    items: [
      {
        title: "Technology assessment and strategy",
        description: "Evaluate and plan your technology roadmap for optimal results.",
        image: "https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003750.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Architecture design & integration",
        description: "Design robust systems with seamless integration capabilities.",
        image: "https://img.freepik.com/free-photo/architects-designers-working-office_53876-31576.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Performance optimization",
        description: "Enhance speed, efficiency, and reliability of your systems.",
        image: "https://img.freepik.com/premium-vector/business-abstract-computer-with-artificial-intelligence-system-computer_528239-48.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
      },
      {
        title: "Training & support",
        description: "Empower your team with knowledge and ongoing assistance.",
        image: "https://img.freepik.com/premium-photo/man-training-business-skilled-expert-productivity-knowledge-training-e-learning_36325-2909.jpg?ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740"
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