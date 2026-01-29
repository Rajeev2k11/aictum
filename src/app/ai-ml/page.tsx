"use client";
import CountUp from "react-countup";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaNetworkWired,
  FaMobileAlt,
  FaRegLightbulb,
  FaSearchDollar,
} from "react-icons/fa";

const AIServicesPage = () => {
  const services = [
    {
      icon: <FaRobot className="text-4xl" />,
      title: "AI Development",
      description:
        "Custom AI solutions tailored to your business needs, from chatbots to complex decision-making systems that learn and adapt.",
      features: [
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Cognitive Computing",
      ],
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: "Machine Learning",
      description:
        "Advanced ML models that learn from your data to provide predictive analytics and intelligent automation at scale.",
      features: [
        "Supervised & Unsupervised Learning",
        "Deep Learning Networks",
        "Reinforcement Learning",
        "Model Optimization",
      ],
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Predictive Analytics",
      description:
        "Leverage historical data to forecast trends, behaviors, and outcomes with remarkable accuracy.",
      features: [
        "Time Series Forecasting",
        "Risk Assessment Models",
        "Customer Behavior Prediction",
        "Market Trend Analysis",
      ],
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Data Engineering",
      description:
        "Comprehensive data infrastructure to collect, process, and analyze massive datasets efficiently.",
      features: [
        "Data Pipeline Architecture",
        "ETL/ELT Processes",
        "Data Warehousing",
        "Real-time Processing",
      ],
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "AI Cloud Solutions",
      description:
        "Scalable AI solutions hosted on secure cloud platforms for global accessibility and performance.",
      features: [
        "Cloud-native AI Applications",
        "Serverless Architectures",
        "Distributed Training",
        "Auto-scaling Models",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "AI Security",
      description:
        "Protect your AI systems from adversarial attacks and ensure data privacy compliance.",
      features: [
        "Model Robustness Testing",
        "Data Anonymization",
        "Federated Learning",
        "Explainable AI",
      ],
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "AI Integration",
      description:
        "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: [
        "API Development",
        "Legacy System Modernization",
        "Microservices Architecture",
        "CI/CD Pipelines",
      ],
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "AI for IoT",
      description:
        "Edge AI solutions that bring intelligence to your IoT devices and networks.",
      features: [
        "Edge Computing",
        "Sensor Data Analysis",
        "Anomaly Detection",
        "Predictive Maintenance",
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile AI",
      description:
        "On-device AI solutions for mobile applications with offline capabilities.",
      features: [
        "Mobile-optimized Models",
        "Privacy-focused AI",
        "Real-time Processing",
        "Cross-platform SDKs",
      ],
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      description:
        "AI helps in faster diagnosis, better medical imaging, and patient monitoring with smart systems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      name: "Finance",
      description:
        "AI detects fraud, assesses risk, and improves customer service through automation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Retail",
      description:
        "AI offers product recommendations, predicts stock needs, and handles customer chats.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      name: "Manufacturing",
      description:
        "AI checks product quality, predicts equipment failures, and automates processes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      name: "Education",
      description:
        "AI tutors students, checks performance, and personalizes learning content.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      name: "AI in Digital Media",
      description:
        "AI summarizes videos, analyzes audiences, and creates voice or content automation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>AI & ML Development Services | YourCompany</title>
        <meta
          name="description"
          content="Comprehensive AI and Machine Learning services to transform your business with cutting-edge technology solutions"
        />
        <meta
          name="keywords"
          content="AI development, machine learning, artificial intelligence, predictive analytics, data science, deep learning"
        />
      </Head>

      <main className="bg-white">
        {/* Hero Section - Final Updated Version */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gray-900 px-6 pt-24 pb-16 text-white">
          {/* Background Image - Add your image path here */}
          <div className="absolute inset-0 bg-[url('/images/extra-service/bg-effect.jpg')] bg-cover bg-center opacity-30"></div>

          <div className="relative z-10 container mx-auto">
            {/* Rest of the code remains exactly the same as previous version */}
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="mb-4 text-4xl font-bold md:text-4xl">
                  Intelligent Tech with{" "}
                  <span className="text-purple-500"> AI & ML</span>
                </h1>
                <p className="md:text-s max-w-1xl mx-auto text-base">
                  We craft intelligent solutions using AI & ML technologies to
                  solve real-world challenges. From concept to deployment, our
                  team transforms complex ideas into impactful products using
                  machine learning, NLP, computer vision, and generative AI..
                </p>
              </motion.div>

              {/* Stats with Counting Animation and + symbol */}
              <div className="my-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { value: 120, label: "Custom AI Projects" },
                  { value: 60, label: "AI Models Built" },
                  { value: 35, label: "Enterprise AI Deployment" },
                  { value: 35, label: "Worldwide Clients Served" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-purple-500">
                      <CountUp end={stat.value} duration={2} suffix="+" />
                    </div>
                    <p className="mt-2 text-sm md:text-base">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Single CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8"
              >
                <Link href="/contact" passHref>
                  <button className="rounded-lg bg-purple-600 px-8 py-3 text-lg font-bold text-white transition duration-300 hover:bg-purple-500">
                    Start Your AI Project
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clients Logo Section - Light Theme */}
        <section className="bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] py-8">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <h3 className="text-sm font-semibold tracking-wider text-purple-900 uppercase">
                Trusted by industry leaders
              </h3>
            </motion.div>
            <div className="flex flex-wrap items-center justify-center gap-14 md:gap-24">
              {[
                "/images/collab/energyfi.svg",
                "/images/collab/crypto.svg",
                "/images/collab/wenbit-2.svg",
                // "/images/collab/neo.svg",
                "/images/collab/plex.svg",
                "/images/collab/3coswape.svg",
                "/images/collab/q.svg",
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="transition hover:scale-105 hover:opacity-100"
                >
                  <img
                    src={client}
                    alt="Client logo"
                    className="h-16 w-auto max-w-[180px] object-contain md:h-20 md:max-w-[200px]"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About AI Services Section - Dark Purple Theme */}
        <section className="bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-16 text-white md:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              {/* Image Column - Modified for horizontal mobile display */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 h-full w-full rounded-xl md:-top-6 md:-left-6"></div>
                  <div className="relative overflow-hidden rounded-xl bg-[#141418] shadow-xl">
                    <img
                      src="/images/extra-service/advance-ai.jpg"
                      alt="AI Development Team"
                      className="aspect-video h-auto w-full object-cover md:aspect-auto md:h-[500px]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#d8a7ef] md:text-3xl lg:text-4xl">
                  Advanced AI Development Services
                </h2>
                <p className="mb-6 text-base text-white md:text-lg">
                  Our AI development services empower businesses to leverage
                  artificial intelligence for solving complex problems,
                  automating processes, and gaining competitive advantages. With
                  expertise in machine learning, deep learning, and cognitive
                  computing, we deliver transformative AI solutions.
                </p>

                <div className="space-y-3 md:space-y-4">
                  {/* List items remain the same */}
                  {[
                    {
                      text: "150+ AI Projects delivered across various industries",
                      bold: "150+ AI Projects",
                    },
                    {
                      text: "95% Client Retention rate with long-term partnerships",
                      bold: "95% Client Retention",
                    },
                    {
                      text: "40+ AI Experts including data scientists and ML engineers",
                      bold: "40+ AI Experts",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#572b7dcc]">
                          <svg
                            className="h-4 w-4 text-[#d8a7ef]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-white">
                        <span className="font-semibold">{item.bold}</span>{" "}
                        {item.text.replace(item.bold, "")}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("process")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-6 rounded-lg bg-purple-500 px-6 py-2 text-base font-bold text-[#1A1325] shadow-md transition duration-300 hover:bg-purple-400 md:mt-8 md:px-8 md:py-3 md:text-lg"
                >
                  Learn About Our Process
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Services Section - Light Theme */}
        <section className="bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] px-6 py-28">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20 text-center"
            >
              <motion.div variants={fadeInUp}>
                <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-900">
                  Our Services
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-3xl font-bold text-purple-900 md:text-4xl"
              >
                Comprehensive AI & ML Solutions
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                We deliver end-to-end artificial intelligence and machine
                learning services tailored to your specific business
                requirements and industry challenges.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-full rounded-xl border border-[#572b7d] bg-[#141418] p-6 shadow-lg transition hover:shadow-xl">
                    <div className="mb-4 text-4xl text-[#d8a7ef]">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#d8a7ef]">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-white">{service.description}</p>
                    {service.features.length > 0 && (
                      <div className="mt-auto">
                        <h4 className="mb-2 text-sm font-semibold text-[#d8a7ef]">
                          Features:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-[#d8a7ef]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                              <span className="text-sm text-white">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            ></motion.div>
          </div>
        </section>

        {/* Industries Section - Dark Purple Theme */}
        <section className="bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-28 text-white">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20 text-center"
            >
              <motion.div variants={fadeInUp}>
                <span className="mb-4 inline-block rounded-full bg-[#572b7dcc] px-4 py-2 text-sm font-semibold">
                  Industries We Serve
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-3xl font-bold text-[#d8a7ef] md:text-4xl"
              >
                AI Solutions Across Industries
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Our AI expertise spans multiple verticals, delivering
                industry-specific solutions that drive real business impact.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-[#572b7dcc] p-8 transition hover:scale-105 hover:shadow-lg"
                >
                  <div className="mb-4 text-[#d8a7ef]">{industry.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-[#d8a7ef]">
                    {industry.name}
                  </h3>
                  <p className="text-white">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Optional Section - Light Purple Theme */}
        <section className="bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] px-2 py-12 md:py-1">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-12">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center lg:w-1/2"
              >
                <h1 className="mb-4 text-2xl leading-tight font-bold text-purple-900 md:text-3xl lg:text-4xl">
                  Let&apos;s Talk About Your{" "}
                  <span className="text-purple-900">AI Project</span>
                </h1>
                <p className="mb-6 text-base text-[#3b3a3c] md:text-lg">
                  Our team offers practical AI development services and
                  consulting tailored to your goals. Let&apos;s figure out what makes
                  sense for your business—no pressure, just clarity.
                </p>
                <a
                  href="https://calendly.com/team-aictum"
                  target="_blank"
                  className="self-start rounded-full bg-purple-700 px-6 py-2 text-base font-bold text-[#ffffff] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:shadow-xl md:px-8 md:py-3 md:text-lg"
                >
                  Start a Conversation
                </a>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative h-full min-h-[300px] w-full">
                  <img
                    src="/images/extra-service/whyA.jpg"
                    alt="AI Project Discussion"
                    loading="lazy"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section - Dark Purple Theme */}
        <section className="bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-28 text-white">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20 text-center"
            >
              <motion.div variants={fadeInUp}>
                <span className="mb-4 inline-block rounded-full bg-[#572b7dcc] px-4 py-2 text-sm font-semibold">
                  Success Stories
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-3xl font-bold text-[#d8a7ef] md:text-4xl"
              >
                AI Transformation Case Studies
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Discover how we&apos;ve helped businesses across industries leverage
                AI to solve complex challenges and achieve remarkable results.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative h-[450px] overflow-hidden rounded-xl border border-[#572b7d] bg-[#141418] shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-[url('/images/extra-service/boxA.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.6)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      E
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      E-commerce
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Personalized Shopping with AI Recommendations
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Developed an AI system that delivers personalized product
                    recommendations by analyzing user behavior and purchase
                    history, boosting sales.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        98% Accuracy • 70% Faster
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[450px] overflow-hidden rounded-xl border border-[#572b7d] bg-[#141418] shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-[url('/images/extra-service/boxB.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.6)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      L
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      Logistics & Supply Chain
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Predictive Analytics for Real-Time Delivery Optimization
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Developed an ML-based system that predicts delays, optimizes
                    delivery routes, and improves overall fleet efficiency using
                    real-time traffic and weather data.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        95% Faster • 60% Reduction
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            ></motion.div>
          </div>
        </section>

        {/* Process Section - AI Roadmap (Light Theme) */}
        <section
          id="process"
          className="bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] px-4 py-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20 text-center"
            >
              <motion.div variants={fadeInUp}>
                <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-900">
                  Our Approach
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-3xl font-bold text-purple-900 md:text-4xl"
              >
                Our AI Build Journey
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                A structured, proven methodology to deliver successful AI
                solutions
              </motion.p>
            </motion.div>

            <div className="relative space-y-16">
              {/* Vertical line (desktop only) */}
              <div className="absolute left-1/2 z-0 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-purple-300 via-purple-500 to-purple-400 lg:block" />

              {[
                {
                  title: "Discovery & Planning",
                  description:
                    "We analyze your business needs, define project scope, and establish success metrics.",
                  icon: <FaSearchDollar className="text-3xl text-purple-600" />,
                },
                {
                  title: "Data Strategy",
                  description:
                    "We assess your data assets, identify gaps, and create a roadmap for data collection and preparation.",
                  icon: <FaDatabase className="text-3xl text-purple-600" />,
                },
                {
                  title: "Model Development",
                  description:
                    "Our data scientists build, train, and validate models using state-of-the-art techniques.",
                  icon: <FaBrain className="text-3xl text-purple-600" />,
                },
                {
                  title: "Integration & Deployment",
                  description:
                    "We seamlessly integrate AI solutions into your existing systems and infrastructure.",
                  icon: <FaNetworkWired className="text-3xl text-purple-600" />,
                },
                {
                  title: "Monitoring & Optimization",
                  description:
                    "Continuous performance tracking and model refinement to ensure long-term success.",
                  icon: <FaRegLightbulb className="text-3xl text-purple-600" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative z-10 flex flex-col items-center gap-6 lg:flex-row lg:gap-0 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="lg:w-5/12">
                    <div className="rounded-xl border border-purple-100 bg-white p-6 shadow-lg transition hover:shadow-xl sm:p-8">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
                            {step.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-purple-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-purple-800 md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="hidden justify-center lg:flex lg:w-2/12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Left Text + Right Image Layout */}
        <section className="relative bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              {/* Left Side - Text Content */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="mb-6 text-3xl font-bold text-[#AE69DF] md:text-4xl">
                    Why Aictum is the Right Choice for Custom AI Development
                  </h2>

                  <p className="mb-8 text-lg text-gray-100">
                    At Aictum, we develop AI solutions tailored to your unique
                    business needs — not one-size-fits-all tools. Our expert
                    team focuses on building smart, scalable systems that align
                    with your goals and drive real results.
                  </p>

                  <ul className="mb-10 space-y-4">
                    {[
                      "Proficiency in AI Technologies",
                      "Custom-Built AI Solutions",
                      "Trusted Worldwide by Clients",
                      "Smooth System Integration",
                      "Trusted and Responsible AI",
                      "Dedicated to Data Privacy",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mt-1 mr-3 text-green-500">✔</span>
                        <span className="font-medium text-gray-100">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              {/* Right Side - Image with Advanced Styling */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Main Image Container */}
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Your Image */}
                    <img
                      src="/images/extra-service/why.jpg"
                      alt="AI Development Team"
                      className="h-[400px] w-full object-cover transition-all duration-500 group-hover:scale-105 md:h-[500px]"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
                    <div className="absolute -right-4 -bottom-4 z-0 h-24 w-24 rounded-full bg-blue-500/20"></div>
                    <div className="absolute -top-4 -left-4 z-0 h-16 w-16 rounded-full bg-purple-500/20"></div>
                  </div>

                  {/* Floating Badge (Optional) */}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Dark Purple Theme */}
        <section className="relative bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-28 text-white">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 z-0 bg-[url('/images/extra-service/ai.jpg')] bg-cover bg-center opacity-70"
            style={{
              backgroundImage: "url('/images/extra-service/ai.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 z-0 bg-black/50"></div>

          <div className="relative z-10 container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-6 text-3xl font-bold text-[#d8a7ef] md:text-4xl">
                Ready to Harness the Power of AI for Your Business?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl">
                Contact our AI experts today to discuss how we can help you
                solve complex challenges and unlock new opportunities with
                artificial intelligence.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://calendly.com/team-aictum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-purple-400 px-8 py-4 text-lg font-bold text-[#1A1325] shadow-lg transition duration-300 hover:bg-purple-300 hover:shadow-xl"
                >
                  Schedule Free Consultation
                </a>
                <a
                  href="https://wa.link/vfj7c9" // Replace with your actual WhatsApp link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#d8a7ef] px-8 py-4 text-lg font-bold text-[#d8a7ef] transition-all duration-300 hover:bg-purple-400 hover:text-[#29282a] hover:shadow-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Contact Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIServicesPage;
