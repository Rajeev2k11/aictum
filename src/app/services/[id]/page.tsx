"use client";

import { useSearchParams } from "next/navigation";
import { servicesData } from "@/components/Service/data";
import Image from "next/image";
import {
  FaCheck,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("service");

  if (!serviceName || !servicesData[serviceName]) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] px-4 text-white">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Service not found
        </h1>
      </div>
    );
  }

  const service = servicesData[serviceName];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center md:py-28">
        <div className="mb-5 inline-block rounded-full bg-[#57207c] px-5 py-2">
          <span className="text-sm font-medium tracking-wider text-[#ffffff] uppercase">
            Our Services
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-[#b06de0] to-[#af81e2] bg-clip-text text-transparent">
            {service.title}
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#ffffff] opacity-90 md:text-xl">
          {service.description}
        </p>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 pb-20">
        {/* Feature Showcase */}
        <div className="mb-20 flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative h-80 overflow-hidden rounded-xl border border-[#a084ee]/30 md:h-[450px]">
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
            <h2 className="mb-8 text-2xl font-bold text-[#AE69DF] md:text-3xl">
              Why {service.title}?
            </h2>

            <div className="space-y-6">
              {service.content.slice(0, 4).map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 text-[#AE69DF]">
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
            <h2 className="mb-12 text-center text-2xl font-bold text-[#AE69DF] md:text-3xl">
              Key Features
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, idx) =>
                typeof feature === "object" &&
                feature !== null &&
                "title" in feature &&
                "description" in feature ? (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#a084ee]/20 bg-[#141418] p-6 transition-colors hover:border-[#8a5af9]/50"
                  >
                    <div className="mb-3 text-2xl text-[#AE69DF]">
                      <FaLightbulb />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#AE69DF]">
                      {feature.title}
                    </h3>
                    <p className="text-[#ffffff]">{feature.description}</p>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#a084ee]/20 bg-[#141418] p-6 transition-colors hover:border-[#8a5af9]/50"
                  >
                    <div className="mb-3 text-2xl text-[#AE69DF]">
                      <FaLightbulb />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#AE69DF]">
                      {typeof feature === "string" ? feature : "Feature"}
                    </h3>
                  </div>
                ),
              )}
            </div>
          </section>
        )}

        {/* Benefits & Technologies */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row">
          {service.benefits && (
            <div className="rounded-xl bg-[#141418] p-8 lg:w-1/2">
              <h2 className="mb-8 flex items-center text-2xl font-bold text-[#AE69DF]">
                <FaChartLine className="mr-3 text-[#AE69DF]" />
                Business Benefits
              </h2>

              <ul className="space-y-5">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0 text-[#9740f5]">
                      <IoIosArrowForward />
                    </div>
                    <p className="text-lg text-[#fefeff]">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.technologies && (
            <div className="rounded-xl bg-[#22113a00] p-8 lg:w-1/2">
              <h2 className="mb-8 flex items-center text-2xl font-bold text-[#AE69DF]">
                <FaShieldAlt className="mr-3 text-[#AE69DF]" />
                Technologies We Use
              </h2>

              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-[#6c3bd9]/50 bg-[#141418] px-4 py-2 text-sm text-[#f5f5f5]"
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
          <section className="mb-20 rounded-xl bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7] p-8 md:p-12">
            <h2 className="mb-12 text-center text-2xl font-bold text-purple-900 md:text-3xl">
              Why Choose Our Solution?
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {service.whyAictum.map((reason, idx) => {
                // Handle both string and object types
                if (typeof reason === "string") {
                  const words = reason.split(" ");
                  const title =
                    words.slice(0, 4).join(" ") +
                    (words.length > 4 ? "..." : "");

                  return (
                    <div key={idx} className="flex items-start">
                      <div className="mr-5 flex-shrink-0 text-2xl text-[#AE69DF]">
                        <FaStar />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                          {title}
                        </h3>
                        <p className="text-[#3f3f3f]">{reason}</p>
                      </div>
                    </div>
                  );
                } else if (
                  typeof reason === "object" &&
                  reason.title &&
                  reason.description
                ) {
                  return (
                    <div key={idx} className="flex items-start">
                      <div className="mr-5 flex-shrink-0 text-2xl text-[#AE69DF]">
                        <FaStar />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                          {reason.title}
                        </h3>
                        <p className="text-[#3f3f3f]">{reason.description}</p>
                      </div>
                    </div>
                  );
                }
                return null; // Skip invalid items
              })}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#AE69DF] md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-[#e2e1e3]">
            Let&apos;s discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" passHref>
              <button className="rounded-lg bg-gradient-to-r from-[#4d0e75] to-[#7739a7] px-8 py-3.5 font-semibold text-white transition-opacity duration-300 hover:opacity-90">
                Contact Our Team
              </button>
            </Link>
            <Link href="/all-service" passHref>
              <button className="rounded-lg border-2 border-[#8a44a6] bg-transparent px-8 py-3.5 font-semibold text-[#ededed] transition-colors duration-300 hover:bg-[#c9b4ff]/10">
                View All Services
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
