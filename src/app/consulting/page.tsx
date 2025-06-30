"use client";
import CountUp from "react-countup";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaLaptopCode,
  FaBusinessTime,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaNetworkWired,
  FaMobileAlt,
  FaRegLightbulb,
  FaSearchDollar,
  FaBookOpen,
  FaSyncAlt,
} from "react-icons/fa";
import Image from "next/image";

const TrainingConsultingPage = () => {
  const services = [
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Corporate Training",
      description:
        "Customized training programs for businesses to upskill their workforce in the latest technologies and methodologies.",
      features: [
        "Technical Skill Development",
        "Leadership Training",
        "Team Building Workshops",
        "Industry-Specific Curriculum",
      ],
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Technical Training",
      description:
        "Hands-on technical training in programming, cloud computing, cybersecurity, and other in-demand tech skills.",
      features: [
        "Programming Languages",
        "Cloud Certification Prep",
        "DevOps Practices",
        "AI/ML Fundamentals",
      ],
    },
    {
      icon: <FaBusinessTime className="text-4xl" />,
      title: "Business Consulting",
      description:
        "Strategic consulting services to help organizations optimize operations and drive digital transformation.",
      features: [
        "Process Optimization",
        "Digital Strategy",
        "Change Management",
        "Performance Improvement",
      ],
    },
    {
      icon: <FaUserGraduate className="text-4xl" />,
      title: "Professional Certification",
      description:
        "Preparation courses for industry-recognized certifications across various technology and business domains.",
      features: [
        "Certification Exam Prep",
        "Practice Tests",
        "Study Materials",
        "Personalized Coaching",
      ],
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Management Consulting",
      description:
        "Expert guidance to improve organizational performance through effective management strategies.",
      features: [
        "Strategic Planning",
        "Operational Excellence",
        "Talent Management",
        "Business Analytics",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "IT Security Training",
      description:
        "Comprehensive cybersecurity training programs for individuals and organizations.",
      features: [
        "Security Fundamentals",
        "Ethical Hacking",
        "Compliance Training",
        "Risk Management",
      ],
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Soft Skills Development",
      description:
        "Training programs to enhance communication, leadership, and interpersonal skills.",
      features: [
        "Communication Skills",
        "Emotional Intelligence",
        "Conflict Resolution",
        "Presentation Skills",
      ],
    },
    {
      icon: <FaBookOpen className="text-4xl" />,
      title: "E-Learning Solutions",
      description:
        "Custom e-learning platforms and content development for digital training initiatives.",
      features: [
        "LMS Implementation",
        "Course Development",
        "Interactive Content",
        "Learning Analytics",
      ],
    },
    {
      icon: <FaSyncAlt className="text-4xl" />,
      title: "Change Management",
      description:
        "Support your teams through digital transformation with structured change initiatives.",
      features: [
        "Organizational alignment",
        "Stakeholder engagement",
        "Communication strategy",
        "Adoption tracking",
      ],
    },
  ];

  const industries = [
    {
      name: "Technology",
      description:
        "Technical training and consulting for software companies and IT departments.",
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
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      description:
        "Training for healthcare professionals and consulting for medical institutions.",
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
        "Financial training programs and consulting for banks and financial institutions.",
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
      name: "Education",
      description:
        "Professional development for educators and consulting for academic institutions.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      name: "Manufacturing",
      description:
        "Operational training and consulting for manufacturing organizations.",
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
      name: "Government",
      description:
        "Specialized training and consulting services for public sector organizations.",
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
      <Head>
        <title>Training & Consulting Services | YourCompany</title>
        <meta
          name="description"
          content="Professional training and consulting services to transform your organization through knowledge and strategic guidance"
        />
        <meta
          name="keywords"
          content="corporate training, business consulting, professional development, management consulting, technical training, leadership development"
        />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gray-900 px-6 pt-24 pb-16 text-white">
          <div className="absolute inset-0 bg-[url('/images/extra-service/C-effect.jpg')] bg-cover bg-center opacity-30"></div>

          <div className="relative z-10 container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="mb-4 text-4xl font-bold md:text-4xl">
                  Upgrade Your Team with{" "}
                  <span className="text-purple-500">IT Consulting</span>
                </h1>
                <p className="md:text-s max-w-1xl mx-auto text-base">
                  We empower teams with practical IT skills and expert
                  consulting to solve real business challenges. Our tailored
                  programs help organizations boost capabilities and drive
                  digital growth.
                </p>
              </motion.div>

              {/* Stats with Counting Animation and + symbol */}
              <div className="my-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { value: 500, label: "Training Programs" },
                  { value: 1000, label: "Professionals Trained" },
                  { value: 200, label: "Consulting Clients" },
                  { value: 50, label: "Regions Impacted" },
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
                    Explore Our Services
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
                Trusted by leading organizations
              </h3>
            </motion.div>
            <div className="flex flex-wrap items-center justify-center gap-14 md:gap-24">
              {[
                "/images/collab/energyfi.svg",
                "/images/collab/crypto.svg",
                "/images/collab/wenbit-2.svg",
                "/images/collab/neo.svg",
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

        {/* About Services Section - Dark Purple Theme */}
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
                      src="/images/extra-service/consulting.jpg"
                      alt="Training and Consulting Team"
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
                  Transformative Training & Consulting Services
                </h2>
                <p className="mb-6 text-base text-white md:text-lg">
                  Our training and consulting services are designed to empower
                  organizations and individuals with the knowledge, skills, and
                  strategies needed to excel in today&apos;s competitive landscape.
                  With a focus on practical application and measurable results,
                  we deliver solutions that drive real impact.
                </p>

                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      text: "120+ Training Programs covering technical and soft skills",
                      bold: "120+ Training Programs",
                    },
                    {
                      text: "95% Client Satisfaction rate with our training delivery",
                      bold: "95% Client Satisfaction",
                    },
                    {
                      text: "50+ Industry Experts including certified trainers and consultants",
                      bold: "50+ Industry Experts",
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
                  Learn About Our Approach
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
                Comprehensive Training & Consulting Solutions
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                We deliver customized training programs and strategic consulting
                services tailored to your specific organizational needs and
                industry challenges.
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
                          Key Areas:
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
                Training & Consulting Across Industries
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Our expertise spans multiple sectors, delivering
                industry-specific training and consulting solutions that drive
                real business impact.
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
                  Let&apos;s Discuss Your{" "}
                  <span className="text-purple-900">
                    Training & Consulting Needs
                  </span>
                </h1>
                <p className="mb-6 text-base text-[#3b3a3c] md:text-lg">
                  Our team offers practical training programs and consulting
                  services tailored to your goals. Let&apos;s figure out what makes
                  sense for your organization—no pressure, just clarity.
                </p>
                <a
                  href="https://calendly.com/team-aictum"
                  target="_blank"
                  className="self-start rounded-full bg-purple-700 px-6 py-2 text-base font-bold text-[#ffffff] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:shadow-xl md:px-8 md:py-3 md:text-lg"
                >
                  Schedule a Consultation
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
                    src="/images/extra-service/discus.jpg"
                    alt="Consultation Meeting"
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
                Training & Consulting Case Studies
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-white"
              >
                Discover how we&apos;ve helped organizations across industries
                develop their workforce and optimize operations through our
                training and consulting services.
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
                  className="absolute inset-0 bg-[url('/images/extra-service/leader.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.5)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      C
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      Corporate Training
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Leadership Development Program
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Implemented a 12-month leadership development program for a
                    Fortune 500 company, resulting in 85% of participants being
                    promoted to higher leadership roles within two years.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        85% Promotion Rate • 200+ Leaders Trained
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
                  className="absolute inset-0 bg-[url('/images/extra-service/business-consult.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: "brightness(0.6)",
                  }}
                ></div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#572b7d] font-bold text-white">
                      B
                    </div>
                    <span className="text-sm font-semibold text-[#d8a7ef]">
                      Business Consulting
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#d8a7ef]">
                    Data Governance & Security Training
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Developed and delivered HIPAA-compliant training for 2,000+
                    staff and implemented data security best practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#d8a7ef]">Results:</div>
                      <div className="font-bold text-white">
                        100% Compliance • 90% Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section - Training Roadmap (Light Theme) */}
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
                  Our Methodology
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-3xl font-bold text-purple-900 md:text-4xl"
              >
                The Consulting & Training Process
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-purple-800"
              >
                A structured approach to ensure maximum impact and measurable
                results
              </motion.p>
            </motion.div>

            <div className="relative space-y-16">
              <div className="absolute left-1/2 z-0 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-purple-300 via-purple-500 to-purple-400 lg:block" />

              {[
                {
                  title: "Needs Assessment",
                  description:
                    "We analyze your current state, challenges, and goals to identify gaps and opportunities.",
                  icon: <FaSearchDollar className="text-3xl text-purple-600" />,
                },
                {
                  title: "Solution Design",
                  description:
                    "Customized program development tailored to your specific requirements and objectives.",
                  icon: <FaRegLightbulb className="text-3xl text-purple-600" />,
                },
                {
                  title: "Delivery & Engagement",
                  description:
                    "Interactive workshops, training sessions, or consulting engagements with expert practitioners.",
                  icon: <FaBookOpen className="text-3xl text-purple-600" />,
                },
                {
                  title: "Implementation Support",
                  description:
                    "Hands-on guidance to apply new knowledge and strategies in your environment.",
                  icon: (
                    <FaChalkboardTeacher className="text-3xl text-purple-600" />
                  ),
                },
                {
                  title: "Impact Measurement",
                  description:
                    "Evaluation of outcomes and continuous improvement recommendations.",
                  icon: <FaChartLine className="text-3xl text-purple-600" />,
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
                    Why Organizations Choose Our Consulting & Training
                  </h2>

                  <p className="mb-8 text-lg text-gray-100">
                    We combine deep technical expertise with practical business
                    knowledge to deliver solutions that drive real impact. Our
                    approach is tailored, hands-on, and results-oriented.
                  </p>

                  <ul className="mb-10 space-y-4">
                    {[
                      "Industry-recognized experts",
                      "Customized learning paths",
                      "Practical, hands-on approach",
                      "Measurable business impact",
                      "Flexible delivery options",
                      "Continuous support",
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
                      src="/images/extra-service/why-choose.jpg"
                      alt="Training Session"
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
          <div className="absolute inset-0 z-0 bg-[url('/images/extra-service/consult.jpg')] bg-cover bg-center opacity-70"></div>
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
                Ready to Transform Your Organization?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl">
                Whether you need strategic consulting or technical training, our
                experts are ready to help you build capabilities and solve
                complex challenges.
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

export default TrainingConsultingPage;
