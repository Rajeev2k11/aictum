'use client';
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const features = [
  {
    title: "INTELLIGENT",
    subtitle: "AI & ML Solutions",
    description:
      "Harness the power of artificial intelligence and machine learning to automate and enhance your business processes. From predictive analytics to real-time data insights, our advanced AI solutions streamline operations, improve efficiency, and drive smarter decisions."
  },
  {
    title: "SECURE",
    subtitle: "Blockchain Integration",
    description:
      "Experience unparalleled transparency and security with our custom blockchain solutions. We develop decentralized applications, secure smart contracts, and robust blockchain-based platforms to enhance trust and efficiency across your business ecosystem.",
  },
  {
    title: "VISIONARY",
    subtitle: "Computer Vision & NLP",
    description:
      "Gain insightful analytics and automated content management through our state-of-the-art Computer Vision and Natural Language Processing technologies. From facial recognition to intelligent chatbots, we equip your business with tools that improve user experience and operational accuracy.",
  },
  {
    title: "INNOVATIVE",
    subtitle: "Generative AI & Chatbots",
    description:
      "Transform customer interactions and content creation through our innovative generative AI and chatbot solutions. AICTUM's conversational AI agents deliver personalized, engaging experiences, while our generative models enable automated, compelling content production to captivate your audience.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Empowering the Digital Future with Innovation and Excellence"
          paragraph="With over 6+ years of industry expertise, we specialize in crafting impactful digital solutions for startups, enterprises, and visionary founders. From Web3 platforms to AI-driven applications, our work has empowered businesses to generate billions in revenue and connect with millions of users worldwide."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <SingleTestimonial
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Top Right Gradient Overlay */}
      <div className="absolute right-0 top-0 z-[-1] opacity-40">
        <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9345E0" />
              <stop offset="1" stopColor="#9345E0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9345E0" />
              <stop offset="1" stopColor="#9345E0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Left Gradient Waves */}
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30">
        <svg width="279" height="106" viewBox="0 0 279 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M-57 ${12 + i * 12}L50.0728 ${74.8548 + i * 11}C55.5501 ${79.0219 + i * 11} 70.8513 ${85.7589 + i * 11} 88.2373 ${79.3692 + i * 11}C109.97 ${71.3821 + i * 11} 116.861 ${60.9642 + i * 11} 156.615 ${63.7423 + i * 11}C178.778 ${65.291 + i * 11} 195.31 ${69.2985 + i * 11} 205.911 ${62.3533 + i * 11}C216.513 ${55.408 + i * 11} 224.994 ${47.7682 + i * 11} 243.016 ${49.1572 + i * 11}C255.835 ${50.1453 + i * 11} 265.278 ${50.8936 + i * 11} 278 ${45.3373 + i * 11}`}
                stroke={`url(#paint${i}_linear)`}
              />
            ))}
          </g>
          <defs>
            {[0, 1, 2, 3].map((i) => (
              <linearGradient
                key={i}
                id={`paint${i}_linear`}
                x1="256.267"
                y1={`${53.6717 + i * 11}`}
                x2="-40.8688"
                y2={`${8.15715 + i * 11}`}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9345E0" stopOpacity="0" />
                <stop offset="1" stopColor="#9345E0" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;