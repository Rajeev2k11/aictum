"use client";

import { useSearchParams } from "next/navigation";
import { servicesData } from "@/components/Service/data";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("service");

  if (!serviceName || !servicesData[serviceName]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2d1857] via-[#3a206e] to-[#1a102e] text-white px-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Service not found</h1>
      </div>
    );
  }

  const service = servicesData[serviceName];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2d1857] via-[#3a206e] to-[#1a102e] text-white px-4 py-8 md:py-14 lg:py-20 flex flex-col items-center">
      {/* Card Container */}
      <section className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-[#5f3dc4]/30 p-6 md:p-10 mb-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a084ee] via-[#9345e0] to-[#6c2eb7] mb-4 text-center drop-shadow-lg">
          {service.title}
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[#e0d7fa] text-center mb-8">
          {service.description}
        </p>

        {/* Images */}
        <div
          className={`grid gap-6 mb-8 ${
            service.images.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {service.images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-52 md:h-64 rounded-xl overflow-hidden border-2 border-[#a084ee]/30 shadow-lg hover:scale-[1.03] transition-transform duration-300 bg-[#2d1857]/60"
            >
              <Image
                src={src}
                alt={`${service.title} image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        {/* Content Points */}
        <ul className="space-y-5">
          {service.content.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow border border-[#a084ee]/20"
            >
              <FaCheckCircle className="flex-shrink-0 mt-1 text-[#a084ee]" size={22} />
              <p className="text-[#e0d7fa] text-base md:text-lg">{point}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}