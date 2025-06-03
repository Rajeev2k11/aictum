"use client";

import { useSearchParams } from "next/navigation";
import { servicesData } from "@/components/Service/data";
import Image from "next/image";
import { FaCheckCircle, FaLightbulb, FaChartLine, FaTools, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import Link from "next/link";
import AllService from "@/app/all-service/page"; 

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("service");

  if (!serviceName || !servicesData[serviceName]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a102e] via-[#2d1857] to-[#3a206e] text-white px-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Service not found</h1>
      </div>
    );
  }

  const service = servicesData[serviceName];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a102e] via-[#2d1857] to-[#3a206e] text-white px-4 py-8 md:py-14 lg:py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center px-6 py-3 mb-6">
          <span className="text-[#c9b4ff] font-semibold text-3xl tracking-wide uppercase">
            Our Services
          </span>
        </div>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c9b4ff] via-[#9345e0] to-[#6c2eb7] mb-6 drop-shadow-lg">
          {service.title}
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-[#e0d7fa] opacity-90 leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Features */}
        <div className="lg:col-span-2 space-y-8">
{/* Images */}
<div className="w-full mb-8">
  <div className="relative w-full h-80 md:h-[32rem] rounded-2xl overflow-hidden border-2 border-[#a084ee]/30 shadow-xl bg-[#1a102e]/70">
    <Image
      src={service.images[0]}
      alt={`${service.title} image 1`}
      fill
      style={{ objectFit: "cover" }}
      priority
      sizes="100vw"
      className="hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
      <span className="text-white text-base font-medium drop-shadow">{service.title} in Action</span>
    </div>
  </div>
</div>

          {/* Key Features */}
          {service.features && (
            <div className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#c9b4ff] flex items-center gap-3">
                <FaTools className="text-[#a47cff]" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#2d1857]/60 p-4 rounded-lg border border-[#a084ee]/20">
                    <FaCheckCircle className="flex-shrink-0 mt-1 text-[#c9b4ff]" size={18} />
                    <p className="text-[#e0d7fa]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Content */}
          <div className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#c9b4ff] flex items-center gap-3">
              <GiProgression className="text-[#a47cff]" />
              Service Details
            </h2>
            <ul className="space-y-4">
              {service.content.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-[#2d1857]/60 p-4 rounded-lg border border-[#a084ee]/20">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#6c3bd9] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-[#e0d7fa]">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          {/* Benefits Card */}
          {service.benefits && (
            <div className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#c9b4ff] flex items-center gap-3">
                <FaChartLine className="text-[#a47cff]" />
                Business Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-[#c9b4ff]">
                      <FaLightbulb />
                    </div>
                    <p className="text-[#e0d7fa]">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Card */}
          {service.technologies && (
            <div className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#c9b4ff] flex items-center gap-3">
                <FaShieldAlt className="text-[#a47cff]" />
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#6c3bd9]/30 text-[#e0d7fa] rounded-full text-sm border border-[#6c3bd9]/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies Card */}
          {service.caseStudies && (
            <div className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#c9b4ff] flex items-center gap-3">
                <FaHandshake className="text-[#a47cff]" />
                Success Stories
              </h2>
              <ul className="space-y-4">
                {service.caseStudies.map((caseStudy, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-[#c9b4ff]">
                      <IoMdTime />
                    </div>
                    <p className="text-[#e0d7fa]">{caseStudy}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Static CTA Card */}
          <div className="bg-gradient-to-br from-[#6c3bd9] to-[#4b2d8a] rounded-2xl p-6 border border-[#c9b4ff]/50 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-white">Ready to Transform Your Business?</h3>
            <p className="text-[#e0d7fa] mb-5">Let&rsquo;s discuss how we can help you achieve your goals with our expertise.</p>
            <button className="w-full py-3 px-6 bg-white text-[#6c3bd9] font-semibold rounded-lg hover:bg-[#e0d7fa] transition-colors duration-300 shadow-md">
              Schedule a Free Consultation
            </button>
          </div>

          {/* Static Process Card */}
          <div className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#c9b4ff]">Our Process</h3>
            <ol className="space-y-4">
              {[
                "Discovery & Requirements Analysis",
                "Solution Design & Proposal",
                "Development & Implementation",
                "Testing & Quality Assurance",
                "Deployment & Training",
                "Ongoing Support & Optimization"
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6c3bd9] flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-[#e0d7fa]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Testimonial Section (Static) */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c9b4ff]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Their AI solutions transformed our customer service operations, reducing response times by 80%.",
              name: "Sarah Johnson",
              role: "CTO, TechCorp"
            },
            {
              quote: "The blockchain implementation was flawless and delivered ahead of schedule. Highly recommended!",
              name: "Michael Chen",
              role: "CEO, Finova"
            },
            {
              quote: "Exceptional mobile app development with attention to every detail. Our users love the experience.",
              name: "Emma Rodriguez",
              role: "Product Manager, ShopEZ"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#22113a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#a084ee]/30 hover:border-[#c9b4ff]/50 transition-colors duration-300 shadow-lg">
              <div className="text-yellow-400 mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#e0d7fa] italic mb-4">{testimonial.quote}</p>
              <div className="text-[#c9b4ff] font-medium">
                <p>{testimonial.name}</p>
                <p className="text-sm text-[#e0d7fa]/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#c9b4ff]">Ready to Get Started?</h2>
        <p className="text-xl text-[#e0d7fa] mb-8 max-w-3xl mx-auto">
          Whether you need a custom solution or expert consultation, we&rsquo;re here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" passHref>
          <button className="px-8 py-3 bg-gradient-to-r from-[#c9b4ff] to-[#8a5af9] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
            Contact Our Team
          </button>
          </Link>
          <Link href="/all-service" passHref>
  <button className="px-8 py-3 bg-transparent text-[#c9b4ff] font-semibold rounded-lg border-2 border-[#c9b4ff] hover:bg-[#c9b4ff]/10 transition-colors duration-300">
    View All Services
  </button>
</Link>
        </div>
      </section>
    </main>
  );
}