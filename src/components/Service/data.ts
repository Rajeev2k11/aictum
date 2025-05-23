// data/services.ts

export interface ServiceDetail {
  title: string;
  description: string;
  images: string[];
  content: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  // ✅ AI & ML Solutions
  "Computer Vision": {
    title: "Computer Vision",
    description: "Empowering machines with the ability to interpret and process visual information, enabling real-world automation and intelligent image analysis.",
    images: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Real-time object detection, tracking, and recognition using advanced AI models.",
      "Applications in retail (smart checkout), manufacturing (defect detection), and healthcare (medical imaging).",
      "Image segmentation, annotation, and classification systems.",
      "Facial recognition systems with high accuracy and security use cases."
    ]
  },
  "Natural Language Processing (NLP)": {
    title: "Natural Language Processing (NLP)",
    description: "Equipping machines with the ability to understand, interpret, and respond to human language across multiple contexts.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Chatbots and intelligent assistants using transformer-based models.",
      "Sentiment analysis and opinion mining from social media and reviews.",
      "Language detection, summarization, and translation.",
      "Voice command and voice-to-text systems integrated into mobile apps and platforms."
    ]
  },
  "Generative AI & Chatbots": {
    title: "Generative AI & Chatbots",
    description: "Designing intelligent systems that can generate human-like text, images, and interactions across digital experiences.",
    images: [
      "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1628498188905-3d2e1f6f4c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "AI-based customer support bots that resolve queries without human involvement.",
      "Marketing content generation including blogs, ads, and emails using GPT and other models.",
      "AI image and video generation tools for creative industries.",
      "Multilingual conversational interfaces using natural language understanding."
    ]
  },
  "Predictive Analytics & Data-driven decision making": {
    title: "Predictive Analytics & Data-driven Decision Making",
    description: "Turn data into insights and anticipate outcomes with powerful machine learning models.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Customer behavior analysis for marketing and sales optimization.",
      "Demand forecasting using historical data and trends.",
      "Financial risk modeling and fraud detection systems.",
      "AI dashboards and reports for strategic decision making."
    ]
  },

  // ✅ Blockchain & Web3 Solutions
  "Smart Contract Development": {
    title: "Smart Contract Development",
    description: "Building self-executing contracts on blockchain platforms like Ethereum, Polygon, and Solana.",
    images: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1626624340241-48d5d4945e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Smart contract logic written in Solidity and Rust.",
      "Secure, audited contracts for DeFi, NFT, and DAOs.",
      "Integration with wallets like MetaMask and Ledger.",
      "Upgradable contracts with proxy patterns and modular architecture."
    ]
  },
  "Decentralized Applications (dApps)": {
    title: "Decentralized Applications (dApps)",
    description: "Creating scalable and user-centric dApps that interact with blockchain networks.",
    images: [
      "https://images.unsplash.com/photo-1639762681297-3a0f8c5e2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Full-stack dApp development using Web3.js, Ethers.js, and smart contracts.",
      "On-chain and off-chain logic integration.",
      "Decentralized identity (DID) and wallet login features.",
      "Cross-chain compatibility and token bridge implementations."
    ]
  },
  "NFT Marketplaces & Tokenization": {
    title: "NFT Marketplaces & Tokenization",
    description: "Launch your own NFT platforms and tokenize assets from art to real estate.",
    images: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681297-3a0f8c5e2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "NFT minting and auction platforms with ERC-721 and ERC-1155 standards.",
      "Token gating and royalty management features.",
      "IPFS and decentralized storage integration.",
      "White-label NFT marketplace deployment options."
    ]
  },
  "Blockchain Consulting & Strategy": {
    title: "Blockchain Consulting & Strategy",
    description: "Strategic advisory on how blockchain can disrupt and enhance your business.",
    images: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1626624340241-48d5d4945e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Blockchain feasibility studies and market fit analysis.",
      "Tokenomics and whitepaper development.",
      "End-to-end startup advisory for DeFi, DAO, NFT ventures.",
      "Regulatory compliance and governance strategy."
    ]
  },

  // ✅ Product Development
  "Full-stack application development": {
    title: "Full-stack Application Development",
    description: "Designing robust and scalable software systems from frontend to backend.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Frontend in React, Next.js, and mobile apps in Flutter and React Native.",
      "Backend with Node.js, NestJS, Python (Django, FastAPI), and Golang.",
      "REST APIs, GraphQL, and microservices architecture.",
      "CI/CD, testing, and deployment on modern DevOps pipelines."
    ]
  },
  "UX/UI Design": {
    title: "UX/UI Design",
    description: "Crafting visually appealing, intuitive, and user-first designs.",
    images: [
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Wireframing, prototyping, and interactive design via Figma and Adobe XD.",
      "Design systems for consistent user experience.",
      "User journey and A/B testing for improvement.",
      "Responsive and accessible design principles."
    ]
  },
  "Mobile & Web Application Development": {
    title: "Mobile & Web Application Development",
    description: "Develop powerful, scalable, and modern mobile and web applications tailored to your business needs.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Native iOS/Android apps and cross-platform development with React Native/Flutter.",
      "Progressive Web Apps (PWA) and responsive mobile-first design.",
      "Backend integration with Firebase, AWS, Supabase, or custom APIs.",
      "Push notifications, in-app payments, and real-time features."
    ]
  },
  "Cloud Infrastructure & Scalability": {
    title: "Cloud Infrastructure & Scalability",
    description: "Build scalable, secure, and high-performance cloud environments.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Deployments on AWS, Google Cloud, Azure.",
      "Kubernetes, Docker, Terraform and serverless architectures.",
      "Disaster recovery, logging, and monitoring solutions.",
      "Auto-scaling, load balancing, and performance tuning."
    ]
  },

  // ✅ Technical Consulting
  "Technology assessment and strategy": {
    title: "Technology Assessment and Strategy",
    description: "Evaluating existing systems and designing a strategic roadmap for innovation and optimization.",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Technical audits and codebase reviews.",
      "Digital transformation and modernization planning.",
      "Tool and platform recommendation tailored to business goals.",
      "Competitor analysis and technology benchmarking."
    ]
  },
  "Architecture design & integration": {
    title: "Architecture Design & Integration",
    description: "Designing flexible and scalable systems architecture for modern businesses.",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Microservices and event-driven architecture.",
      "API gateways, service meshes, and container orchestration.",
      "Data lakes and pipeline integrations.",
      "Legacy system integration and migration plans."
    ]
  },
  "Performance optimization": {
    title: "Performance Optimization",
    description: "Enhancing the performance, stability, and efficiency of existing systems.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Database tuning and query optimization.",
      "Frontend performance improvement using lazy loading and caching.",
      "Profiling tools and analytics to identify bottlenecks.",
      "Load testing and real-user monitoring (RUM)."
    ]
  },
  "Training & support": {
    title: "Training & Support",
    description: "Empowering teams with technical skills and providing ongoing product support.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Custom workshops for development teams.",
      "Documentation, onboarding kits, and knowledge bases.",
      "On-call engineering support and SLA-based services.",
      "Long-term maintenance and DevOps monitoring."
    ]
  }
};