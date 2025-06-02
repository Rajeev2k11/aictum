import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="
Let's connect and explore possibilities"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
