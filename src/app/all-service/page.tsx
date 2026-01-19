// import AboutUs from "@/components/About/AboutPage";
import AictumBot from "@/components/AictumBot";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {AllServiceCard} from "@/components/Service/AllServiceCard";

import { Metadata } from "next";
import { generateMetadata as genMeta, siteConfig, generateBreadcrumbSchema, createJsonLd } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Our Services - AI, ML, Blockchain & Digital Solutions | Aictum",
  description: "Explore our comprehensive range of AI, Machine Learning, Blockchain, Computer Vision, NLP, Cloud Computing, and Digital Transformation services. Custom solutions for enterprise success.",
  keywords: [
    "AI services",
    "machine learning services",
    "blockchain development",
    "computer vision solutions",
    "natural language processing",
    "cloud computing services",
    "digital transformation",
    "custom software development",
    "enterprise AI solutions",
    "ML consulting",
    "AI consulting services",
    "technology solutions"
  ],
  canonical: `${siteConfig.url}/all-service`,
  ogImage: "/images/services/services-og.jpg"
});

const AllService = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/all-service" }
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />

      <AictumBot />
      <Breadcrumb
        pageName="All Services"
        description="We are a global technology powerhouse dedicated to transforming businesses through innovative digital solutions. 
      Since our founding, we've been pushing boundaries and redefining what's possible in the tech industry."
      />
      <AllServiceCard />
    </>
  );
};

export default AllService;
