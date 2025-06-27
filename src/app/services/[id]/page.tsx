"use client";

import { useSearchParams } from "next/navigation";
import { servicesData } from "@/components/Service/data";
import Image from "next/image";
import { 
  FaCheck, FaLightbulb, FaChartLine, FaShieldAlt, 
  FaHandshake, FaStar, FaRocket 
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("service");

  if (!serviceName || !servicesData[serviceName]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white px-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Service not found</h1>
      </div>
    );
  }

  const service = servicesData[serviceName];

  return (
    <main className="min-h-screen bg-gradient-to-br bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
        <div className="inline-block px-5 py-2 mb-5 bg-[#57207c] rounded-full">
          <span className="text-[#ffffff] text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b06de0] to-[#af81e2]">
            {service.title}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#ffffff] opacity-90 leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Feature Showcase */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden border border-[#a084ee]/30">
              <Image
                src={service.images[0]}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#AE69DF]">
              Why {service.title}?
            </h2>
            
            <div className="space-y-6">
              {service.content.slice(0, 4).map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#AE69DF]">
                    <FaCheck className="text-lg" />
                  </div>
                  <p className="text-lg text-[#ffffff]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        {service.features && (
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#AE69DF]">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#141418] p-6 rounded-xl border border-[#a084ee]/20 hover:border-[#8a5af9]/50 transition-colors"
                >
                  <div className="text-[#AE69DF] text-2xl mb-3">
                    <FaLightbulb />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#AE69DF]">Feature {idx + 1}</h3>
                  <p className="text-[#ffffff]">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits & Technologies */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {service.benefits && (
            <div className="lg:w-1/2 bg-[#141418] p-8 rounded-xl">
              <h2 className="flex items-center text-2xl font-bold mb-8 text-[#AE69DF]">
                <FaChartLine className="mr-3 text-[#AE69DF]" />
                Business Benefits
              </h2>
              
              <ul className="space-y-5">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-[#9740f5]">
                      <IoIosArrowForward />
                    </div>
                    <p className="text-lg text-[#fefeff]">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.technologies && (
            <div className="lg:w-1/2 bg-[#22113a00] p-8 rounded-xl">
              <h2 className="flex items-center text-2xl font-bold mb-8 text-[#AE69DF]">
                <FaShieldAlt className="mr-3 text-[#AE69DF]" />
                Technologies We Use
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-[#141418] text-[#f5f5f5] rounded-lg text-sm border border-[#6c3bd9]/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Why Choose Us */}
        {service.whyAictum && (
          <section className="mb-20 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7] p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-purple-900">
              Why Choose Our Solution?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.whyAictum.map((reason, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mr-5 text-2xl text-[#AE69DF]">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Advantage {idx + 1}</h3>
                    <p className="text-[#3f3f3f]">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#AE69DF]">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#e2e1e3] mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" passHref>
              <button className="px-8 py-3.5 bg-gradient-to-r from-[#4d0e75] to-[#7739a7] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300">
                Contact Our Team
              </button>
            </Link>
            <Link href="/all-service" passHref>
              <button className="px-8 py-3.5 bg-transparent text-[#ededed] font-semibold rounded-lg border-2 border-[#8a44a6] hover:bg-[#c9b4ff]/10 transition-colors duration-300">
                View All Services
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}