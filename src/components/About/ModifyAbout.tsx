'use client';
import React from 'react';
import * as motion from 'motion/react-client';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b152e] via-voilet-950 to-[#20183d] text-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
            <span className='text-white'>About</span> Us
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl md:text-2xl text-purple-300 max-w-4xl mx-auto leading-relaxed"
          >
            We are a global technology powerhouse dedicated to transforming businesses through innovative digital solutions. 
            Since our founding, we've been pushing boundaries and redefining what's possible in the tech industry.
          </motion.p>
        </motion.section>

        {/* Purpose Section */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-semibold mb-8 text-purple-300 border-b border-purple-900 pb-3"
          >
            Our Purpose & Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ rotateY: 360, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="bg-[#2e2450] p-8 rounded-xl backdrop-blur-sm border border-purple-900 hover:border-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/10"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h3 className="text-2xl font-medium mb-4 text-purple-200">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations worldwide with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in creating tools that not only solve today's problems 
                but anticipate tomorrow's challenges.
              </p>
            </motion.div>
            <motion.div 
              initial={{ rotateY: 360, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="bg-[#2e2450] p-8 rounded-xl backdrop-blur-sm border border-purple-900 hover:border-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/10"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h3 className="text-2xl font-medium mb-4 text-purple-200">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the world's most trusted technology partner, recognized for our relentless pursuit of 
                excellence and our commitment to making a positive impact through technology. We envision 
                a future where our solutions become the backbone of digital transformation across industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-purple-300 border-b border-purple-900 pb-3"
          >
            Who We Are
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          >
            <StatCard number="20+" label="Years in Business" />
            <StatCard number="50+" label="Global Offices" />
            <StatCard number="150+" label="Products Launched" />
            <StatCard number="500+" label="Team Members" />
            <StatCard number="2000+" label="Satisfied Clients" />
            <StatCard number="10M+" label="Users Worldwide" />
          </motion.div>

          {/* Our Story Section - now split into text and image, no box */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-4 text-purple-200">Our Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2003 as a small startup with just three engineers, we've grown into a multinational 
                technology leader through relentless innovation and customer-focused solutions. Our journey has 
                been marked by milestones that reflect our commitment to pushing technological boundaries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What sets us apart is our culture of continuous learning and our belief that technology should 
                be both powerful and accessible. We invest heavily in research and development, with 30% of our 
                revenue dedicated to creating the next generation of solutions.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Story"
                className="rounded-xl shadow-lg max-w-xs md:max-w-sm w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-purple-300 border-b border-purple-900 pb-3"
          >
            Our Core Values
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <ValueCard 
              title="Innovation" 
              description="We don't just follow trends - we set them. Our R&D labs are constantly experimenting with emerging technologies to deliver groundbreaking solutions." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <ValueCard 
              title="Integrity" 
              description="We build trust through transparency. Every client relationship begins with honesty and is maintained through ethical business practices." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <ValueCard 
              title="Excellence" 
              description="Good enough never is. We pursue perfection in every line of code, every design, and every client interaction." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ValueCard 
              title="Collaboration" 
              description="We believe the best solutions come from diverse perspectives working together. Our flat hierarchy encourages open dialogue." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <ValueCard 
              title="Sustainability" 
              description="We build with the future in mind. Our solutions are designed to be energy-efficient and environmentally responsible." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
            <ValueCard 
              title="Empathy" 
              description="Technology should serve people. We listen deeply to understand real needs before crafting solutions." 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
          </motion.div>
        </section>

        {/* With Us You Can */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-purple-300 border-b border-purple-900 pb-3"
          >
            With Us You Can
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid md:grid-cols-2 gap-10"
          >
            <FeatureCard 
              title="Transform Your Business" 
              description="Leverage our expertise to completely reinvent your operations, customer experiences, and market positioning through digital transformation." 
            />
            <FeatureCard 
              title="Future-Proof Your Technology" 
              description="Our solutions are built with scalability and adaptability in mind, ensuring your tech stack evolves with your needs and the market." 
            />
            <FeatureCard 
              title="Accelerate Innovation" 
              description="Access our cutting-edge labs and innovation teams to co-create solutions that give you a competitive edge." 
            />
            <FeatureCard 
              title="Optimize Operations" 
              description="Streamline your processes with our intelligent automation and AI-powered workflow solutions that reduce costs and improve efficiency." 
            />
          </motion.div>
        </section>

        {/* Awards - Redesigned Section */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-purple-300 border-b border-purple-900 pb-3"
          >
            We Got Awarded
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AwardCard 
              title="Best DeFi Development Company Award 2023"
              issuer="Crypto Depo Daily"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
            />
            <AwardCard 
              title="Top Startup of Asia 2021"
              issuer="Bootstrap Lups.info"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
            <AwardCard 
              title="Top 3 Blockchain Startups 2022"
              issuer="Appengine.ai"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
            />
            <AwardCard 
              title="Top Indian Startups 2020"
              issuer="Best in Tech Awards"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <AwardCard 
              title="Best AI Solution Provider 2023"
              issuer="Tech Excellence Forum"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <AwardCard 
              title="Innovation Leader 2022"
              issuer="Global Tech Review"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
          </motion.div>
        </section>

        {/* Location */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-semibold mb-8 text-purple-300 border-b border-purple-900 pb-3"
          >
            Global Presence
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#2e2450] p-8 rounded-xl backdrop-blur-sm border border-purple-900 shadow-lg shadow-purple-900/10"
          >
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <h3 className="text-2xl font-medium mb-4 text-purple-200">Our Headquarters</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our global headquarters in San Francisco serves as our 
                  executive leadership and primary research facilities. This 200,000 sq ft campus 
                  includes state-of-the-art labs and collaborative workspaces.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Address:</strong> 123 Tech Boulevard, San Francisco, CA 94107<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Email:</strong> headquarters@company.com
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <h3 className="text-2xl font-medium mb-4 text-purple-200">Regional Offices</h3>
                <p className="text-gray-300 leading-relaxed">
                  We operate in major tech hubs across North America, Europe, Asia, and Australia. 
                  Our regional offices are strategically located to serve our global client base with 
                  local expertise and 24/7 support.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• London (EMEA Headquarters)</li>
                  <li>• Singapore (APAC Headquarters)</li>
                  <li>• Berlin (AI Research Center)</li>
                  <li>• Tokyo (IoT Innovation Lab)</li>
                </ul>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="h-96 bg-[#2e2450] rounded-xl flex items-center justify-center border border-purple-900"
            >
              <span className="text-purple-400 text-lg">Interactive World Map Component Would Go Here</span>
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center py-16 px-4"
        >
          <div className="max-w-4xl mx-auto bg-[#2e2450] p-8 md:p-12 rounded-xl backdrop-blur-sm border border-purple-900 shadow-lg shadow-purple-900/10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-200">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-purple-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're interested in hearing your ideas. Before we proceed, we'll send you a Non-Disclosure Agreement (NDA) to ensure the confidentiality of all information shared. Your privacy is our priority.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
            >
              <ContactOption 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
                title="Schedule"
              />
              <ContactOption 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
                title="Chat"
              />
              <ContactOption 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="Call"
              />
              <ContactOption 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Email"
              />
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

// Component for statistics cards
const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-[#2e2450] p-5 rounded-lg text-center border border-purple-900 hover:bg-[#2e2450] transition-colors duration-300 hover:border-purple-700 shadow-md shadow-purple-900/10"
    >
      <p className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
        {number}
      </p>
      <p className="text-md text-purple-300">{label}</p>
    </motion.div>
  );
};

// Component for core values
const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-[#2e2450] p-6 rounded-xl backdrop-blur-sm border border-purple-900 hover:border-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20"
    >
      <div className="text-purple-400 mb-5 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-3 text-purple-200">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Component for feature cards
const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-[#2e2450] p-8 rounded-xl backdrop-blur-sm border border-purple-900 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 hover:border-purple-700"
    >
      <h3 className="text-2xl font-medium mb-4 text-purple-200">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// New Award Card Component
const AwardCard: React.FC<{ title: string; issuer: string; icon: React.ReactNode }> = ({ 
  title, 
  issuer, 
  icon 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-[#2e2450] p-6 rounded-xl border border-purple-900 hover:border-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20"
    >
      <div className="flex items-start mb-4">
        <div className="text-purple-400 mr-4 mt-1">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-purple-200 mb-1">{title}</h3>
          <p className="text-sm text-purple-400">{issuer}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-xs text-purple-500 hover:text-purple-300 cursor-pointer transition-colors duration-300">
          View Certificate
        </span>
      </div>
    </motion.div>
  );
};

// Component for contact options
const ContactOption: React.FC<{ icon: React.ReactNode, title: string, description?: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.1, type: "spring" }}
      viewport={{ once: false }}
      className="bg-[#2e2450] p-4 rounded-lg border border-purple-900/50 hover:border-purple-700 transition-all duration-300 group shadow-md shadow-purple-900/10 flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="text-purple-400 group-hover:text-purple-300 mb-3 transition-colors duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-purple-200 mb-1 text-center">{title}</h3>
      {/* Description intentionally omitted */}
    </motion.div>
  );
};

export default AboutUs;