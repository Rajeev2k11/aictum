import AictumBot from "@/components/AictumBot";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { WorkTogether } from "@/components/About/WorkTogether";
import FAQ from "@/components/FAQ/FAQ";
import { Metadata } from "next";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { generateMetadata as genMeta, siteConfig, generateBreadcrumbSchema, createJsonLd } from "@/lib/seo";

export const metadata = genMeta({
  title: "Contact Aictum - Get in Touch with AI & Technology Experts",
  description: "Contact Aictum for AI, Machine Learning, Blockchain consulting and development services. Schedule a free consultation to discuss your project. We're here to help transform your business.",
  keywords: [
    "contact aictum",
    "AI consultation",
    "get quote",
    "contact AI company",
    "schedule consultation",
    "business inquiry",
    "technology consulting",
    "AI services inquiry",
    "blockchain consultation",
    "software development quote",
    "project discussion",
    "free consultation"
  ],
  canonical: `${siteConfig.url}/contact`,
  ogImage: "/images/contact/contact-og.jpg"
});



const ContactPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" }
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.company.name,
    "url": siteConfig.url,
    "telephone": siteConfig.company.phone,
    "email": siteConfig.company.email,
    "address": {
      "@type": "PostalAddress",
      ...siteConfig.company.address
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(localBusinessSchema)}
      />

      <AictumBot />
    <div className="bg-gradient-to-br from-[#1A1325] via-[#251636] to-[#0A0A10]">
      <Breadcrumb
        pageName="Contact Us"
        description="Let's connect and explore possibilities to build smarter tech solutions together"
      />

      {/* Contact Info Cards Section */}
    
    
      {/* Main Contact Form Section */}
      <Contact />

      {/* Map Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304418!2d-122.01116199999999!3d37.3346438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ/>

      {/* Work Together Section */}
      <WorkTogether />
    </div>
    </>
  );
};

export default ContactPage;