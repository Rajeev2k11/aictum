"use client";
import AictumBot from "@/components/AictumBot";
import CountUp from "react-countup";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaNetworkWired,
  FaRegLightbulb,
  FaSearchDollar,
  FaCogs,
  FaUsers,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const ProductDevelopmentPage = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Web Application Development",
      description:
        "Custom web applications built with modern frameworks to deliver exceptional user experiences and business value.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Single Page Applications",
        "CMS Development",
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that engage users and drive growth.",
      features: [
        "iOS & Android Development",
        "React Native Apps",
        "UI/UX Optimization",
        "App Store Optimization",
      ],
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Enterprise Software",
      description:
        "Scalable enterprise solutions that streamline operations, improve efficiency, and integrate with existing systems.",
      features: [
        "ERP Systems",
        "CRM Development",
        "Workflow Automation",
        "Legacy System Modernization",
      ],
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "SaaS Product Development",
      description:
        "Cloud-based software solutions with subscription models that deliver continuous value to customers.",
      features: [
        "Multi-tenant Architecture",
        "Subscription Billing",
        "Scalable Infrastructure",
        "API Integrations",
      ],
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging interfaces that drive adoption and satisfaction.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Interaction Design",
        "Usability Testing",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing services to ensure your product meets the highest standards of quality and reliability.",
      features: [
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "QA Process Consulting",
      ],
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "API Development",
      description:
        "Robust API solutions that enable seamless integration between systems and third-party services.",
      features: ["RESTful APIs", "GraphQL", "Webhooks", "Developer Portals"],
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "MVP Development",
      description:
        "Rapid development of minimum viable products to validate ideas and accelerate time-to-market.",
      features: [
        "Lean Development",
        "User Feedback Integration",
        "Iterative Improvements",
        "Investor-ready Products",
      ],
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Product Maintenance & Support",
      description:
        "Ensure long-term product stability through proactive maintenance, updates, and performance monitoring.",
      features: [
        "Bug Fixes & Patches",
        "Performance Optimization",
        "Version Upgrades",
        "Uptime Monitoring",
      ],
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      description:
        "Digital health solutions, patient portals, telemedicine platforms, and medical device software.",
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
      name: "FinTech",
      description:
        "Digital banking solutions, payment processing, investment platforms, and financial analytics.",
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
      name: "E-Commerce",
      description:
        "Online marketplaces, retail platforms, inventory management, and personalized shopping experiences.",
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
      name: "Education",
      description:
        "E-learning platforms, LMS systems, educational apps, and virtual classroom solutions.",
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
      name: "Logistics",
      description:
        "Supply chain management, fleet tracking, warehouse optimization, and delivery coordination systems.",
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
      name: "Media & Entertainment",
      description:
        "Streaming platforms, content management systems, OTT solutions, and interactive media applications.",
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
    <AictumBot />
      <Head>
        <title>Product Development Services | YourCompany</title>
        <meta
          name="description"
          content="End-to-end product development services to transform your ideas into successful digital products"
        />
        <meta
          name="keywords"
          content="product development, web development, mobile apps, SaaS, enterprise software, UI/UX design"
        />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gray-900 px-6 pt-24 pb-16 text-white">
          <div className="absolute inset-0 bg-[url('/images/extra-service/D-effect.jpg')] bg-cover bg-center opacity-30"></div>

          <div className="relative z-10 container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="mb-4 text-4xl font-bold md:text-4xl">
                  Custom Digital{" "}
                  <span className="text-purple-500">Product Development</span>
                </h1>
                <p className="md:text-s max-w-1xl mx-auto text-base">
                  We design, develop, and deliver custom digital products
                  tailored to your business needs. From MVPs to full-scale
                  platforms, we turn ideas into powerful, user-focused solutions
                  using modern technologies and agile practices.
                </p>
              </motion.div>

              {/* Stats with Counting Animation and + symbol */}
              <div className="my-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { value: 120, label: "Digital Products" },
                  { value: 85, label: "Custom Apps" },
                  { value: 65, label: "Enterprise Product" },
                  { value: 45, label: "Global Reach" },
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

        {/* About Product Development Services Section - Dark Purple Theme */}
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
                    <img
                      src="/images/extra-service/develop.jpg"
                      alt="Product Development Team"
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
                  Comprehensive Product Development Services
                </h2>
                <p className="mb-6 text-base text-white md:text-lg">
                  Our product development services cover the entire lifecycle
                  from ideation to launch and scaling. We combine technical
                  expertise with business acumen to build products that solve
                  real problems, delight users, and drive growth.
                </p>

                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      text: "120+ Successful Products delivered to market",
                      bold: "120+ Successful Products",
                    },
                    {
                      text: "95% Client Satisfaction rate with our development process",
                      bold: "95% Client Satisfaction",
                    },
                    {
                      text: "50+ Product Experts including engineers, designers, and PMs",
                      bold: "50+ Product Experts",
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
                End-to-End Product Development
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                We deliver complete product development services tailored to
                your specific business needs and market requirements.
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
                Product Development Across Industries
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Our product development expertise spans multiple verticals,
                delivering industry-specific solutions that drive real business
                impact.
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
                  Let's Talk About Your{" "}
                  <span className="text-purple-900">Product Vision</span>
                </h1>
                <p className="mb-6 text-base text-[#3b3a3c] md:text-lg">
                  Our team offers practical product development services
                  tailored to your goals. Let's figure out what makes sense for
                  your business—no pressure, just clarity.
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
                  <img
                    src="/images/extra-service/let's.jpg"
                    alt="Product Development Discussion"
                    loading="lazy"
                    className="h-90 w-full rounded-xl object-cover"
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
                Product Development Case Studies
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Discover how we've helped businesses across industries build
                successful digital products that solve real problems.
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
                  className="absolute inset-0 bg-[url('/images/extra-service/saas.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.6)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      S
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      SaaS Platform
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Project Management SaaS
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Developed a comprehensive project management platform with
                    real-time collaboration features, serving over 500
                    businesses and 50,000+ active users.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        500+ Businesses • 50K+ Users
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
                  className="absolute inset-0 bg-[url('/images/extra-service/fitnes.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.5)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      M
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      Mobile App
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Fitness Tracking Application
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Created a cross-platform fitness app with AI-powered workout
                    recommendations and nutrition tracking, achieving 250,000
                    downloads in first year.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        250K Downloads • 4.8 Rating
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section - Product Development Roadmap (Light Theme) */}
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
                Our Product Development Process
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                A structured, proven methodology to deliver successful digital
                products
              </motion.p>
            </motion.div>

            <div className="relative space-y-16">
              <div className="absolute left-1/2 z-0 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-purple-300 via-purple-500 to-purple-400 lg:block" />

              {[
                {
                  title: "Discovery & Research",
                  description:
                    "We analyze market needs, define product vision, and validate concepts through user research and competitive analysis.",
                  icon: <FaSearchDollar className="text-3xl text-purple-600" />,
                },
                {
                  title: "Design & Prototyping",
                  description:
                    "We create user flows, wireframes, and interactive prototypes to visualize the product experience before development.",
                  icon: <FaRegLightbulb className="text-3xl text-purple-600" />,
                },
                {
                  title: "Development",
                  description:
                    "Our engineers build the product using modern technologies, following agile methodologies for iterative delivery.",
                  icon: <FaCode className="text-3xl text-purple-600" />,
                },
                {
                  title: "Testing & QA",
                  description:
                    "We conduct rigorous testing including functional, performance, security, and usability testing to ensure quality.",
                  icon: <FaShieldAlt className="text-3xl text-purple-600" />,
                },
                {
                  title: "Launch & Growth",
                  description:
                    "We deploy the product and provide ongoing support, analytics, and iterative improvements based on user feedback.",
                  icon: <FaRocket className="text-3xl text-purple-600" />,
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
                    Why Businesses Trust Us to Build Their Products
                  </h2>

                  <p className="mb-8 text-lg text-gray-100">
                    At our company, we develop products that solve real problems
                    and deliver exceptional user experiences. Our expert team
                    focuses on building scalable, high-quality solutions that
                    align with your business goals and market needs.
                  </p>

                  <ul className="mb-10 space-y-4">
                    {[
                      "Full-Cycle Product Development",
                      "User-Centered Design Approach",
                      "Agile Development Methodology",
                      "Cross-Platform Expertise",
                      "Quality Assurance Focus",
                      "Ongoing Support & Maintenance",
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
                    <img
                      src="/images/extra-service/why-business.jpg"
                      alt="Product Development Team"
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
          <div className="absolute inset-0 z-0 bg-[url('/images/extra-service/product.jpg')] bg-cover bg-center opacity-90"></div>
          <div className="absolute inset-0 z-0 bg-black/30"></div>

          <div className="relative z-10 container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-6 text-3xl font-bold text-[#d8a7ef] md:text-4xl">
                Ready to Build Your Next Great Product?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl">
                Contact our product development experts today to discuss how we
                can help you turn your vision into a successful digital product.
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

export default ProductDevelopmentPage;
