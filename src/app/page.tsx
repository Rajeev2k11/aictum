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

export const metadata: Metadata = {
  title: "Aictum"
  // other metadata
};

export default function Home() {
  return (
    <>
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
