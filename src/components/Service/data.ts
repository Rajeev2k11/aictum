// data/services.ts

export interface ServiceDetail {
  title: string;
  description: string;
  images: string[];
  content: string[];
  features?: string[];          
  benefits?: string[];         
  caseStudies?: string[];      
  technologies?: string[];     
}

export const servicesData: Record<string, ServiceDetail> = {
  // ✅ AI & ML Solutions
  "Computer Vision": {
    title: "Computer Vision",
    description: "Empowering machines with the ability to interpret and process visual information, enabling real-world automation and intelligent image analysis.",
    images: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Real-time object detection, tracking, and recognition using advanced AI models like YOLO, Faster R-CNN, and Transformer-based architectures.",
      "Applications in retail (smart checkout), manufacturing (defect detection), and healthcare (medical imaging) with accuracy rates exceeding 98% in controlled environments.",
      "Custom image segmentation, annotation, and classification systems tailored to your specific business requirements.",
      "Facial recognition systems with liveness detection and anti-spoofing measures for high-security applications.",
      "Integration with edge devices for low-latency processing in IoT environments."
    ],
    features: [
      "Custom model training with your proprietary datasets",
      "Edge computing deployment for real-time processing",
      "Multi-camera synchronization for wide-area monitoring",
      "Anomaly detection in video streams",
      "Automated quality control in manufacturing lines"
    ],
    benefits: [
      "Reduce manual inspection costs by up to 70%",
      "Improve defect detection accuracy compared to human inspectors",
      "Enable 24/7 monitoring capabilities without fatigue",
      "Generate actionable insights from visual data",
      "Enhance security with automated threat detection"
    ],
    caseStudies: [
      "Implemented a computer vision system for a automotive manufacturer that reduced defect escape rate by 92%",
      "Developed a retail analytics solution that increased conversion rates by 15% through customer behavior tracking",
      "Created a medical imaging analysis tool that reduced radiologist workload by 40% while maintaining diagnostic accuracy"
    ],
    technologies: [
      "OpenCV, TensorFlow, PyTorch",
      "NVIDIA CUDA, TensorRT",
      "ONNX, CoreML, TensorFlow Lite",
      "AWS SageMaker, Google Vertex AI",
      "Intel OpenVINO, NVIDIA DeepStream"
    ]
  },
  "Natural Language Processing (NLP)": {
    title: "Natural Language Processing (NLP)",
    description: "Equipping machines with the ability to understand, interpret, and respond to human language across multiple contexts with human-like comprehension.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1642790554919-87c9b1643b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Custom chatbots and intelligent assistants using transformer-based models (GPT, BERT, T5) fine-tuned for your specific domain knowledge.",
      "Advanced sentiment analysis and opinion mining from social media, reviews, and customer feedback with emotion detection capabilities.",
      "Multilingual language detection, document summarization, and real-time translation supporting 50+ languages.",
      "Voice command systems with custom wake words and voice-to-text transcription with industry-specific terminology support.",
      "Document processing pipelines for contract analysis, legal document review, and automated compliance checking."
    ],
    features: [
      "Context-aware conversation management",
      "Domain-specific knowledge graph integration",
      "Multi-language support with dialect handling",
      "Speech-to-text with custom vocabulary",
      "Document intelligence for PDFs and scanned images"
    ],
    benefits: [
      "Reduce customer service response time from hours to seconds",
      "Process 10x more documents with the same team size",
      "Gain real-time insights from customer feedback",
      "Break language barriers in global operations",
      "Automate routine legal and compliance tasks"
    ],
    caseStudies: [
      "Built a financial document analysis system that reduced loan processing time from 5 days to 2 hours",
      "Developed a multilingual customer support bot handling 80% of routine inquiries without human intervention",
      "Created a legal contract review tool that identified critical clauses with 95% accuracy"
    ],
    technologies: [
      "Hugging Face Transformers",
      "spaCy, NLTK, Stanford NLP",
      "Google Dialogflow, Rasa",
      "AWS Lex, Azure Cognitive Services",
      "Whisper, Wav2Vec for speech processing"
    ]
  },
  "Generative AI & Chatbots": {
    title: "Generative AI & Chatbots",
    description: "Designing intelligent systems that can generate human-like text, images, and interactions across digital experiences with creative and contextual awareness.",
    images: [
      "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1628498188905-3d2e1f6f4c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "AI-based customer support bots that resolve queries without human involvement using retrieval-augmented generation techniques.",
      "Marketing content generation including blogs, ads, and emails using GPT and other models with brand voice customization.",
      "AI image and video generation tools for creative industries with style transfer and composition control.",
      "Multilingual conversational interfaces using natural language understanding with persona-based response generation.",
      "Personalized content recommendation engines that adapt to user preferences and behavior patterns."
    ],
    features: [
      "Brand-aligned content generation",
      "Multi-modal output (text, image, video)",
      "Content moderation and safety filters",
      "Personalization based on user history",
      "Plagiarism detection and originality scoring"
    ],
    benefits: [
      "Generate marketing copy 100x faster than human writers",
      "Create personalized content at scale",
      "Reduce creative production costs by 60%",
      "Maintain consistent brand voice across all content",
      "Test multiple creative variants instantly"
    ],
    caseStudies: [
      "Developed an AI copywriting system that increased ad click-through rates by 30%",
      "Created a personalized email campaign generator that boosted open rates by 25%",
      "Built an AI art generator that produced 10,000 unique product designs in one week"
    ],
    technologies: [
      "GPT-4, Claude, LLaMA",
      "Stable Diffusion, DALL-E",
      "LangChain, LlamaIndex",
      "Midjourney API",
      "Custom fine-tuned diffusion models"
    ]
  },
  "Predictive Analytics & Data-driven decision making": {
    title: "Predictive Analytics & Data-driven Decision Making",
    description: "Turn data into insights and anticipate outcomes with powerful machine learning models that learn from your historical data and market trends.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Customer behavior analysis for marketing and sales optimization using clustering and recommendation algorithms.",
      "Demand forecasting using historical data, market trends, and external factors with time series analysis.",
      "Financial risk modeling and fraud detection systems with anomaly detection algorithms.",
      "AI dashboards and automated reports for strategic decision making with natural language explanations.",
      "Predictive maintenance systems that reduce equipment downtime by forecasting failures before they occur."
    ],
    features: [
      "Automated feature engineering",
      "Explainable AI for regulatory compliance",
      "What-if scenario simulation",
      "Real-time prediction APIs",
      "Automated model retraining pipelines"
    ],
    benefits: [
      "Improve forecast accuracy by 40-60% over traditional methods",
      "Identify 95% of fraudulent transactions with less than 1% false positives",
      "Reduce inventory costs by optimizing stock levels",
      "Anticipate customer churn with 85% accuracy",
      "Automate routine business reporting"
    ],
    caseStudies: [
      "Built a demand forecasting system that reduced inventory costs by $2.3M annually",
      "Developed a fraud detection model that saved a bank $15M in first year",
      "Created a predictive maintenance solution that reduced equipment downtime by 65%"
    ],
    technologies: [
      "Prophet, ARIMA, LSTM",
      "XGBoost, LightGBM, CatBoost",
      "SHAP, LIME for explainability",
      "Tableau, Power BI integration",
      "Databricks, Snowflake, BigQuery"
    ]
  },

  // ✅ Blockchain & Web3 Solutions
  "Smart Contract Development": {
    title: "Smart Contract Development",
    description: "Building self-executing contracts on blockchain platforms like Ethereum, Polygon, and Solana with security and scalability at the core.",
    images: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1626624340241-48d5d4945e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681297-3a0f8c5e2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Smart contract logic written in Solidity, Rust, and Vyper with comprehensive unit testing and formal verification.",
      "Secure, audited contracts for DeFi, NFT, and DAOs with protection against common vulnerabilities.",
      "Integration with wallets like MetaMask, Ledger, and Trezor with seamless user experience.",
      "Upgradable contracts with proxy patterns and modular architecture for future-proof solutions.",
      "Gas optimization techniques to reduce transaction costs by up to 70% without compromising security."
    ],
    features: [
      "Multi-signature contract deployments",
      "Time-locked administrative functions",
      "Circuit breaker emergency stops",
      "Gas fee estimation and optimization",
      "Cross-chain compatibility layers"
    ],
    benefits: [
      "Eliminate intermediaries in business processes",
      "Create tamper-proof systems of record",
      "Enable trustless transactions between parties",
      "Automate complex business logic",
      "Build composable financial instruments"
    ],
    caseStudies: [
      "Developed a DeFi protocol that processed $450M in transactions first month",
      "Created an NFT smart contract system supporting 10,000+ daily mints",
      "Built a DAO governance system for a 50,000 member community"
    ],
    technologies: [
      "Solidity, Rust, Vyper",
      "Hardhat, Foundry, Truffle",
      "OpenZeppelin libraries",
      "Chainlink oracles",
      "Ether.js, Web3.js"
    ]
  },
  "Decentralized Applications (dApps)": {
    title: "Decentralized Applications (dApps)",
    description: "Creating scalable and user-centric dApps that interact with blockchain networks while providing familiar web experiences.",
    images: [
      "https://images.unsplash.com/photo-1639762681297-3a0f8c5e2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1626624340241-48d5d4945e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Full-stack dApp development using modern frameworks like Next.js, React, and Node.js with Web3 integration.",
      "On-chain and off-chain logic integration with hybrid architecture for optimal performance and cost.",
      "Decentralized identity (DID) and wallet login features with non-custodial key management.",
      "Cross-chain compatibility and token bridge implementations for multi-blockchain ecosystems.",
      "User-friendly interfaces that abstract blockchain complexity while maintaining decentralization benefits."
    ],
    features: [
      "Wallet connection UI components",
      "Transaction progress tracking",
      "Gas fee optimization tools",
      "On-chain analytics dashboards",
      "Mobile-first responsive design"
    ],
    benefits: [
      "Build censorship-resistant applications",
      "Create user-owned data ecosystems",
      "Enable new tokenized business models",
      "Access global crypto-native audiences",
      "Leverage blockchain security guarantees"
    ],
    caseStudies: [
      "Built a DeFi dashboard with 50,000+ MAU showing real-time yield opportunities",
      "Developed a play-to-earn game with 1M+ NFT transactions in first 3 months",
      "Created a DAO management portal simplifying governance for non-technical users"
    ],
    technologies: [
      "React, Next.js, Vue",
      "Ethers.js, Web3.js",
      "The Graph for indexing",
      "IPFS, Filecoin storage",
      "WalletConnect, Web3Modal"
    ]
  },
  "NFT Marketplaces & Tokenization": {
    title: "NFT Marketplaces & Tokenization",
    description: "Launch your own NFT platforms and tokenize assets from art to real estate with customizable smart contracts and user experiences.",
    images: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681297-3a0f8c5e2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1626624340241-48d5d4945e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "NFT minting and auction platforms with ERC-721 and ERC-1155 standards supporting multiple sale models.",
      "Token gating and royalty management features ensuring creators get paid on secondary sales.",
      "IPFS and decentralized storage integration for permanent, immutable asset storage.",
      "White-label NFT marketplace deployment options with custom branding and features.",
      "Physical asset tokenization bridges connecting real-world assets to blockchain liquidity."
    ],
    features: [
      "Lazy minting to reduce gas costs",
      "Bulk NFT creation tools",
      "Royalty enforcement mechanisms",
      "Auction and fixed-price listings",
      "Rarity ranking and trait filtering"
    ],
    benefits: [
      "Create new revenue streams from digital assets",
      "Enable fractional ownership of high-value items",
      "Build engaged collector communities",
      "Prove authenticity and provenance",
      "Automate royalty payments"
    ],
    caseStudies: [
      "Launched an NFT marketplace for a major sports league processing 250,000+ transactions",
      "Tokenized $25M in real estate assets enabling fractional investment",
      "Created a generative art platform that sold out 10,000 NFTs in 8 minutes"
    ],
    technologies: [
      "ERC-721A, ERC-1155",
      "OpenSea Shared Storefront",
      "Manifold Creator Contracts",
      "ZK-proofs for private sales",
      "Chainlink VRF for randomness"
    ]
  },
  "Blockchain Consulting & Strategy": {
    title: "Blockchain Consulting & Strategy",
    description: "Strategic advisory on how blockchain can disrupt and enhance your business with practical implementation roadmaps.",
    images: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1626624340241-48d5d4945e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681297-3a0f8c5e2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Blockchain feasibility studies and market fit analysis identifying high-impact use cases.",
      "Tokenomics design including token distribution, utility, and governance mechanisms.",
      "End-to-end startup advisory for DeFi, DAO, NFT ventures from concept to launch.",
      "Regulatory compliance strategy navigating evolving global blockchain regulations.",
      "Blockchain integration roadmaps for enterprises including legacy system connectivity."
    ],
    features: [
      "Competitor landscape analysis",
      "Token valuation models",
      "Go-to-market strategy",
      "Investor pitch preparation",
      "Regulatory risk assessment"
    ],
    benefits: [
      "Avoid costly technical mistakes",
      "Design sustainable token economies",
      "Navigate complex regulations",
      "Identify most promising use cases",
      "Align blockchain with business goals"
    ],
    caseStudies: [
      "Advised Fortune 500 company on $50M blockchain initiative saving 9 months development time",
      "Designed tokenomics for project that raised $30M in private funding",
      "Created regulatory compliance framework adopted by 3 jurisdictions"
    ],
    technologies: [
      "Tokenomics modeling tools",
      "Regulatory research databases",
      "Market analysis frameworks",
      "Blockchain architecture diagrams",
      "Smart contract audit checklists"
    ]
  },

  // ✅ Product Development
  "Full-stack application development": {
    title: "Full-stack Application Development",
    description: "Designing robust and scalable software systems from frontend to backend with modern architectures and best practices.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Frontend development in React, Next.js, and Vue with TypeScript for type-safe code.",
      "Mobile apps in Flutter and React Native with native performance optimizations.",
      "Backend systems with Node.js, NestJS, Python (Django, FastAPI), and Golang for high-performance needs.",
      "REST APIs, GraphQL, and gRPC endpoints with comprehensive documentation.",
      "Microservices architecture with Kubernetes orchestration and service mesh patterns."
    ],
    features: [
      "JAMstack architecture options",
      "Serverless backend components",
      "Real-time capabilities with WebSockets",
      "Automated API documentation",
      "Progressive Web App support"
    ],
    benefits: [
      "Faster time-to-market with proven stacks",
      "Higher quality with type checking",
      "Easier maintenance with clean architecture",
      "Better performance with optimized stacks",
      "Future-proof technology choices"
    ],
    caseStudies: [
      "Built a SaaS platform processing 1M+ requests/day with 99.99% uptime",
      "Developed a healthcare application handling 500,000 patient records",
      "Created a real-time collaboration tool used by 50,000+ teams"
    ],
    technologies: [
      "React 18, Next.js 13",
      "Node.js 18, NestJS",
      "PostgreSQL, MongoDB",
      "Docker, Kubernetes",
      "AWS, GCP, Azure"
    ]
  },
   "UX/UI Design": {
    title: "UX/UI Design",
    description: "Crafting visually appealing, intuitive, and user-first designs that drive engagement and conversion.",
    images: [
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Comprehensive wireframing and prototyping with Figma, Adobe XD, and Framer for rapid iteration.",
      "Design systems with reusable components, typography scales, and accessibility-compliant color palettes.",
      "User research including persona development, journey mapping, and usability testing with real users.",
      "Motion design and micro-interactions to enhance user engagement and guide flows.",
      "Accessibility audits and WCAG 2.1 compliance implementation for inclusive design."
    ],
    features: [
      "Interactive prototypes with realistic flows",
      "Design token management for consistency",
      "User testing session coordination",
      "Design handoff with developer specs",
      "Dark/light mode implementations"
    ],
    benefits: [
      "Increase conversion rates by 20-35%",
      "Reduce user onboarding time by 50%",
      "Lower support requests through intuitive design",
      "Build brand recognition through consistent UI",
      "Reach wider audience with accessible design"
    ],
    caseStudies: [
      "Redesigned e-commerce platform increasing conversion by 28%",
      "Created design system saving 300+ development hours annually",
      "Improved app usability scores from 3.2 to 4.7/5.0"
    ],
    technologies: [
      "Figma, Sketch, Adobe XD",
      "ProtoPie, Framer",
      "UserTesting.com",
      "Hotjar, FullStory",
      "Zeroheight, Storybook"
    ]
  },
  "Mobile & Web Application Development": {
    title: "Mobile & Web Application Development",
    description: "Develop powerful, scalable, and modern mobile and web applications tailored to your business needs with native performance.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Native iOS (Swift) and Android (Kotlin) development with platform-specific optimizations.",
      "Cross-platform solutions using Flutter and React Native with 90%+ code reuse.",
      "Progressive Web Apps (PWA) with offline capabilities and app-like experiences.",
      "Backend integration with Firebase, AWS Amplify, or custom Node.js/Python APIs.",
      "App store optimization (ASO) and deployment support for Google Play and App Store."
    ],
    features: [
      "Biometric authentication",
      "Offline-first data sync",
      "Deep linking support",
      "In-app purchase systems",
      "Background task processing"
    ],
    benefits: [
      "Faster time-to-market than native development",
      "Lower maintenance costs with single codebase",
      "Access to device hardware features",
      "App-like experience without install",
      "Automatic updates without store approval"
    ],
    caseStudies: [
      "Built healthcare app with 500K+ downloads and 4.8-star rating",
      "Developed PWA reducing bounce rate by 40%",
      "Created cross-platform app used by 10K field workers"
    ],
    technologies: [
      "Flutter 3, React Native",
      "SwiftUI, Jetpack Compose",
      "Workbox, Service Workers",
      "Firebase, Supabase",
      "Fastlane, App Center"
    ]
  },
  "Cloud Infrastructure & Scalability": {
    title: "Cloud Infrastructure & Scalability",
    description: "Build scalable, secure, and high-performance cloud environments optimized for your workload patterns.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Multi-cloud deployments on AWS, Google Cloud, and Azure with Terraform infrastructure-as-code.",
      "Kubernetes clusters with auto-scaling, service mesh (Istio/Linkerd), and GitOps workflows.",
      "Serverless architectures using Lambda, Cloud Functions, and Edge computing.",
      "Disaster recovery strategies with multi-region deployments and backup automation.",
      "Cost optimization through reserved instances, spot pricing, and usage analysis."
    ],
    features: [
      "Infrastructure as Code (IaC)",
      "Zero-downtime deployments",
      "Observability stacks",
      "Security compliance frameworks",
      "FinOps cost management"
    ],
    benefits: [
      "Handle 10X traffic spikes seamlessly",
      "Reduce cloud costs by 30-60%",
      "Achieve 99.99% uptime SLAs",
      "Deploy updates in seconds",
      "Meet strict compliance requirements"
    ],
    caseStudies: [
      "Migrated legacy system to cloud saving $250K/year",
      "Scaled infrastructure for Black Friday 500% traffic surge",
      "Implemented compliance framework for HIPAA/GDPR"
    ],
    technologies: [
      "Terraform, Pulumi",
      "EKS, GKE, AKS",
      "Prometheus, Grafana",
      "AWS Well-Architected",
      "CloudHealth, Kubecost"
    ]
  },

  // ✅ Technical Consulting
  "Technology assessment and strategy": {
    title: "Technology Assessment and Strategy",
    description: "Evaluating existing systems and designing a strategic roadmap for innovation and optimization aligned with business goals.",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Comprehensive technical audits assessing architecture, code quality, security, and performance.",
      "Digital transformation roadmaps with phased migration strategies and ROI analysis.",
      "Technology selection frameworks evaluating build-vs-buy and vendor options.",
      "Competitor tech stack analysis and industry benchmarking.",
      "Innovation workshops identifying emerging tech opportunities (AI, Blockchain, IoT)."
    ],
    features: [
      "Code quality metrics reporting",
      "Technical debt quantification",
      "Migration risk assessment",
      "Vendor evaluation matrix",
      "Innovation opportunity mapping"
    ],
    benefits: [
      "Identify 20-40% cost savings opportunities",
      "Reduce technical debt by 50%+",
      "Align tech investments with business goals",
      "Avoid costly technology missteps",
      "Accelerate digital transformation"
    ],
    caseStudies: [
      "Identified $1.2M annual savings for enterprise through cloud migration plan",
      "Reduced system downtime by 80% through architecture review",
      "Selected optimal e-commerce platform saving 6 months development time"
    ],
    technologies: [
      "SonarQube, CodeClimate",
      "AWS Well-Architected Tool",
      "Gartner Magic Quadrant",
      "TOGAF framework",
      "Business Model Canvas"
    ]
  },
  "Architecture design & integration": {
    title: "Architecture Design & Integration",
    description: "Designing flexible and scalable systems architecture for modern businesses with seamless integration capabilities.",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Microservices decomposition strategies with bounded context design.",
      "Event-driven architectures using Kafka, RabbitMQ, or AWS EventBridge.",
      "Legacy system modernization with strangler pattern and anti-corruption layers.",
      "Data mesh architectures decentralizing analytics at scale.",
      "Integration design for ERP, CRM, and third-party SaaS platforms."
    ],
    features: [
      "Architecture decision records",
      "Service boundary analysis",
      "Integration pattern selection",
      "Data flow modeling",
      "Failure mode analysis"
    ],
    benefits: [
      "Scale systems 10X without redesign",
      "Reduce integration costs by 40%",
      "Improve system reliability to 99.95%+",
      "Enable faster feature development",
      "Future-proof technology investments"
    ],
    caseStudies: [
      "Designed architecture handling 50K TPS for fintech startup",
      "Modernized legacy mainframe saving $800K/year",
      "Created integration layer connecting 15+ hospital systems"
    ],
    technologies: [
      "C4 modeling",
      "Archimate",
      "Kafka, NATS",
      "GraphQL Federation",
      "Apache Camel"
    ]
  },
  "Performance optimization": {
    title: "Performance Optimization",
    description: "Enhancing the performance, stability, and efficiency of existing systems through targeted improvements.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Database query optimization with indexing strategies and execution plan analysis.",
      "Frontend performance audits identifying render-blocking resources and lazy loading opportunities.",
      "API latency reduction through caching, connection pooling, and payload optimization.",
      "Infrastructure right-sizing based on actual usage patterns and load testing.",
      "End-to-end tracing with distributed tracing tools identifying bottlenecks."
    ],
    features: [
      "Load testing simulations",
      "Performance benchmarking",
      "Memory leak detection",
      "CPU profiling",
      "Real-user monitoring"
    ],
    benefits: [
      "Improve page load times by 50-80%",
      "Reduce server costs by 30-60%",
      "Handle 3-5X more concurrent users",
      "Improve SEO through Core Web Vitals",
      "Enhance user experience and retention"
    ],
    caseStudies: [
      "Reduced API response times from 2.1s to 190ms",
      "Cut AWS bill by $45K/month through right-sizing",
      "Improved Google Lighthouse scores from 35 to 92"
    ],
    technologies: [
      "New Relic, Datadog",
      "JMeter, k6",
      "Chrome DevTools",
      "Redis, Memcached",
      "OpenTelemetry"
    ]
  },
  "Training & support": {
    title: "Training & Support",
    description: "Empowering teams with technical skills and providing ongoing product support for long-term success.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    content: [
      "Customized workshops on modern development practices (Agile, DevOps, CI/CD).",
      "Technology deep dives (React, Node.js, Python, Cloud Native).",
      "Documentation systems with MkDocs, Docusaurus, or custom solutions.",
      "24/7 production support with SLA-based response times.",
      "Long-term maintenance contracts with scheduled upgrades and security patches."
    ],
    features: [
      "Hands-on coding exercises",
      "Custom training materials",
      "Certification preparation",
      "Incident response playbooks",
      "Knowledge base systems"
    ],
    benefits: [
      "Accelerate team onboarding by 50%",
      "Reduce production incidents by 40%",
      "Maintain systems beyond launch",
      "Keep skills current with tech trends",
      "Ensure business continuity"
    ],
    caseStudies: [
      "Trained 150+ developers across 10 teams",
      "Reduced critical incidents from 15 to 2/month",
      "Maintained system for 5+ years with 99.99% uptime"
    ],
    technologies: [
      "GitLab CI/CD",
      "Jupyter Notebooks",
      "Confluence, Notion",
      "PagerDuty, OpsGenie",
      "Sentry, Rollbar"
    ]
  }
};
