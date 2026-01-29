import AictumBot from "@/components/AictumBot";
import AboutUs from "@/components/About/AboutPage";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { generateMetadata as genMeta, siteConfig, generateOrganizationSchema, generateBreadcrumbSchema, createJsonLd } from "@/lib/seo";

export const metadata = genMeta({
  title: "About Aictum - Leading AI, ML & Blockchain Technology Company",
  description: "Learn about Aictum's mission to transform businesses through innovative AI, Machine Learning, and Blockchain solutions. Meet our expert team and discover our technology journey since inception.",
  keywords: [
    "about aictum",
    "AI company",
    "technology company",
    "machine learning experts",
    "blockchain specialists",
    "our team",
    "company history",
    "technology vision",
    "software development company",
    "IT consulting firm",
    "digital transformation experts",
    "innovation leaders"
  ],
  canonical: `${siteConfig.url}/about`,
  ogImage: "/images/about/about-og.jpg"
});

const AboutPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" }
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(organizationSchema)}
      />

      <AictumBot />
      <Breadcrumb
        pageName="About Us"
        description="We are a global technology powerhouse dedicated to transforming businesses through innovative digital solutions. 
      Since our founding, we've been pushing boundaries and redefining what's possible in the tech industry."
      />
      <AboutUs />
    </>
  );
};

export default AboutPage;
