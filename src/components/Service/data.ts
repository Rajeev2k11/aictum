// data/services.ts

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ServiceDetail {
  [x: string]: any;
  title: string;
  description: string;
  images: string[];
  content: string[];
  features?: (string | FeatureItem)[];          
  benefits?: string[];         
  caseStudies?: string[];      
  technologies?: string[];     
  whyAictum?: (string | FeatureItem)[];
  futureReady?: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  // ✅ AI & ML Solutions
  "Computer Vision": {
  "title": "Computer Vision",
  "description": "Empowering machines with the ability to interpret, analyze, and act upon visual data — revolutionizing industries with real-time automation, intelligent decision-making, and enhanced user experiences.",

  "images": [
    "/images/services/cv.jpg",
    
  ],

  "content": [
    "Real-time object detection, tracking, and recognition using advanced AI models like YOLO, Faster R-CNN, and Vision Transformers (ViT).",
    "Image and video analysis systems trained to perform complex tasks like crowd counting, emotion recognition, and behavior prediction.",
    "Applications across domains: agriculture (crop health monitoring), logistics (package tracking), smart cities (traffic analytics), and more.",
    "Advanced video analytics with motion detection, incident recognition, and intelligent alerting in public safety systems.",
    "Optical Character Recognition (OCR) solutions for automating document processing, license plate recognition, and ID verification.",
    "Custom-built AI pipelines from dataset creation to model deployment, designed for scale, accuracy, and business alignment.",
    "Edge AI integration with GPUs and TPUs for offline, low-latency inference in mission-critical environments.",
    "Cross-platform integration: AR/VR vision systems, drone surveillance, and robotic vision for autonomous navigation."
  ],

  features: [
  {
    title: "Custom Model Training",
    description: "Custom model training with your proprietary datasets for specialized computer vision applications"
  },
  {
    title: "Edge Computing",
    description: "Edge computing deployment for real-time processing of visual data with low latency"
  },
  {
    title: "Object Detection",
    description: "Accurate identification and localization of objects within images and video streams"
  },
  {
    title: "Facial Recognition",
    description: "Advanced facial recognition systems with high accuracy and anti-spoofing capabilities"
  },
  {
    title: "Image Segmentation",
    description: "Pixel-level segmentation for precise object boundaries and scene understanding"
  },
  {
    title: "Optical Character Recognition",
    description: "Text extraction from images and documents with support for multiple languages"
  },
  {
    title: "Motion Analysis",
    description: "Tracking and analysis of movement patterns in video sequences"
  },
  {
    title: "3D Reconstruction",
    description: "Conversion of 2D images into 3D models for spatial analysis"
  },
  {
    title: "Quality Inspection",
    description: "Automated visual inspection for manufacturing and production lines"
  }
],

  "benefits": [
    "Reduce manual inspection costs by up to 70%",
    "Improve defect detection accuracy compared to human inspectors",
    "Enable 24/7 monitoring capabilities without fatigue",
    "Generate actionable insights from visual data",
    "Enhance security with automated threat detection",
    "Shorten decision-making time with real-time analysis",
    "Increase productivity through AI-augmented processes",
    "Ensure regulatory compliance through consistent, auditable inspections"
  ],

  "caseStudies": [
    "Implemented a computer vision system for an automotive manufacturer that reduced defect escape rate by 92%",
    "Developed a retail analytics solution that increased conversion rates by 15% through customer behavior tracking",
    "Created a medical imaging analysis tool that reduced radiologist workload by 40% while maintaining diagnostic accuracy",
    "Built an AI-powered warehouse automation system using vision-guided robotics, increasing throughput by 30%",
    "Engineered a smart surveillance system for a smart city project with real-time threat alerts and license plate tracking"
  ],

  "technologies": [
    "OpenCV, TensorFlow, PyTorch",
    "NVIDIA CUDA, TensorRT",
    "ONNX, CoreML, TensorFlow Lite",
    "AWS SageMaker, Google Vertex AI",
    "Intel OpenVINO, NVIDIA DeepStream",
    "Label Studio, Roboflow, Supervisely",
    "Docker, Kubernetes for scalable deployments"
  ],

  whyAictum: [
  {
    title: "AI/ML Expertise",
    description: "Deep expertise in AI/ML and computer vision domains with a proven portfolio across industries"
  },
  {
    title: "In-house Team",
    description: "In-house team of data scientists, AI engineers, and domain consultants for tailored solutioning"
  },
  {
    title: "Cutting-Edge Research",
    description: "Dedicated R&D team continuously innovating with the latest computer vision architectures and techniques"
  },
  {
    title: "Scalable Solutions",
    description: "Proven frameworks that scale from pilot to enterprise-level deployment across thousands of devices"
  },
  {
    title: "Domain Specialization",
    description: "Deep vertical expertise in healthcare, manufacturing, retail and smart city applications"
  },
  {
    title: "Performance Guarantee",
    description: "Accuracy and latency SLAs tailored to your specific business requirements"
  }
],

  "futureReady": [
    "Working on vision-language models that understand both images and text (e.g., GPT-4V, Flamingo, BLIP)",
    "Exploring neuromorphic vision systems inspired by the human brain for faster, energy-efficient perception",
    "Developing explainable AI (XAI) interfaces for regulated sectors like healthcare and finance",
    "R&D in federated learning for privacy-preserving computer vision systems"
  ]
},
  
  "Natural Language Processing (NLP)": {
  "title": "Natural Language Processing (NLP)",
  "description": "Empowering machines to read, comprehend, and generate human language with near-human intelligence — transforming communication, automation, and decision-making across industries.",

  "images": [
    "/images/services/nlp.jpg",
  ],

  "content": [
    "Custom-built conversational agents and intelligent virtual assistants using transformer architectures like GPT-4, BERT, and LLaMA — fine-tuned for domain-specific workflows.",
    "AI-driven document intelligence systems that classify, extract, summarize, and validate data from contracts, invoices, emails, and policy documents.",
    "Multilingual NLP with translation, transliteration, and sentiment analysis for 50+ global languages and regional dialects.",
    "Advanced intent detection and entity recognition for voice and text inputs — enabling smart IVR, chatbots, and task automation.",
    "End-to-end speech solutions: wake-word detection, automatic speech recognition (ASR), voice biometric verification, and speech synthesis (TTS).",
    "Text-to-knowledge graph pipelines: extracting structured insights from unstructured enterprise content and integrating with ontologies.",
    "Compliance automation tools using NLP to flag risky language in legal, HR, and financial documentation.",
    "Generative AI tools for automatic email drafting, report generation, proposal writing, and knowledge base creation."
  ],

  features: [
    {
      title: "Text Classification",
      description: "Automatically categorize documents, emails, and content with high accuracy"
    },
    {
      title: "Sentiment Analysis",
      description: "Detect emotions, opinions, and attitudes in customer feedback and social media"
    },
    {
      title: "Named Entity Recognition",
      description: "Identify and extract people, organizations, locations from unstructured text"
    },
    {
      title: "Machine Translation",
      description: "Real-time translation between multiple languages with context preservation"
    },
    {
      title: "Chatbot Framework",
      description: "Conversational AI agents with contextual understanding and memory"
    },
    {
      title: "Text Summarization",
      description: "Automatic summarization of documents while preserving key information"
    },
    {
      title: "Speech Recognition",
      description: "Convert speech to text with industry-leading accuracy rates"
    },
    {
      title: "Language Generation",
      description: "Generate human-like text for reports, product descriptions, and more"
    }
  ],

  "benefits": [
    "Accelerate customer support resolution time by up to 90%",
    "Automate repetitive document handling with 95%+ accuracy",
    "Improve accessibility with multilingual voice interfaces",
    "Reduce compliance risk with automated legal and financial reviews",
    "Unlock hidden business insights from massive text data",
    "Improve user engagement with personalized, AI-powered responses",
    "Scale operations without increasing headcount",
    "Enable voice-first and hands-free experiences for field teams"
  ],

  "caseStudies": [
    "Developed a multilingual customer support assistant for an e-commerce company, reducing human agent load by 70% and cutting ticket resolution time by 85%.",
    "Built a financial document processing system that analyzed 10,000+ loan agreements in under 3 hours using NLP-powered clause extraction.",
    "Engineered a knowledge management bot for an enterprise HR system that reduced employee onboarding queries by 60%.",
    "Implemented a sentiment monitoring solution for a global brand that captured real-time consumer feedback across 8 languages.",
    "Created a legal document comparator tool that identified risky clauses across versions — used by top-tier law firms for fast M&A reviews."
  ],

  "technologies": [
    "OpenAI GPT, Google PaLM, Meta LLaMA",
    "Hugging Face Transformers, LangChain",
    "spaCy, NLTK, AllenNLP",
    "Rasa, Dialogflow CX, Microsoft LUIS",
    "Whisper, Wav2Vec2, Mozilla DeepSpeech",
    "AWS Comprehend, Azure Cognitive Services, GCP Natural Language API",
    "Haystack, Milvus for semantic search",
    "Dockerized NLP APIs with REST & gRPC support"
  ],

  whyAictum: [
    {
      title: "NLP Specialists",
      description: "Team of computational linguists and ML engineers with PhD-level expertise in language technologies"
    },
    {
      title: "Domain Adaptation",
      description: "Custom model tuning for legal, medical, and technical terminology handling"
    },
    {
      title: "Privacy Compliance",
      description: "On-premise deployment options for sensitive data with full GDPR/HIPAA compliance"
    },
    {
      title: "Multilingual Models",
      description: "Proven experience with 50+ languages including low-resource dialects"
    },
    {
      title: "Explainable AI",
      description: "Transparent decision-making with model interpretability features"
    },
    {
      title: "Continuous Learning",
      description: "Systems that automatically adapt to evolving language use and new terminology"
    }
  ],

  "futureReady": [
    "Actively researching vision-language models for multimodal understanding and generation.",
    "Experimenting with retrieval-augmented generation (RAG) for enterprise knowledge querying.",
    "Developing domain-specific LLMs and fine-tuned agents for HR, law, insurance, and BFSI sectors.",
    "Building zero-shot and few-shot pipelines for rapid NLP deployment with minimal data.",
    "Investing in responsible AI practices — bias detection, explainability, and fairness in NLP outputs."
  ]
},

  "Generative AI & Chatbots": {
  "title": "Generative AI & Chatbots",
  "description": "Designing intelligent systems that generate human-like text, visuals, and interactions — enabling businesses to automate communication, create content at scale, and deliver personalized digital experiences with unprecedented efficiency.",

  "images": [
    "/images/services/ga.jpg",
  ],

  "content": [
    "Conversational AI agents powered by GPT-4, Claude, or LLaMA — customized to understand your domain, tone, and customer expectations.",
    "Retrieval-Augmented Generation (RAG) bots that combine generative power with knowledge grounding from your business documents, websites, or CRMs.",
    "AI-driven marketing tools that generate SEO-friendly blogs, ad copy, product descriptions, emails, and social media posts — all aligned to your brand voice.",
    "Generative art and video synthesis tools for content teams, including image variation, storyboard generation, and creative ideation support.",
    "Multimodal chatbots that combine voice, text, and visual input to deliver rich user interactions — useful in retail, education, healthcare, and hospitality.",
    "Custom LLMs for internal knowledge automation: HR policy bots, legal clause explainers, IT support agents, and employee onboarding assistants.",
    "End-to-end chatbot platforms integrated with WhatsApp, Slack, Messenger, and enterprise apps for 24/7 customer service and lead generation.",
    "Enterprise-grade governance: human-in-the-loop content review, moderation pipelines, and ethical filters for safe and responsible AI deployment."
  ],

  features: [
    {
      title: "Conversational AI",
      description: "Context-aware chatbots with memory and personalized responses"
    },
    {
      title: "Content Generation",
      description: "Automated creation of marketing copy, reports, and creative content"
    },
    {
      title: "Multimodal AI",
      description: "Generate and process text, images, and audio in unified workflows"
    },
    {
      title: "Knowledge Assistants",
      description: "AI-powered search and Q&A systems using your proprietary data"
    },
    {
      title: "Persona Customization",
      description: "Tailor AI personality, tone, and style to match your brand"
    },
    {
      title: "API Integration",
      description: "Easy integration with CRM, ERP, and business applications"
    },
    {
      title: "Sentiment Adaptation",
      description: "Real-time emotional intelligence for appropriate responses"
    },
    {
      title: "Analytics Dashboard",
      description: "Monitor performance, user satisfaction, and conversation trends"
    }
  ],

  "benefits": [
    "Scale content production by 10x without hiring more writers or designers",
    "Deliver personalized conversations across web, app, and social channels",
    "Achieve faster time-to-market for creative campaigns and product launches",
    "Automate routine support interactions, freeing up human agents for complex queries",
    "Maintain a consistent brand tone across all customer touchpoints",
    "Drive higher engagement with tailored, data-driven content",
    "Reduce creative agency costs by up to 70%",
    "Gain competitive edge with always-on AI content engines"
  ],

  "caseStudies": [
    "Created a generative email marketing system for a SaaS company that increased open rates by 25% and reduced campaign launch time from 3 days to 30 minutes.",
    "Developed an AI copywriting assistant for an e-commerce brand, leading to a 30% boost in ad click-through rates and 5x content production speed.",
    "Built a digital avatar-powered chatbot for a luxury brand that delivered human-like shopping assistance across 5 languages and increased conversions by 18%.",
    "Launched a generative campaign design tool for a media company, producing 10,000 unique social media creatives in a single week.",
    "Engineered an internal chatbot for a global IT firm that automated onboarding FAQs, reducing HR workload by 40%."
  ],

  "technologies": [
    "OpenAI GPT-4, Claude 3, Meta LLaMA",
    "Stable Diffusion, Midjourney, DALL·E 3",
    "LangChain, LlamaIndex, Semantic Kernel",
    "Whisper for voice input, ElevenLabs for speech output",
    "Custom LoRA fine-tuning and embeddings",
    "Firebase, Twilio, Dialogflow, Botpress",
    "Pinecone, Weaviate for semantic memory",
    "Secure REST APIs and WebSocket integrations"
  ],

  whyAictum: [
    {
      title: "LLM Experts",
      description: "Specialists in fine-tuning GPT, Claude, and proprietary LLMs for business applications"
    },
    {
      title: "Enterprise Ready",
      description: "Solutions designed for scalability, security, and compliance from day one"
    },
    {
      title: "Hybrid Architecture",
      description: "Combine public models with private data without compromising security"
    },
    {
      title: "Continuous Learning",
      description: "Systems that improve automatically from user interactions"
    },
    {
      title: "Multichannel Deployment",
      description: "Deploy across web, mobile, WhatsApp, and internal communication platforms"
    },
    {
      title: "Ethical AI",
      description: "Built-in safeguards against bias, hallucinations, and inappropriate content"
    }
  ],

  "futureReady": [
    "Building agents that reason and take actions — goal-driven chatbots for complex workflows",
    "Developing autonomous AI teammates with memory, tools, and feedback loops",
    "Advancing multimodal generation with text-to-video and voice-to-image capabilities",
    "Training domain-specific LLMs for healthcare, legal, and finance using secure federated learning",
    "Researching emotional intelligence in AI — tone modulation, sentiment matching, and context retention"
  ]
},
  "Predictive Analytics & Data-driven decision making": {
  "title": "Predictive Analytics & Data-driven Decision Making",
  "description": "Leverage the power of machine learning and statistical modeling to forecast outcomes, mitigate risks, and make smarter business decisions — all grounded in your data, not just intuition.",

  "images": [
    "/images/services/paddm.jpg",
  ],

  "content": [
    "Customer behavior segmentation and churn prediction using classification, clustering, and lifetime value models to tailor marketing and retention strategies.",
    "Sales and demand forecasting using time series modeling (Prophet, ARIMA, LSTM) and external drivers like seasonality, holidays, and macroeconomic factors.",
    "Real-time risk scoring systems for fraud detection, loan default prediction, and credit scoring using anomaly detection and ensemble models.",
    "Predictive maintenance for manufacturing and industrial equipment using sensor data and early-failure pattern analysis to reduce unplanned downtime.",
    "Dynamic pricing and inventory optimization engines powered by demand forecasts, competitor pricing, and consumer trends.",
    "Executive dashboards with natural language generation (NLG) and scenario simulation tools that turn forecasts into actionable insights.",
    "Custom-built ML pipelines — from raw data ingestion to real-time model deployment — integrated within your existing BI or ERP ecosystem.",
    "AI model monitoring and retraining workflows to ensure performance over time and adapt to market or data shifts."
  ],

   features: [
    {
      title: "Demand Forecasting",
      description: "Predict customer demand patterns with machine learning models"
    },
    {
      title: "Predictive Maintenance",
      description: "Anticipate equipment failures before they occur"
    },
    {
      title: "Customer Churn Prediction",
      description: "Identify at-risk customers with 85%+ accuracy"
    },
    {
      title: "Risk Modeling",
      description: "Quantify and mitigate financial, operational, and market risks"
    },
    {
      title: "Price Optimization",
      description: "Dynamic pricing models to maximize revenue and competitiveness"
    },
    {
      title: "Real-time Analytics",
      description: "Stream processing for instant insights from live data"
    },
    {
      title: "Scenario Planning",
      description: "Simulate business outcomes under different conditions"
    },
    {
      title: "Automated Reporting",
      description: "AI-generated insights with natural language explanations"
    }
  ],
  "benefits": [
    "Increase forecasting accuracy by up to 60% over legacy models",
    "Detect fraudulent patterns with >95% precision and <1% false positives",
    "Reduce downtime with predictive maintenance alerts 2–3 weeks in advance",
    "Optimize marketing ROI through targeted customer segmentation",
    "Empower executives with real-time insights and data-driven recommendations",
    "Lower inventory holding costs by aligning stock with actual demand",
    "Minimize operational risk with proactive risk scoring",
    "Automate decision-making across finance, supply chain, HR, and more"
  ],

  "caseStudies": [
    "Reduced annual inventory holding costs by $2.3M using AI-driven demand forecasting for a global retailer",
    "Saved $15M in fraud-related losses for a banking client by deploying a custom risk detection model",
    "Deployed a predictive maintenance system for a manufacturing client that lowered downtime by 65% across 8 facilities",
    "Built a real-time pricing optimization engine for an e-commerce firm that increased profit margins by 12%",
    "Designed an executive AI dashboard with natural language summaries, adopted by a Fortune 100 CFO team"
  ],

  "technologies": [
    "Prophet, ARIMA, VAR, LSTM",
    "XGBoost, LightGBM, CatBoost",
    "SHAP, LIME, ELI5 for model explainability",
    "Scikit-learn, H2O.ai, PyCaret",
    "Databricks, Snowflake, BigQuery",
    "Tableau, Power BI, Looker",
    "MLflow, Airflow for MLOps and retraining pipelines"
  ],

  whyAictum: [
    {
      title: "Proven Methodology",
      description: "CRISP-DM based approach refined across 100+ implementations"
    },
    {
      title: "Full-stack Expertise",
      description: "From data engineering to model deployment and monitoring"
    },
    {
      title: "Industry Templates",
      description: "Pre-built models for retail, manufacturing, and financial services"
    },
    {
      title: "Explainable AI",
      description: "Transparent models with clear rationale for all predictions"
    },
    {
      title: "Data Agnostic",
      description: "Work with structured, unstructured, and real-time data streams"
    },
    {
      title: "ROI Focused",
      description: "Clear metrics linking insights to business outcomes"
    }
  ],

  "futureReady": [
    "Integrating causal inference for counterfactual reasoning and strategic planning",
    "Researching hybrid models combining symbolic reasoning with machine learning for better decision support",
    "Advancing continual learning systems to adapt to fast-changing data environments",
    "Developing AI copilots for business analysts to auto-generate forecasts and simulations from voice or chat input",
    "Working on federated predictive models for cross-enterprise collaboration without data sharing"
  ]
},

  // ✅ Blockchain & Web3 Solutions
 "Smart Contract Development": {
  "title": "Smart Contract Development",
  "description": "Designing and deploying secure, scalable, and upgradeable smart contracts for DeFi, NFT, and DAO applications — leveraging blockchain platforms like Ethereum, Polygon, and Solana with security-first architecture.",

  "images": [
    "/images/services/scd.jpg",
  ],

  "content": [
    "Custom smart contracts written in Solidity, Rust, and Vyper, tailored for use cases such as tokenomics, staking, DAOs, NFT minting, or DeFi protocols — with comprehensive unit and integration testing.",
    "Security-first design practices including formal verification, automated vulnerability scanning, and manual audits to defend against reentrancy, front-running, overflow, and other common exploits.",
    "Upgradeable smart contract patterns (proxy-based, modular) that enable future enhancements without redeployment or loss of state.",
    "Multi-signature governance systems with timelocks and circuit breakers to enable safe on-chain administration and decentralized decision-making.",
    "Seamless integration with Web3 frontends, wallets (MetaMask, Ledger, Trezor), Chainlink oracles, and cross-chain bridges to ensure a complete dApp ecosystem.",
    "Gas-optimized contract logic using advanced compiler-level techniques to reduce fees without compromising performance or security.",
    "Support for zero-knowledge-based privacy contracts, off-chain computation (via oracles), and cross-chain interoperability."
  ],

  features: [
    {
      title: "DeFi Protocols",
      description: "Custom DEXs, lending platforms, and yield farming contracts"
    },
    {
      title: "NFT Ecosystems",
      description: "ERC-721A/1155 contracts with advanced minting and royalty features"
    },
    {
      title: "DAO Frameworks",
      description: "Governance systems with voting, treasury management, and proposals"
    },
    {
      title: "Oracles Integration",
      description: "Secure data feeds from Chainlink, Band, and custom oracle networks"
    },
    {
      title: "Multi-sig Wallets",
      description: "Customizable multi-signature solutions for institutional security"
    },
    {
      title: "Upgradeable Contracts",
      description: "Proxy patterns for future-proof, modifiable logic"
    },
    {
      title: "Token Standards",
      description: "ERC-20, SPL, BEP-20 with custom tax/burn/reward mechanisms"
    },
    {
      title: "ZK-SNARKs Circuits",
      description: "Privacy-preserving smart contracts with zero-knowledge proofs"
    }
  ],

  "benefits": [
    "Eliminate intermediaries with autonomous, trustless execution",
    "Deploy secure financial instruments and governance systems",
    "Enable user-owned economies via NFTs, DAOs, and tokens",
    "Ensure transparency and immutability for business logic",
    "Build once, deploy across multiple chains with composability",
    "Reduce operational and compliance risk through auditable code"
  ],

  "caseStudies": [
    "Engineered a DeFi protocol that processed $450M in transactions within its first 30 days post-launch",
    "Built an NFT minting system handling 10,000+ daily mints with on-chain royalties and reveal mechanics",
    "Developed a DAO governance framework powering on-chain voting for a 50,000+ member Web3 community",
    "Delivered a smart contract suite for a real estate tokenization platform with investor protections and compliance hooks"
  ],

  "technologies": [
    "Solidity, Rust, Vyper",
    "Hardhat, Foundry, Truffle",
    "OpenZeppelin SDK & libraries",
    "Chainlink, Gelato, The Graph",
    "Ether.js, Web3.js, Wagmi, Viem",
    "Polygon, Optimism, Arbitrum, Solana"
  ],

  whyAictum: [
    {
      title: "Security First",
      description: "300+ vulnerability checks and formal verification using Certora"
    },
    {
      title: "Full Audit Trail",
      description: "Comprehensive reports with MythX, Slither, and manual review"
    },
    {
      title: "Cross-chain Experts",
      description: "EVM, Solana, Cosmos, and Polkadot development experience"
    },
    {
      title: "Gas Optimization",
      description: "30-70% gas reduction techniques through advanced coding patterns"
    },
    {
      title: "Legal Compliance",
      description: "Regulatory-friendly architectures for enterprise adoption"
    },
    {
      title: "Post-deployment Support",
      description: "Monitoring, incident response, and version upgrade services"
    }
  ],

  "futureReady": [
    "Building modular smart contract frameworks for cross-chain deployments",
    "Exploring zk-rollup integrations for private and scalable dApps",
    "Researching account abstraction (ERC-4337) to simplify UX and onboarding",
    "Developing autonomous agent protocols for DAO-native automation",
    "Partnering with audit firms to co-develop new security standards for complex dApps"
  ]
},
  "Decentralized Applications (dApps)": {
  "title": "Decentralized Applications (dApps)",
  "description": "Designing scalable, intuitive, and secure decentralized applications that blend Web3 functionality with modern UX, empowering users to interact directly with blockchain networks.",

  "images": [
    "/images/services/dapps.jpg",
  ],

  "content": [
    "Full-stack dApp development using modern frontend frameworks like React, Next.js, and Vue with seamless integration into Ethereum, Polygon, Solana, and other blockchain networks.",
    "On-chain/off-chain hybrid architecture leveraging cloud functions, subgraphs, and indexers to ensure fast load times, scalability, and data availability.",
    "Integrated wallet login using MetaMask, WalletConnect, and embedded wallets for a smooth, non-custodial onboarding experience.",
    "Support for decentralized identity (DID) protocols, smart contract permissions, and encrypted user data for Web3-native privacy and access control.",
    "Cross-chain support with token bridges, relayers, and interoperability standards enabling users to transact across chains with ease.",
    "UI/UX design that abstracts blockchain complexity, delivering intuitive experiences for crypto-native and Web2-first users alike."
  ],

  features: [
    {
      title: "DeFi Dashboards",
      description: "Interactive interfaces for trading, staking, and yield optimization"
    },
    {
      title: "NFT Marketplaces",
      description: "White-label platforms with auctions, bundles, and royalty management"
    },
    {
      title: "GameFi Integration",
      description: "Play-to-earn mechanics with in-game asset tokenization"
    },
    {
      title: "DAO Management",
      description: "Complete governance interfaces with proposal systems and voting"
    },
    {
      title: "Wallet Connectivity",
      description: "Multi-wallet support (MetaMask, WalletConnect, Phantom)"
    },
    {
      title: "Web3 Social",
      description: "Decentralized social platforms with tokenized content"
    },
    {
      title: "Data Indexing",
      description: "Optimized blockchain data queries using The Graph protocol"
    },
    {
      title: "Hybrid dApps",
      description: "Combine on-chain logic with off-chain computation"
    }
  ],

  "benefits": [
    "Launch user-owned platforms with censorship resistance",
    "Enable tokenized engagement models and crypto rewards",
    "Expand to global crypto audiences with built-in wallet access",
    "Ensure transparency and auditability through on-chain data",
    "Eliminate reliance on centralized infrastructure for key functionality"
  ],

  "caseStudies": [
    "Developed a DeFi dashboard with real-time APY tracking and 50,000+ monthly active users",
    "Built a play-to-earn game ecosystem handling over 1 million NFT transactions in the first 3 months",
    "Created a DAO governance portal with on-chain proposal creation, voting, and treasury visibility tailored for non-technical contributors"
  ],

  "technologies": [
    "React, Next.js, Vue, Tailwind",
    "Ethers.js, Web3.js, Wagmi, Viem",
    "The Graph, Subgraph development",
    "IPFS, Filecoin, Arweave",
    "WalletConnect, Web3Modal, RainbowKit",
    "Polygon, Ethereum, Solana, Optimism"
  ],

   whyAictum: [
    {
      title: "UX Specialists",
      description: "Web3-native designers who prioritize user experience"
    },
    {
      title: "Gas Optimization",
      description: "Reduce user transaction costs by 40-60%"
    },
    {
      title: "Security Audits",
      description: "Smart contract audits + frontend penetration testing"
    },
    {
      title: "Cross-chain Ready",
      description: "Build once, deploy to EVM, Cosmos, and Solana ecosystems"
    },
    {
      title: "Proven Frameworks",
      description: "Reusable components that accelerate development"
    },
    {
      title: "24/7 Monitoring",
      description: "Real-time alerts for smart contract events and anomalies"
    }
  ],
  "futureReady": [
    "Integrating account abstraction (ERC-4337) for walletless onboarding",
    "Building zk-enabled privacy layers into public dApps",
    "Designing universal UI components for modular blockchain apps",
    "Exploring decentralized social protocols and Web3 native identity",
    "Optimizing for L2 and appchain environments with minimal latency"
  ]
},
  "NFT Marketplaces & Tokenization": {
  "title": "NFT Marketplaces & Tokenization",
  "description": "Launch robust NFT platforms and tokenize digital or physical assets with smart contracts tailored for scalability, royalties, and user-centric trading experiences.",

  "images": [
    "/images/services/nft.jpg",
  ],

  "content": [
    "End-to-end NFT minting, listing, and trading infrastructure using ERC-721, ERC-1155, and ERC-721A standards with fixed price, auction, and Dutch auction sales.",
    "Custom royalty logic built into contracts with on-chain enforcement for creators across primary and secondary markets.",
    "Support for decentralized storage (IPFS, Arweave) and metadata hosting to ensure permanence, authenticity, and censorship resistance.",
    "White-label marketplace platforms with flexible theming, integrations, and modular features for rapid launch and brand consistency.",
    "Asset tokenization bridges that bring real-world value (e.g., real estate, collectibles) onto the blockchain via compliance-ready smart contracts.",
    "On-chain trait filtering, rarity scoring, and activity feeds for discoverability and community engagement."
  ],

  "features": [
    {
      title: "NFT Minting",
      description: "Custom minting flows with gas optimization and batch minting"
    },
    {
      title: "Marketplace Functionality",
      description: "Listing, bidding, and trading with real-time updates"
    },
    {
      title: "Royalty Management",
      description: "On-chain royalty distribution for creators"
    },
    {
      title: "Tokenization Frameworks",
      description: "Real-world asset tokenization with compliance checks"
    },
    {
      title: "Cross-chain Support",
      description: "Bridging NFTs across Ethereum, Solana, and Polygon"
    },
    {
      title: "Community Tools",
      description: "Social features like comments, likes, and shares"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time sales data, user activity, and market trends"
    },
    {
      title: "Gas Optimization",
      description: "Reduce minting costs by up to 50% with advanced patterns"
    }
  ],

  "benefits": [
    "Monetize digital art, content, and assets with ease",
    "Enable fractional ownership for illiquid high-value assets",
    "Build creator-owned economies and fan-powered platforms",
    "Verify asset authenticity and provenance immutably",
    "Automate royalty flows and reduce middlemen dependence"
  ],

  "caseStudies": [
    "Built an NFT marketplace for a global sports league handling over 250,000 transactions in Q1",
    "Tokenized $25M in commercial real estate assets enabling retail investor access",
    "Launched a generative art engine that sold out 10,000 NFTs in under 10 minutes"
  ],

  "technologies": [
    "ERC-721, ERC-721A, ERC-1155",
    "OpenSea APIs, Reservoir, Manifold",
    "Chainlink VRF for provable randomness",
    "IPFS, Arweave, NFT.Storage",
    "ZK-proofs for private or gated sales",
    "Alchemy, Moralis, Pinata integrations"
  ],

  whyAictum: [
    {
      title: "Tokenization Experts",
      description: "200+ NFT projects launched across 12 industries"
    },
    {
      title: "Gas Optimization",
      description: "60-80% lower minting costs compared to standard contracts"
    },
    {
      title: "Legal Compliance",
      description: "KYC/AML integration for regulated token offerings"
    },
    {
      title: "Multi-chain Deploy",
      description: "One-click deployment to Ethereum, Polygon, BSC, and Solana"
    },
    {
      title: "White-label Solution",
      description: "Fully customizable UI with your brand identity"
    },
    {
      title: "End-to-end Security",
      description: "Smart contract audits + frontend penetration testing"
    }
  ],
  "futureReady": [
    "ERC-6551 (token-bound accounts) and dynamic NFTs for evolving use cases",
    "Bringing NFTs to social protocols and metaverse platforms",
    "Layer-2 minting strategies for low-fee, high-speed NFT issuance",
    "Cross-chain NFT bridging and liquidity aggregation",
    "Real-world asset (RWA) tokenization with regulatory compliance"
  ]
},
 "Blockchain Consulting & Strategy": {
  "title": "Blockchain Consulting & Strategy",
  "description": "Strategic advisory to unlock blockchain’s business potential—designing scalable, compliant, and high-impact solutions with actionable implementation roadmaps.",

  "images": [
    "/images/services/bcc.jpg",
  ],

  "content": [
    "Feasibility assessments and market validation studies to identify whether and where blockchain adds measurable value.",
    "Tokenomics architecture covering supply dynamics, utility mechanisms, governance rights, and economic sustainability.",
    "Go-to-market and product advisory for DeFi protocols, DAO frameworks, and NFT platforms from ideation through to launch.",
    "Regulatory and compliance advisory for global jurisdictions including AML/KYC strategies, security token considerations, and IP protection.",
    "Enterprise blockchain strategy including integrations with ERP/CRM, legacy systems, and permissioned blockchain networks."
  ],

  "features": [
    {
      title: "Competitive Analysis",
      description: "In-depth market research to identify opportunities and threats"
    },
    {
      title: "Token Valuation",
      description: "Comprehensive models to assess token worth and potential"
    },
    {
      title: "Investor Support",
      description: "Crafting compelling narratives for pitches and presentations"
    },
    {
      title: "Go-to-Market Strategy",
      description: "Tailored plans to ensure successful product launches"
    },
    {
      title: "Compliance Frameworks",
      description: "Mapping regulatory requirements across jurisdictions"
    },
    {
      title: "Market Entry Strategy",
      description: "Comprehensive plans for launching in new regions"
    },
    {
      title: "Risk Assessment",
      description: "Identifying and mitigating technical and business risks"
    },
    {
      title: "Training & Workshops",
      description: "Hands-on sessions to upskill teams on blockchain fundamentals"
    },
    {
      title: "Architecture Review",
      description: "Evaluating existing blockchain solutions for scalability and security"
    }
  ],

  "benefits": [
    "Accelerate time-to-market with validated strategies",
    "Avoid costly architectural and regulatory pitfalls",
    "Design long-term viable token and governance models",
    "Gain investor readiness and stakeholder alignment",
    "Bridge technical execution with business impact"
  ],

  "caseStudies": [
    "Guided a Fortune 500 firm through a $50M blockchain transformation saving 9+ months in development and compliance delays",
    "Designed tokenomics for a DeFi protocol that secured $30M in early-stage VC funding",
    "Built a regulatory framework later adopted as best practice across 3 international jurisdictions"
  ],

  "technologies": [
    "Tokenomics simulation tools (e.g., TokenSpice, Dune dashboards)",
    "Legal and regulatory research platforms",
    "Blockchain architecture frameworks (e.g., TOGAF for Web3)",
    "Smart contract audit and risk checklists",
    "Financial modeling tools (Excel/Sheets + crypto-specific plugins)"
  ],

  whyAictum: [
    {
      title: "Blockchain Strategists",
      description: "Team with 10+ years of combined blockchain consulting experience"
    },
    {
      title: "Cross-industry Expertise",
      description: "Worked with fintech, healthcare, supply chain, and gaming sectors"
    },
    {
      title: "Regulatory Specialists",
      description: "In-house legal advisors for compliance across 20+ jurisdictions"
    },
    {
      title: "Data-driven Insights",
      description: "Leverage analytics to inform strategy and execution"
    },
    {
      title: "Agile Methodology",
      description: "Iterative approach ensuring alignment with business goals"
    },
    {
      title: "Long-term Partnerships",
      description: "Focus on building sustainable, scalable blockchain solutions"
    }
  ],

  "futureReady": [
    "DAOs-as-a-Service models for next-gen organizations",
    "Tokenized incentive systems aligned with real-world KPIs",
    "Modular compliance layers for cross-jurisdiction launches",
    "Blockchain-native governance structures for enterprises",
    "AI + blockchain intersections in automation and auditability"
  ]
},

  // ✅ Product Development
 "Full-stack application development": {
  "title": "Full-stack Application Development",
  "description": "End-to-end software engineering—from pixel-perfect UIs to cloud-native backends—built with scalable architectures, secure practices, and modern developer workflows.",

  "images": [
    "/images/services/fsdev.jpg",
  ],

  "content": [
    "Frontend engineering with React, Next.js, and Vue using TypeScript and component-driven development.",
    "Mobile-first apps with Flutter and React Native—targeting Android, iOS, and web from a unified codebase.",
    "Robust backend APIs using Node.js, NestJS, Golang, and Python (FastAPI, Django) with REST, GraphQL, and gRPC support.",
    "Cloud-native deployment patterns using containers, Kubernetes, and CI/CD pipelines for continuous delivery.",
    "Microservice, monorepo, and event-driven architectures tailored to business scale and engineering velocity."
  ],

  features: [
    {
      title: "Frontend Development",
      description: "React, Angular, or Vue.js with TypeScript and state management"
    },
    {
      title: "Backend Systems",
      description: "Node.js, Django, or Spring Boot with REST/GraphQL APIs"
    },
    {
      title: "Database Solutions",
      description: "SQL (PostgreSQL), NoSQL (MongoDB), and caching layers"
    },
    {
      title: "Cloud Deployment",
      description: "AWS, Azure, or GCP with containerization (Docker/Kubernetes)"
    },
    {
      title: "Mobile Integration",
      description: "React Native or Flutter for cross-platform mobile apps"
    },
    {
      title: "Real-time Features",
      description: "WebSockets, Server-Sent Events, and Firebase integration"
    },
    {
      title: "Testing Suite",
      description: "Unit, integration, and E2E testing (Jest, Cypress, Selenium)"
    },
    {
      title: "DevOps Automation",
      description: "GitHub Actions, CircleCI, and infrastructure-as-code"
    },
    {
      title: "Security Practices",
      description: "OWASP compliance, data encryption, and secure coding standards"
    }
  ],

  "benefits": [
    "Accelerated development with pre-vetted modern stacks",
    "Improved maintainability via modular clean architecture",
    "Reduced tech debt with typed and tested codebases",
    "Enterprise-grade scalability and observability baked-in",
    "Technology choices aligned with long-term growth"
  ],

  "caseStudies": [
    "Engineered a SaaS platform handling over 1 million daily API calls with 99.99% uptime SLA",
    "Built a secure healthtech system managing 500,000+ patient records with HIPAA-compliant design",
    "Developed a real-time team collaboration suite adopted by 50,000+ global teams"
  ],

  "technologies": [
    "React 18, Next.js 13, Vue 3",
    "Node.js 18, NestJS, Golang, FastAPI",
    "PostgreSQL, MongoDB, Redis",
    "Docker, Kubernetes, GitHub Actions",
    "AWS (Lambda, ECS, RDS), GCP (Cloud Run, Firebase), Azure"
  ],

  whyAictum: [
    {
      title: "Full-stack Expertise",
      description: "10+ years building complex, scalable applications across industries"
    },
    {
      title: "Agile Methodology",
      description: "Iterative development with continuous feedback loops"
    },
    {
      title: "DevOps Culture",
      description: "Integrated CI/CD pipelines for rapid delivery and iteration"
    },
    {
      title: "Security First",
      description: "Built-in security practices from day one"
    },
    {
      title: "Cross-functional Teams",
      description: "Design, engineering, and DevOps working in sync"
    },
    {
      title: "Long-term Partnerships",
      description: "Focus on sustainable, maintainable solutions"
    }
  ],
  "futureReady": [
    "AI-assisted user interfaces and API integrations",
    "Modular monorepo support for product suites",
    "Edge computing and CDN-native deployment options",
    "Observability with OpenTelemetry and distributed tracing",
    "Green computing optimization for low-energy deployments"
  ]
},
   "UX/UI Design": {
  "title": "UX/UI Design",
  "description": "Designing elegant, intuitive, and conversion-optimized user interfaces backed by user research, design systems, and modern interaction patterns.",

  "images": [
    "/images/services/ui-ux.jpg"
  ],

  "content": [
    "End-to-end UX process from research and persona mapping to high-fidelity UI design and developer-ready handoff.",
    "Interactive wireframes, low- and high-fidelity prototypes using Figma, Adobe XD, and Framer for rapid ideation and validation.",
    "Modular design systems with tokens, grids, components, and accessibility standards (WCAG 2.1 AA).",
    "Motion design and micro-interactions that guide users and enhance perceived performance.",
    "Usability testing, A/B experimentation, and continuous improvement via analytics and qualitative feedback."
  ],

  "features": [
    {
      title: "User Research",
      description: "Qualitative and quantitative studies to inform design decisions"
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes for user testing and stakeholder feedback"
    },
    {
      title: "Design Systems",
      description: "Reusable components and style guides for brand consistency"
    },
    {
      title: "Accessibility",
      description: "Inclusive design practices ensuring WCAG compliance"
    },
    {
      title: "Responsive Design",
      description: "Adaptive layouts for mobile, tablet, and desktop experiences"
    },
    {
      title: "Visual Design",
      description: "High-fidelity mockups with pixel-perfect attention to detail"
    },
    {
      title: "User Testing",
      description: "Iterative testing with real users to validate designs"
    },
    {
      title: "Analytics Integration",
      description: "Data-driven design improvements based on user behavior"
    }
  ],

  "benefits": [
    "Boost conversions and engagement through optimized UX flows",
    "Cut onboarding friction and bounce rates",
    "Ensure brand consistency at scale with design systems",
    "Reduce dev cycles through clean and organized handoffs",
    "Deliver inclusive experiences to all user groups"
  ],

  "caseStudies": [
    "Redesigned an e-commerce platform resulting in a 28% increase in checkout conversion",
    "Developed a multi-brand design system saving 300+ dev hours per year",
    "Revamped a B2B SaaS UI that improved usability scores from 3.2 to 4.7/5"
  ],

  "technologies": [
    "Figma, Sketch, Adobe XD",
    "Framer, ProtoPie, Principle",
    "Hotjar, FullStory, Maze",
    "UserTesting.com, Lookback",
    "Storybook, Zeroheight, Zeplin"
  ],

  whyAictum: [
    {
      title: "User-Centric Design",
      description: "Empathy-driven approach with real user insights"
    },
    {
      title: "Cross-functional Collaboration",
      description: "Designers working closely with developers and product teams"
    },
    {
      title: "Agile Process",
      description: "Iterative design sprints aligned with development cycles"
    },
    {
      title: "Accessibility Focus",
      description: "Inclusive design practices from the ground up"
    },
    {
      title: "Data-Driven Decisions",
      description: "Continuous improvement based on user analytics"
    },
    {
      title: "Scalable Solutions",
      description: "Design systems that grow with your product"
    }
  ],

  "futureReady": [
    "Design for AI assistants and voice interfaces",
    "Adaptive layouts using container queries",
    "3D, spatial, and AR interface readiness",
    "Accessibility-first theming and testing",
    "Design ops tooling for cross-team scaling"
  ]
},
 "Mobile & Web Application Development": {
  "title": "Mobile & Web Application Development",
  "description": "Build high-performance, scalable mobile and web applications with native capabilities and modern UI/UX—delivered faster with cross-platform frameworks and seamless backend integration.",

  "images": [
    "/images/services/mwad.jpg"
  ],

  "content": [
    "Native app development for iOS (Swift, SwiftUI) and Android (Kotlin, Jetpack Compose) with full hardware access and platform-specific design patterns.",
    "Cross-platform mobile development using Flutter and React Native enabling 90%+ code reuse with native performance benchmarks.",
    "Progressive Web App (PWA) experiences with offline capabilities, install prompts, and background sync via Service Workers.",
    "Backend services built with Firebase, Supabase, or custom APIs (Node.js, FastAPI) integrated with cloud functions, push notifications, and auth.",
    "Full-cycle DevOps and app store support including CI/CD pipelines, ASO, app signing, and release automation."
  ],

  "features": [
    {
      title: "Native Mobile Apps",
      description: "SwiftUI for iOS, Jetpack Compose for Android with full device access"
    },
    {
      title: "Cross-platform Frameworks",
      description: "Flutter and React Native for shared codebases"
    },
    {
      title: "Progressive Web Apps",
      description: "Offline-first, installable web experiences"
    },
    {
      title: "Backend Integration",
      description: "Firebase, Supabase, or custom REST/GraphQL APIs"
    },
    {
      title: "CI/CD Automation",
      description: "Fastlane, App Center, Bitrise for streamlined releases"
    },
    {
      title: "Push Notifications",
      description: "Real-time updates via Firebase Cloud Messaging or APNs"
    },
    {
      title: "App Store Optimization",
      description: "ASO strategies to improve visibility and downloads"
    },
    {
      title: "Security Best Practices",
      description: "Data encryption, secure storage, and authentication"
    },
    {
      title: "Analytics Integration",
      description: "Firebase Analytics, Mixpanel, or Amplitude for user insights"
    }
  ],
  "benefits": [
    "Launch faster with cross-platform efficiency",
    "Cut dev and maintenance costs with shared codebases",
    "Reach users across mobile, desktop, and web from one stack",
    "Tap into full device capabilities (camera, sensors, GPS)",
    "Deploy frictionless updates via cloud and over-the-air delivery"
  ],

  "caseStudies": [
    "Launched a HIPAA-compliant healthcare app with 500K+ downloads and 4.8⭐ App Store rating",
    "Developed a mission-critical field ops app used by 10K+ logistics workers across devices",
    "Delivered a PWA for retail that cut bounce rate by 40% and boosted session time by 2.3x"
  ],

  "technologies": [
    "Flutter 3, React Native",
    "SwiftUI, Jetpack Compose",
    "Workbox, Capacitor, Service Workers",
    "Firebase, Supabase, AWS Amplify",
    "Fastlane, App Center, Bitrise"
  ],

  "whyAictum": [
    {
      title: "Cross-Platform Expertise",
      description: "Deep knowledge of both native and cross-platform frameworks"
    },
    {
      title: "Full Lifecycle Support",
      description: "From ideation to deployment, we’ve got you covered"
    },
    {
      title: "DevOps Integration",
      description: "Seamless CI/CD pipelines for faster time-to-market"
    },
    {
      title: "User-Centric Design",
      description: "Focus on user experience and engagement metrics"
    },
    {
      title: "Regulated Industry Experience",
      description: "Proven track record in healthcare, fintech, and more"
    }
  ],

  "futureReady": [
    "Wearable and IoT device support",
    "Edge-deployed ML models and inference",
    "App Clips and Instant Apps for lightweight UX",
    "5G optimization and low-latency streaming",
    "Modular codebases for scale and team velocity"
  ]
},
  "Cloud Infrastructure & Scalability": {
  "title": "Cloud Infrastructure & Scalability",
  "description": "Design and operate cloud-native infrastructure that’s secure, scalable, and cost-optimized—engineered for resilience, performance, and rapid deployment across AWS, GCP, and Azure.",

  "images": [
    "/images/services/cis.jpg"
  ],

  "content": [
    "Multi-cloud and hybrid cloud deployments using Terraform and Pulumi for robust Infrastructure as Code (IaC) workflows.",
    "Containerized workloads orchestrated with Kubernetes (EKS, GKE, AKS) using GitOps pipelines, service mesh (Istio, Linkerd), and policy-as-code enforcement.",
    "Fully managed serverless architectures (Lambda, Cloud Functions, Azure Functions) and edge compute for event-driven scalability.",
    "High-availability (HA) and disaster recovery (DR) strategies with geo-redundancy, snapshot automation, and failover orchestration.",
    "Cloud cost governance via FinOps practices including budget alerts, usage heatmaps, reserved instance planning, and continuous cost audits."
  ],

  "features": [
    {
      title: "Infrastructure as Code",
      description: "Terraform, Pulumi, or AWS CDK for reproducible deployments"
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes with GitOps workflows (ArgoCD, Flux)"
    },
    {
      title: "Serverless Architectures",
      description: "AWS Lambda, GCP Cloud Functions, Azure Functions"
    },
    {
      title: "Monitoring & Observability",
      description: "Prometheus, Grafana, ELK stack for real-time insights"
    },
    {
      title: "Security & Compliance",
      description: "Automated vulnerability scanning and compliance checks"
    },
    {
      title: "Cost Optimization",
      description: "FinOps practices to reduce cloud spend by up to 60%"
    },
    {
      title: "Disaster Recovery",
      description: "Automated backups, failover strategies, and geo-redundancy"
    },
    {
      title: "Network Design",
      description: "VPCs, subnets, security groups, and private connectivity"
    },
    {
      title: "Identity & Access Management",
      description: "IAM policies, role-based access control, and SSO integration"
    }
  ],
  "benefits": [
    "Scale to meet global demand with 99.99%+ uptime",
    "Reduce cloud spend by up to 60% via automation",
    "Accelerate releases with GitOps and IaC pipelines",
    "Maintain compliance with evolving security standards",
    "Gain full visibility across multi-cloud environments"
  ],

  "caseStudies": [
    "Lifted and shifted legacy system to AWS, saving $250K annually in infrastructure and licensing costs",
    "Scaled retail cloud infrastructure to handle 500% Black Friday traffic surge with zero downtime",
    "Implemented HIPAA and GDPR-compliant cloud architecture for a healthtech client in under 6 weeks"
  ],

  "technologies": [
    "Terraform, Pulumi, AWS CDK",
    "EKS, GKE, AKS, Nomad",
    "Prometheus, Grafana, Loki, ELK",
    "AWS Well-Architected Framework, Google Cloud Architecture Center",
    "Kubecost, CloudHealth, Spot.io"
  ],

  whyAictum: [
    {
      title: "Cloud-Native Experts",
      description: "10+ years of experience architecting scalable cloud solutions"
    },
    {
      title: "Multi-Cloud Proficiency",
      description: "AWS, GCP, Azure, and hybrid cloud strategies"
    },
    {
      title: "Security First",
      description: "Built-in security practices from day one"
    },
    {
      title: "Cost Optimization Focus",
      description: "Proven track record of reducing cloud spend by 30-60%"
    },
    {
      title: "Agile DevOps Culture",
      description: "Integrated CI/CD pipelines for rapid delivery"
    }
  ],

  "futureReady": [
    "Edge-native compute with AWS CloudFront Functions & Cloudflare Workers",
    "AI workload optimization (GPU orchestration, autoscaling inference)",
    "Policy-as-code with OPA and Kyverno",
    "Carbon-aware workload scheduling",
    "Immutable infrastructure & GitOps-first workflows"
  ]
},
  // ✅ Technical Consulting
 "Technology assessment and strategy": {
  "title": "Technology Assessment and Strategy",
  "description": "Uncover technical inefficiencies, reduce risk, and align your technology landscape with long-term business objectives through comprehensive assessments and strategic roadmapping.",

  "images": [
    "/images/services/tas.jpg"
  ],

  "content": [
    "End-to-end technology audits covering architecture, scalability, security posture, code health, and system interoperability.",
    "Strategic transformation roadmaps with clear ROI projections, capability gaps, and phased modernization plans.",
    "Objective build-vs-buy analysis and vendor selection frameworks based on cost, flexibility, and long-term fit.",
    "Benchmarking of current tech stack against industry standards and competitor ecosystems to identify gaps and opportunities.",
    "Innovation discovery workshops focused on next-gen tech adoption including AI, Blockchain, Edge, and IoT."
  ],

  "features": [
    {
      title: "Architecture Review",
      description: "In-depth analysis of system design, scalability, and performance"
    },
    {
      title: "Code Quality Assessment",
      description: "Static code analysis, technical debt evaluation, and maintainability scoring"
    },
    {
      title: "Security Posture Review",
      description: "Vulnerability scanning, compliance checks, and risk assessment"
    },
    {
      title: "Vendor Due Diligence",
      description: "Objective evaluation of third-party solutions and partnerships"
    },
    {
      title: "Technology Benchmarking",
      description: "Comparative analysis against industry standards and best practices"
    },
    {
      title: "Innovation Workshops",
      description: "Collaborative sessions to explore emerging technologies"
    },
    {
      title: "Capability Gap Analysis",
      description: "Identifying skill and technology gaps in current teams"
    },
    {
      title: "Transformation Roadmap",
      description: "Phased plan with milestones for modernization initiatives"
    },
    {
      title: "Risk Mitigation Strategy",
      description: "Structured approach to reduce technical and operational risks"
    }
  ],

  "benefits": [
    "Unlock 20–40% in IT cost savings with smarter architecture choices",
    "Reduce technical debt by 50%+ to streamline future development",
    "Ensure every tech investment aligns with revenue and product goals",
    "Mitigate risk through structured due diligence and audits",
    "Accelerate innovation with future-proof technology choices"
  ],

  "caseStudies": [
    "Delivered $1.2M in cost savings for global enterprise through multi-phase cloud migration plan",
    "Improved uptime by 80% after uncovering system bottlenecks in legacy architecture",
    "Helped SaaS client avoid $600K misinvestment via vendor due diligence and tech roadmap alignment"
  ],

  "technologies": [
    "SonarQube, CodeClimate (code analysis)",
    "AWS Well-Architected Tool, Azure Advisor (cloud best practices)",
    "Gartner Magic Quadrant, G2 Grid (vendor research)",
    "TOGAF, Zachman (enterprise architecture frameworks)",
    "Business Model Canvas, Lean Canvas (strategy modeling)"
  ],

  "whyAictum": [
    {
      title: "Objective Assessments",
      description: "Data-driven insights free from vendor bias"
    },
    {
      title: "Cross-Industry Expertise",
      description: "Experience across finance, healthcare, logistics, and more"
    },
    {
      title: "Actionable Roadmaps",
      description: "Clear, phased plans with measurable outcomes"
    },
    {
      title: "Innovation Focus",
      description: "Proven track record of driving digital transformation"
    },
    {
      title: "Long-term Partnerships",
      description: "We grow with you, adapting to changing business needs"
    },
    {
      title: "Agile Methodology",
      description: "Iterative approach ensuring alignment with business goals"
    }
  ],
  "futureReady": [
    "AI-readiness assessments for data infrastructure and MLOps",
    "Sustainable tech strategy including carbon-aware computing",
    "Composable architecture strategies for faster innovation",
    "Edge and hybrid-cloud strategy planning",
    "Regulatory readiness for fast-moving sectors (fintech, healthtech)"
  ]
},
  "Architecture design & integration": {
  "title": "Architecture Design & Integration",
  "description": "Architect and integrate scalable, resilient systems that support rapid innovation, operational efficiency, and seamless ecosystem connectivity.",

  "images": [
    "/images/services/adi.jpg",

  ],

  "content": [
    "Microservices architecture design with domain-driven decomposition and service boundary definition.",
    "Event-driven patterns leveraging Kafka, RabbitMQ, NATS, and AWS EventBridge for asynchronous communication.",
    "Legacy modernization using strangler pattern, API facades, and anti-corruption layers.",
    "Data mesh and federated architecture enabling decentralized ownership and scalability in data systems.",
    "Enterprise integration architecture for CRM, ERP, HCM, and third-party SaaS platforms using canonical models and message brokers."
  ],

  "features": [
    {
      title: "Microservices Design",
      description: "Domain-driven design with bounded contexts and service granularity"
    },
    {
      title: "Event-Driven Architecture",
      description: "Asynchronous messaging patterns for decoupled systems"
    },
    {
      title: "Legacy Modernization",
      description: "Strangler pattern and API facades for gradual migration"
    },
    {
      title: "Data Mesh Strategy",
      description: "Decentralized data ownership and federated governance"
    },
    {
      title: "Integration Patterns",
      description: "Canonical models, message brokers, and API gateways"
    },
    {
      title: "Resiliency Design",
      description: "Circuit breakers, bulkheads, and retry patterns"
    },
    {
      title: "Scalability Planning",
      description: "Horizontal scaling strategies and load balancing"
    },
    {
      title: "Security Architecture",
      description: "Zero-trust principles, encryption, and access control"
    }
  ],

  "benefits": [
    "Scale to 10x workloads without re-architecture",
    "Reduce integration development time by 40–60%",
    "Achieve 99.95%+ system uptime with built-in resiliency",
    "Shorten feature release cycles by 30%",
    "Simplify complexity across heterogeneous systems"
  ],

  "caseStudies": [
    "Designed scalable architecture processing 50K TPS for global fintech startup",
    "Re-architected monolithic mainframe systems reducing OPEX by $800K annually",
    "Delivered unified integration layer connecting 15+ healthcare and clinical platforms"
  ],

  "technologies": [
    "C4 Model, ArchiMate (architecture visualization)",
    "Kafka, NATS, RabbitMQ (event streaming)",
    "GraphQL Federation, REST, gRPC (API strategies)",
    "Apache Camel, MuleSoft, Boomi (integration platforms)",
    "AWS EventBridge, Azure Service Bus, Google Pub/Sub"
  ],

  "whyAictum": [
    {
      title: "Architecture Specialists",
      description: "10+ years designing complex, scalable systems"
    },
    {
      title: "Cross-Industry Experience",
      description: "Worked with fintech, healthcare, logistics, and more"
    },
    {
      title: "Agile Methodology",
      description: "Iterative design ensuring alignment with business goals"
    },
    {
      title: "Security First",
      description: "Built-in security practices from day one"
    },
    {
      title: "Long-term Partnerships",
      description: "Focus on sustainable, maintainable solutions"
    },
    {
      title: "Innovation Focus",
      description: "Proven track record of driving digital transformation"
    }
  ],

  "futureReady": [
    "Composable architecture principles for dynamic system design",
    "Cloud-native and hybrid integration with edge support",
    "AI-ready pipelines and real-time event streaming design",
    "Zero-trust integration design for secure data movement",
    "Sustainability-focused patterns minimizing tech debt"
  ]
},

 "Performance optimization": {
  "title": "Performance Optimization",
  "description": "Maximize application efficiency, scalability, and responsiveness through end-to-end performance tuning, diagnostics, and optimization strategies.",

  "images": [
    "/images/services/po.jpg"
  ],

  "content": [
    "Advanced database performance tuning including query refactoring, indexing strategies, and execution plan analysis.",
    "Frontend performance optimization with lazy loading, asset compression, and render pipeline analysis.",
    "API acceleration through response caching, connection pooling, asynchronous processing, and gRPC optimization.",
    "Infrastructure optimization via auto-scaling policies, right-sizing of compute resources, and CDN edge delivery.",
    "Full-stack observability using distributed tracing, APM tools, and real-user monitoring (RUM) to identify bottlenecks."
  ],

  "features": [
    {
      title: "Synthetic Load Testing",
      description: "Simulate user traffic to identify performance bottlenecks"
    },
    {
      title: "Real User Monitoring",
      description: "Capture and analyze real user interactions for insights"
    },
    {
      title: "Performance Audits",
      description: "Comprehensive assessments against industry benchmarks"
    },
    {
      title: "Custom Dashboards",
      description: "Tailored views for monitoring key performance metrics"
    },
    {
      title: "API Performance Testing",
      description: "Load testing and optimization for REST and GraphQL APIs"
    },
    {
      title: "Infrastructure Performance Testing",
      description: "Load testing and optimization for infrastructure components"
    },
    {
      title: "End-to-End Testing",
      description: "Comprehensive testing across the entire application stack"
    },
    {
      title: "Continuous Performance Monitoring",
      description: "Automated alerts and dashboards for ongoing performance health"
    },
    {
      title: "Performance Benchmarking",
      description: "Comparative analysis against industry standards and best practices"
    },
    
  ],

  "benefits": [
    "Boost user engagement with up to 80% faster page loads",
    "Handle 3–5x traffic surges without downtime",
    "Reduce infrastructure spend by 30–60%",
    "Increase SEO scores via Core Web Vitals compliance",
    "Identify and eliminate costly performance bottlenecks"
  ],

  "caseStudies": [
    "Reduced average API latency from 2.1s to under 200ms for logistics platform",
    "Cut monthly cloud costs by $45K through workload right-sizing and caching layers",
    "Improved Lighthouse scores from 35 to 92, enhancing search visibility and UX"
  ],

  "technologies": [
    "New Relic, Datadog, Dynatrace",
    "k6, JMeter, Gatling",
    "Chrome DevTools, Lighthouse, WebPageTest",
    "Redis, Memcached, Varnish",
    "OpenTelemetry, Jaeger, Zipkin"
  ],

  "whyAictum": [
    {
      title: "Expertise",
      description: "Full-stack performance engineers with deep cloud and systems expertise"
    },
    {
      title: "Proven Success",
      description: "Proven success across high-traffic B2B and B2C platforms"
    },
    {
      title: "Tool-Agnostic Approach",
      description: "Tool-agnostic approach tailored to tech stack and business KPIs"
    },
    {
      title: "Transparency",
      description: "Transparent benchmarking and results reporting"
    },
    {
      title: "Long-term Partnerships",
      description: "Focus on sustainable performance improvements"
    },
    {
      title: "Agile Methodology",
      description: "Iterative optimization aligned with development cycles"
    }
  ],

  "futureReady": [
    "Performance optimization for AI/ML pipelines and event-driven systems",
    "Edge delivery and CDN strategy planning",
    "Continuous performance monitoring with auto-remediation",
    "Sustainable performance budgeting integrated with DevOps"
  ]
},
  "Training & support": {
  "title": "Training & Support",
  "description": "Empower your teams with the knowledge, tools, and real-time support necessary to adopt modern technologies and maintain system excellence long after deployment.",

  "images": [
    "/images/services/ts.jpg"
  ],

  "content": [
    "Customized training programs covering Agile methodologies, DevOps best practices, and CI/CD automation.",
    "Technical deep dives into modern stacks such as React, Node.js, Python, Kubernetes, and cloud-native ecosystems.",
    "Knowledge management and documentation systems using MkDocs, Docusaurus, or bespoke platforms.",
    "Comprehensive 24/7 production support with SLA-driven response and resolution timelines.",
    "Sustained application lifecycle support including updates, bug fixes, and security compliance maintenance."
  ],

  "features": [
    {
      title: "Tailored Training Programs",
      description: "Custom workshops and courses for your tech stack and team needs"
    },
    {
      title: "Hands-on Labs",
      description: "Real-world scenarios with sandbox environments for practical learning"
    },
    {
      title: "Documentation Strategy",
      description: "Knowledge bases, wikis, and playbooks for self-service support"
    },
    {
      title: "24/7 Production Support",
      description: "SLA-backed response with dedicated support engineers"
    },
    {
      title: "Incident Management",
      description: "Proactive monitoring, alerting, and incident response"
    },
    {
      title: "Onboarding Programs",
      description: "Structured ramp-up for new hires and cross-functional teams"
    },
    {
      title: "Continuous Learning",
      description: "Ongoing upskilling in emerging technologies and practices"
    },
    {
      title: "Community Engagement",
      description: "Access to forums, webinars, and knowledge-sharing events"
    }
  ],

  "benefits": [
    "Accelerate onboarding by up to 50% through structured ramp-up programs",
    "Reduce production issues by 40% via better trained, self-sufficient teams",
    "Ensure long-term platform reliability and uptime beyond initial deployment",
    "Stay aligned with evolving technologies and compliance standards",
    "Enable business continuity through resilient support systems"
  ],

  "caseStudies": [
    "Trained over 150 engineers across 10 cross-functional teams, improving feature delivery velocity by 25%",
    "Reduced critical support incidents from 15/month to 2/month within 6 months of implementing DevOps workshops",
    "Provided ongoing maintenance and support for a mission-critical platform maintaining 99.99% uptime for 5+ years"
  ],

  "technologies": [
    "GitLab CI/CD, GitHub Actions",
    "Jupyter Notebooks, Observable",
    "Confluence, Notion, Docusaurus",
    "PagerDuty, OpsGenie, VictorOps",
    "Sentry, Rollbar, Datadog"
  ],

  "whyAictum": [
    {
      title: "Expertise",
      description: "Full-stack performance engineers with deep cloud and systems expertise"
    },
    {
      title: "Proven Success",
      description: "Proven success across high-traffic B2B and B2C platforms"
    },
    {
      title: "Tool-Agnostic Approach",
      description: "Tool-agnostic approach tailored to tech stack and business KPIs"
    },
    {
      title: "Transparency",
      description: "Transparent benchmarking and results reporting"
    },
    {
      title: "Long-term Partnerships",
      description: "Focus on sustainable performance improvements"
    },
    {
      title: "Agile Methodology",
      description: "Iterative optimization aligned with development cycles"
    }
  ],

  "futureReady": [
    "Ongoing upskilling in AI/ML, cloud-native, and secure software practices",
    "Support playbooks for hybrid, remote, and distributed teams",
    "AI-driven documentation assistants for real-time team enablement",
    "Embedded support automation via Slack, Teams, and chatbots"
  ]
},
};
