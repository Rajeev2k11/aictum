import AictumBot from "@/components/AictumBot";
import CompanyValue from "@/components/About/CompanyValue";
import Processes from "@/components/About/Processes";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Enquiry from "@/components/Contact/Enquiry";  
import TechStackIcon from "@/components/TechStack/TechStackIcon";
import EnterpriseIntegration from "@/components/Enterprises/EnterpriseIntegration";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import HiringModels from "@/components/HiringModels/HiringModels";
import FAQ from "@/components/FAQ/FAQ";
import Video from "@/components/Video";
import { Metadata } from "next";
import { generateMetadata as genMeta, siteConfig, generateOrganizationSchema, generateWebsiteSchema, createJsonLd } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Aictum - Leading AI, ML & Blockchain Development Company",
  description: "Transform your business with cutting-edge AI, Machine Learning, Blockchain, and Digital Transformation solutions. Trusted by enterprises worldwide for innovative technology services.",
  keywords: [
    "AI development company",
    "machine learning solutions",
    "blockchain development services",
    "artificial intelligence consulting",
    "custom AI solutions",
    "ML development services",
    "computer vision development",
    "NLP services",
    "enterprise AI solutions",
    "digital transformation",
    "technology consulting",
    "software development company"
  ],
  canonical: siteConfig.url,
  ogImage: "/images/hero/hero-og.jpg"
});

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(organizationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(websiteSchema)}
      />

      <AictumBot />
      <ScrollUp />
      <Hero />
      {/* <Brands /> */}
      <Features />
      <Video />


      <CompanyValue />
      <Testimonials />
      {/* <Processes /> */}
    
      
      <TechStack />
      <EnterpriseIntegration />
      <TechStackIcon />
      <HiringModels />
      <FAQ />
  
   
      <Blog />
      <Enquiry />
      
    </>
  );
}
