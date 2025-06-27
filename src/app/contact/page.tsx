import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { WorkTogether } from "@/components/About/WorkTogether";
import FAQ from "@/components/FAQ/FAQ";
import { Metadata } from "next";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | Aictum",
  description: "Get in touch with our team for AI, Blockchain, and Web3 solutions",
};



const ContactPage = () => {
  return (
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
  );
};

export default ContactPage;