// data/services.ts

export interface ServiceDetail {
  [x: string]: any;
  title: string;
  description: string;
  images: string[];
  content: string[];
  features?: string[];          
  benefits?: string[];         
  caseStudies?: string[];      
  technologies?: string[];     
  whyAictum?: string[];
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

  "features": [
    "Custom model training with your proprietary datasets",
    "Edge computing deployment for real-time processing",
    "Multi-camera synchronization for wide-area monitoring",
    "Anomaly detection in video streams",
    "Automated quality control in manufacturing lines",
    "Low-light and night-vision compatibility",
    "3D vision systems with depth perception",
    "AI explainability features for regulatory compliance"
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

  "whyAictum": [
    "Deep expertise in AI/ML and computer vision domains with a proven portfolio across industries",
    "In-house team of data scientists, AI engineers, and domain consultants for tailored solutioning",
    "Accelerated development using reusable modules and pre-trained models",
    "End-to-end lifecycle support — from POC to production-grade deployment and monitoring",
    "Trusted by Fortune 500 companies and startups alike for innovation in visual AI"
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

  "features": [
    "Transformer-based models trained on custom corpora",
    "Contextual memory for multi-turn conversations",
    "Speech-to-text and text-to-speech with domain-specific vocabulary",
    "Named entity recognition, relationship extraction, and classification",
    "Automated summarization and paraphrasing",
    "Emotion and sarcasm detection in customer feedback",
    "Integration with CRMs, ERPs, and communication platforms",
    "Real-time processing pipelines with streaming NLP support"
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

  "whyAictum": [
    "Proven NLP deployments in legaltech, fintech, healthcare, and enterprise automation sectors.",
    "In-house R&D and fine-tuning capabilities for transformer models on secure infrastructure.",
    "Human-in-the-loop NLP workflows with expert validation when needed.",
    "Customizable APIs and UI interfaces for seamless integration into existing business systems.",
    "Ongoing support for updates, accuracy improvements, and domain drift handling."
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

  "features": [
    "Custom fine-tuning on brand-specific datasets",
    "Multi-turn memory and dynamic persona injection",
    "Text, image, and video generation from unified prompts",
    "Plug-and-play integrations with CMS, CRM, and helpdesk tools",
    "Built-in content safety, bias detection, and response filtering",
    "Scalable deployment via APIs, widgets, and embedded agents",
    "Visual story generation and creative campaign assistance",
    "A/B testing of AI-generated variants for performance optimization"
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

  "whyAictum": [
    "Specialized expertise in Generative AI, LLM orchestration, and prompt engineering for enterprise needs",
    "Full-stack development team to deliver UI, APIs, cloud infra, and custom models",
    "Flexible IP and hosting — deploy on your cloud or ours with complete data control",
    "Modular architecture for chatbot, content engine, or hybrid experiences",
    "Committed to ethical AI — all deployments include safety checks and responsible content policies"
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

  "features": [
    "AutoML pipelines with hyperparameter tuning",
    "Explainable AI (XAI) with SHAP, LIME for auditability",
    "Scenario modeling and simulation for ‘what-if’ analysis",
    "REST APIs for real-time predictions at scale",
    "Seamless integration with Tableau, Power BI, Looker",
    "Drift detection and automated model re-training",
    "Data preprocessing and feature engineering automation",
    "Custom alerting for threshold breaches or anomaly spikes"
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

  "whyAictum": [
    "Years of experience designing and deploying predictive models across domains: retail, finance, healthcare, and manufacturing",
    "Strong foundation in statistical modeling, time-series forecasting, and modern ML techniques",
    "In-house data scientists and business analysts working in tandem to align predictions with strategy",
    "Secure, scalable deployments on AWS, Azure, or GCP — with full data privacy compliance",
    "Agile delivery with frequent iterations, dashboards, and stakeholder demos"
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

  "features": [
    "Audited ERC-20, ERC-721, and ERC-1155 token contracts",
    "Role-based access control (RBAC) and permission layers",
    "Timelocks, pausability, and emergency circuit breakers",
    "Upgradeable contracts via UUPS or transparent proxy pattern",
    "Multi-chain deployment pipelines and chain-agnostic logic",
    "Gas fee estimators and optimization reports",
    "Integration-ready with OpenZeppelin, Chainlink, and major L2s"
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

  "whyAictum": [
    "Deep expertise in smart contract architecture, audit-readiness, and gas optimization",
    "Cross-functional teams with smart contract engineers, protocol designers, and Web3 front-end developers",
    "End-to-end delivery from contract development to wallet integrations and testnet/mainnet deployment",
    "Battle-tested workflows using Hardhat, Foundry, and CI pipelines for secure and reliable releases",
    "On-chain analytics and monitoring support post-deployment for sustained performance and transparency"
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

  "features": [
    "Modular wallet integration components (MetaMask, WalletConnect, Ledger)",
    "Real-time transaction status tracking and gas fee estimators",
    "Cross-chain token bridge UI elements and alerts",
    "GraphQL-powered on-chain analytics dashboards",
    "Fully responsive mobile-first and PWA-ready design",
    "Support for IPFS/Filecoin for decentralized media and metadata storage"
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

  "whyAictum": [
    "End-to-end Web3 development expertise, from UI to smart contracts",
    "Strong UX focus to simplify blockchain interactions for all users",
    "Battle-tested workflows for rapid prototyping and testnet deployments",
    "Experience building scalable dApps with 100k+ users",
    "Support for custom analytics, NFT rendering, and DAO tooling"
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
    "Lazy minting to reduce upfront gas costs",
    "Bulk NFT creation and batch metadata upload tools",
    "Automated royalty distribution and split payments",
    "Support for fixed price, auction, and offer-based sales",
    "Trait rarity filtering and collection-level analytics",
    "Support for IPFS pinning and metadata freezing"
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

  "whyAictum": [
    "Experience building large-scale NFT platforms with custom smart contracts",
    "Deep integration with IPFS, royalty engines, and off-chain metadata APIs",
    "Secure auditing pipelines to prevent exploits and ensure trust",
    "Support for brand-specific UX flows and mobile-first experiences",
    "Rapid deployment with battle-tested NFT marketplace modules"
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
    "Competitive and regulatory landscape analysis",
    "Token valuation and pricing simulation models",
    "Investor pitch deck and whitepaper support",
    "Go-to-market planning and KPI definition",
    "Compliance mapping across regions and sectors"
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

  "whyAictum": [
    "Cross-functional team of blockchain engineers, economists, and legal advisors",
    "Proven track record of venture-scale and enterprise-grade strategy design",
    "Deep ecosystem understanding across Ethereum, Layer-2s, and alt-L1s",
    "Investor and GTM support from whitepaper to pitch deck",
    "Trusted by corporates and crypto-native startups alike"
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

  "features": [
    "JAMstack-ready static and dynamic rendering options",
    "Serverless and containerized backend capabilities",
    "Real-time data via WebSockets and pub/sub integrations",
    "OpenAPI and GraphQL schema generation with auto-docs",
    "Offline-first and Progressive Web App (PWA) support"
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

  "whyAictum": [
    "Cross-functional team with frontend, backend, DevOps, and mobile expertise",
    "Battle-tested patterns from startups to enterprises",
    "API-first and developer-experience-driven workflows",
    "Strong UX/Dev handoff processes for pixel-perfect outcomes",
    "Cloud-agnostic deployments and infrastructure-as-code support"
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
    "Click-through prototypes with multi-device flows",
    "Design tokens and component libraries",
    "Usability testing coordination and analysis",
    "Dev-mode specs and redlines for seamless handoff",
    "Dark mode, responsive states, and interaction variants"
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

  "whyAictum": [
    "Human-centered design backed by real-world usability insights",
    "Integrated design-to-dev pipeline for frictionless delivery",
    "Scalable design systems for product ecosystems",
    "Experience designing for fintech, healthtech, SaaS, and Web3",
    "Iterative design process anchored in research and experimentation"
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
    "Biometric authentication (Face ID, fingerprint)",
    "Offline-first sync with local cache fallback",
    "Deep linking and universal links support",
    "In-app purchases and subscriptions",
    "Background tasks, push notifications, and geolocation"
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
    "Expertise in both native and cross-platform ecosystems",
    "End-to-end app lifecycle management from design to deployment",
    "DevOps and release automation built-in from day one",
    "UX-led mobile design with proven engagement metrics",
    "Experience delivering regulated apps (e.g. healthcare, fintech)"
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
    "Infrastructure as Code (IaC) with CI/CD integration",
    "Zero-downtime blue/green and canary deployments",
    "Observability stacks: logs, metrics, traces in one place",
    "Security compliance mapping (SOC 2, HIPAA, ISO 27001)",
    "FinOps dashboards with actionable savings insights"
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

  "whyAictum": [
    "Certified cloud engineers across all major providers",
    "Production-grade architecture blueprints for regulated industries",
    "DevSecOps baked into every layer of your infrastructure",
    "FinOps strategy integrated into the build lifecycle",
    "Proven success scaling from MVP to global infrastructure"
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
    "Actionable architecture and codebase reports",
    "Quantitative scoring of technical debt",
    "Migration and integration risk analysis",
    "Third-party vendor selection matrix",
    "Technology innovation alignment canvas"
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
    "Vendor-agnostic experts with hands-on implementation experience",
    "Proven methodology blending technical depth with business acumen",
    "Ability to align legacy systems with modern cloud-native goals",
    "Cross-industry insight into emerging technology trends",
    "Delivered $10M+ in tech-driven value across clients"
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
    "Architecture decision records (ADR) for transparency",
    "Service granularity and dependency mapping",
    "Integration pattern playbooks (pub/sub, CQRS, sync/async)",
    "Resilience planning and circuit breaker strategies",
    "Data lineage and flow visualization models"
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
    "Architecture-first mindset grounded in business outcomes",
    "Deep experience across domains: finance, healthcare, logistics",
    "Tool-agnostic strategies adapted to existing enterprise ecosystems",
    "Full lifecycle support from planning to implementation",
    "Trusted by enterprises for mission-critical integration delivery"
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
    "Synthetic load and stress testing",
    "Profiling of memory, CPU, and I/O",
    "Real-time user experience monitoring",
    "Core Web Vitals audits",
    "Custom performance dashboards and alerts"
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
    "Full-stack performance engineers with deep cloud and systems expertise",
    "Proven success across high-traffic B2B and B2C platforms",
    "Tool-agnostic approach tailored to tech stack and business KPIs",
    "Transparent benchmarking and results reporting"
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
    "Role-specific training and hands-on labs",
    "Custom training portals and LMS integration",
    "Certification-aligned curriculum (AWS, GCP, CNCF, etc.)",
    "Incident management and escalation playbooks",
    "Self-service knowledge base and FAQs"
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
    "Enterprise-grade training with real-world labs and tools",
    "Integrated support services from the same teams who built your systems",
    "Scalable knowledge-sharing platforms and documentation strategies",
    "SLA-backed response with transparent reporting and escalation processes"
  ],

  "futureReady": [
    "Ongoing upskilling in AI/ML, cloud-native, and secure software practices",
    "Support playbooks for hybrid, remote, and distributed teams",
    "AI-driven documentation assistants for real-time team enablement",
    "Embedded support automation via Slack, Teams, and chatbots"
  ]
},
};
