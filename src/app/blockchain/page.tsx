"use client";
import AictumBot from "@/components/AictumBot";
import CountUp from "react-countup";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaNetworkWired,
  FaMobileAlt,
  FaRegLightbulb,
  FaSearchDollar,
  FaLink,
} from "react-icons/fa";
import Image from "next/image";

const BlockchainServicesPage = () => {
  const services = [
    {
      icon: <FaBitcoin className="text-4xl" />,
      title: "Blockchain Development",
      description:
        "Custom blockchain solutions including private, public, and consortium blockchains tailored to your business requirements.",
      features: [
        "Smart Contract Development",
        "DApp Creation",
        "Tokenization Solutions",
        "Consensus Mechanism Design",
      ],
    },
    {
      icon: <FaEthereum className="text-4xl" />,
      title: "DeFi Solutions",
      description:
        "Decentralized finance platforms including lending protocols, DEXs, yield farming, and staking solutions.",
      features: [
        "Automated Market Makers",
        "Liquidity Pool Architectures",
        "Yield Optimization",
        "Flash Loan Systems",
      ],
    },
    {
      icon: <FaLink className="text-4xl" />,
      title: "Interoperability Solutions",
      description:
        "Bridging different blockchain networks to enable seamless cross-chain transactions and communication.",
      features: [
        "Cross-Chain Bridges",
        "Atomic Swaps",
        "Inter-Blockchain Communication",
        "Multi-Chain Wallets",
      ],
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Blockchain Infrastructure",
      description:
        "Robust infrastructure solutions for running and maintaining blockchain networks at scale.",
      features: [
        "Node Operation Services",
        "Validator Setup",
        "RPC Endpoint Services",
        "Indexing Solutions",
      ],
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Enterprise Blockchain",
      description:
        "Permissioned blockchain solutions for businesses with advanced privacy and compliance features.",
      features: [
        "Hyperledger Fabric",
        "Enterprise Ethereum",
        "Corda Solutions",
        "Quorum Implementation",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Blockchain Security",
      description:
        "Comprehensive security audits and hardening for your blockchain projects and smart contracts.",
      features: [
        "Smart Contract Audits",
        "Penetration Testing",
        "Cryptographic Security",
        "Vulnerability Assessment",
      ],
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Blockchain Integration",
      description:
        "Seamlessly integrate blockchain capabilities into your existing systems and business processes.",
      features: [
        "API Development",
        "Legacy System Integration",
        "Oracle Services",
        "Middleware Solutions",
      ],
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "NFT Solutions",
      description:
        "End-to-end NFT platforms, marketplaces, and tokenization services for digital and physical assets.",
      features: [
        "NFT Minting Platforms",
        "Royalty Management",
        "Fractional Ownership",
        "Cross-Marketplace Compatibility",
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Blockchain",
      description:
        "Mobile-first blockchain solutions including wallets, DApp browsers, and light clients.",
      features: [
        "Mobile Wallet SDKs",
        "Biometric Security",
        "Offline Transaction Support",
        "Push Notification Integration",
      ],
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      description:
        "Blockchain enables faster settlements, reduced costs, and improved transparency in financial transactions.",
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
      name: "Supply Chain",
      description:
        "Blockchain provides end-to-end traceability, reduces fraud, and improves logistics efficiency.",
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
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      description:
        "Secure patient data sharing, drug provenance tracking, and clinical trial integrity.",
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
      name: "Real Estate",
      description:
        "Tokenized property ownership, streamlined transactions, and reduced paperwork.",
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Gaming",
      description:
        "True digital ownership of assets, play-to-earn models, and provably fair gaming.",
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
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
    },
    {
      name: "Government",
      description:
        "Secure voting systems, identity management, and transparent public records.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
    <AictumBot />
      <Head>
        <title>Blockchain Development Services | YourCompany</title>
        <meta
          name="description"
          content="Comprehensive Blockchain development services to transform your business with decentralized technology solutions"
        />
        <meta
          name="keywords"
          content="blockchain development, smart contracts, decentralized applications, DeFi, NFT solutions, Web3 development"
        />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gray-900 px-6 pt-24 pb-16 text-white">
          <div className="absolute inset-0 bg-[url('/images/extra-service/B-effect.jpg')] bg-cover bg-center opacity-30"></div>

          <div className="relative z-10 container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="mb-4 text-4xl font-bold md:text-4xl">
                  Renowned Blockchain{" "}
                  <span className="text-purple-500">Development Company</span>
                </h1>
                <p className="md:text-s max-w-1xl mx-auto text-base">
                  We build secure, scalable, and enterprise-grade blockchain
                  solutions for DeFi, NFTs, digital banking, supply chains, and
                  tokenized assets. From concept to code, our team delivers
                  full-cycle blockchain development across leading platforms.
                </p>
              </motion.div>

              {/* Stats with Counting Animation and + symbol */}
              <div className="my-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { value: 85, label: "Blockchain Projects" },
                  { value: 40, label: "Countries We Serve" },
                  { value: 25, label: "Enterprise Solutions" },
                  { value: 30, label: "Global Clients" },
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
                    Start Your Project
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
                  <Image
                    width={200}
                    height={80}
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

        {/* About Blockchain Services Section - Dark Purple Theme */}
        <section className="bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-16 text-white md:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
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
                    <Image
                      src="/images/extra-service/advance.jpg"
                      width={600}
                      height={400}
                      alt="Blockchain Development Team"
                      className="aspect-video h-auto w-full md:aspect-auto md:h-[500px]"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#d8a7ef] md:text-3xl lg:text-4xl">
                  Advanced Blockchain Development Services
                </h2>
                <p className="mb-6 text-base text-white md:text-lg">
                  Our blockchain development services empower businesses to
                  leverage decentralized technology for solving complex
                  problems, increasing transparency, and gaining competitive
                  advantages. With expertise in smart contracts, distributed
                  ledgers, and cryptographic security, we deliver transformative
                  blockchain solutions.
                </p>

                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      text: "85+ Blockchain Projects delivered across various industries",
                      bold: "85+ Blockchain Projects",
                    },
                    {
                      text: "90% Client Retention rate with long-term partnerships",
                      bold: "90% Client Retention",
                    },
                    {
                      text: "35+ Blockchain Experts including smart contract developers",
                      bold: "35+ Blockchain Experts",
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
                Comprehensive Blockchain Solutions
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                We deliver end-to-end blockchain services tailored to your
                specific business requirements and industry challenges.
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
                Blockchain Solutions Across Industries
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Our blockchain expertise spans multiple verticals, delivering
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center lg:w-1/2"
              >
                <h1 className="mb-4 text-2xl leading-tight font-bold text-purple-900 md:text-3xl lg:text-4xl">
                  Let&apos;s Talk About Your{" "}
                  <span className="text-purple-900">Blockchain Project</span>
                </h1>
                <p className="mb-6 text-base text-[#3b3a3c] md:text-lg">
                  Our team offers practical blockchain development services and
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

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative h-full min-h-[300px] w-full">
                  <Image
                  width={600}
                  height={400}
                    src="/images/extra-service/need.jpg"
                    alt="Blockchain Project Discussion"
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
                Blockchain Transformation Case Studies
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Discover how we&apos;ve helped businesses across industries leverage
                blockchain to solve complex challenges and achieve remarkable
                results.
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
                  className="absolute inset-0 bg-[url('/images/extra-service/Defi.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.5)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      D
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      DeFi Platform
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Decentralized Lending Protocol
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Developed a permissionless lending platform with smart
                    contracts that enables users to earn interest on deposits
                    and borrow against collateral, processing over $50M in
                    transactions.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        $50M+ TVL • 10K+ Users
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
                  className="absolute inset-0 bg-[url('/images/extra-service/supply.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.5)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      S
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      Supply Chain
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Pharmaceutical Supply Chain Tracking
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Implemented a blockchain solution for tracking
                    pharmaceuticals from manufacturer to patient, reducing
                    counterfeit drugs by 95% and improving recall efficiency by
                    70%.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        95% Reduction • 70% Faster
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section - Blockchain Roadmap (Light Theme) */}
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
                Our Blockchain Development Process
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                A structured, proven methodology to deliver successful
                blockchain solutions
              </motion.p>
            </motion.div>

            <div className="relative space-y-16">
              <div className="absolute left-1/2 z-0 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-purple-300 via-purple-500 to-purple-400 lg:block" />

              {[
                {
                  title: "Discovery & Planning",
                  description:
                    "We analyze your business needs, define project scope, and select the appropriate blockchain architecture.",
                  icon: <FaSearchDollar className="text-3xl text-purple-600" />,
                },
                {
                  title: "Blockchain Architecture",
                  description:
                    "We design the network topology, consensus mechanism, and smart contract framework for your solution.",
                  icon: <FaNetworkWired className="text-3xl text-purple-600" />,
                },
                {
                  title: "Smart Contract Development",
                  description:
                    "Our developers write, test, and audit secure smart contracts that power your decentralized application.",
                  icon: <FaCode className="text-3xl text-purple-600" />,
                },
                {
                  title: "DApp Development",
                  description:
                    "We build user-friendly decentralized applications with intuitive interfaces for your blockchain solution.",
                  icon: <FaMobileAlt className="text-3xl text-purple-600" />,
                },
                {
                  title: "Deployment & Maintenance",
                  description:
                    "We deploy to mainnet and provide ongoing support, upgrades, and optimizations for your blockchain solution.",
                  icon: <FaCloud className="text-3xl text-purple-600" />,
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

                  <div className="hidden justify-center lg:flex lg:w-2/12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                  </div>

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
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="mb-6 text-3xl font-bold text-[#AE69DF] md:text-4xl">
                    Why Choose Us for Your Blockchain Development
                  </h2>

                  <p className="mb-8 text-lg text-gray-100">
                    At our company, we develop blockchain solutions tailored to
                    your unique business needs — not one-size-fits-all
                    implementations. Our expert team focuses on building secure,
                    scalable decentralized systems that align with your goals
                    and drive real results.
                  </p>

                  <ul className="mb-10 space-y-4">
                    {[
                      "Expertise in Multiple Blockchain Platforms",
                      "Custom-Built Blockchain Solutions",
                      "Trusted by Global Clients",
                      "Seamless System Integration",
                      "Security-First Approach",
                      "Committed to Decentralization Principles",
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
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      width={600}
                      height={400}
                      src="/images/extra-service/why.jpg"
                      alt="Blockchain Development Team"
                      className="h-[400px] w-full object-cover transition-all duration-500 group-hover:scale-105 md:h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/10 mix-blend-overlay"></div>
                    <div className="absolute -right-4 -bottom-4 z-0 h-24 w-24 rounded-full bg-purple-500/20"></div>
                    <div className="absolute -top-4 -left-4 z-0 h-16 w-16 rounded-full bg-purple-500/20"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Dark Purple Theme */}
        <section className="relative bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-6 py-28 text-white">
          <div className="absolute inset-0 z-0 bg-[url('/images/extra-service/blockchain.jpg')] bg-cover bg-center opacity-70"></div>
          <div className="absolute inset-0 z-0 bg-black/50"></div>

          <div className="relative z-10 container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-6 text-3xl font-bold text-[#c47be6] md:text-4xl">
                Ready to Leverage Blockchain for Your Business?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl">
                Contact our blockchain experts today to discuss how we can help
                you solve complex challenges and unlock new opportunities with
                decentralized technology.
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
                  href="https://wa.link/vfj7c9"
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

export default BlockchainServicesPage;
